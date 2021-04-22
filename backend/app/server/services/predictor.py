
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import backend as K
from tensorflow.keras.models import Sequential,load_model
from tensorflow.keras.layers import Dense, Dropout, LSTM
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os
from sklearn import preprocessing
from tensorflow.keras.callbacks import TensorBoard

np.random.seed(1234)  
PYTHONHASHSEED = 0


# read training data - It is the aircraft engine run-to-failure data.
train_df = pd.read_csv('PM_train.txt', sep=" ", header=None)
train_df.drop(train_df.columns[[26, 27]], axis=1, inplace=True)
train_df.columns = ['id', 'cycle', 'setting1', 'setting2', 'setting3', 's1', 's2', 's3',
                     's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13', 's14',
                     's15', 's16', 's17', 's18', 's19', 's20', 's21']
train_df = train_df.sort_values(['id','cycle'])
train_df.head()



# read test data - It is the aircraft engine operating data without failure events recorded.
test_df = pd.read_csv('PM_test.txt', sep=" ", header=None)
test_df.drop(test_df.columns[[26, 27]], axis=1, inplace=True)
test_df.columns = ['id', 'cycle', 'setting1', 'setting2', 'setting3', 's1', 's2', 's3',
                     's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13', 's14',
                     's15', 's16', 's17', 's18', 's19', 's20', 's21']



# read ground truth data - It contains the information of true remaining cycles for each engine in the testing data.
truth_df = pd.read_csv('PM_truth.txt', sep=" ", header=None)
truth_df.drop(truth_df.columns[[1]], axis=1, inplace=True)



# Data Labeling - generate column RUL(Remaining Usefull Life or Time to Failure)
rul = pd.DataFrame(train_df.groupby('id')['cycle'].max()).reset_index()
rul.columns = ['id', 'max']
train_df = train_df.merge(rul, on=['id'], how='left')
train_df['RUL'] = train_df['max'] - train_df['cycle']
train_df.drop('max', axis=1, inplace=True)




train_df['cycle_norm'] = train_df['cycle']
cols_normalize = train_df.columns.difference(['id','cycle','RUL'])
min_max_scaler = preprocessing.MinMaxScaler()
norm_train_df = pd.DataFrame(min_max_scaler.fit_transform(train_df[cols_normalize]), 
                             columns=cols_normalize, 
                             index=train_df.index)
join_df = train_df[train_df.columns.difference(cols_normalize)].join(norm_train_df)
train_df = join_df.reindex(columns = train_df.columns)







test_df['cycle_norm'] = test_df['cycle']
norm_test_df = pd.DataFrame(min_max_scaler.transform(test_df[cols_normalize]), 
                            columns=cols_normalize, 
                            index=test_df.index)
test_join_df = test_df[test_df.columns.difference(cols_normalize)].join(norm_test_df)
test_df = test_join_df.reindex(columns = test_df.columns)
test_df = test_df.reset_index(drop=True)





# We use the ground truth dataset to generate labels for the test data.
# generate column max for test data
rul = pd.DataFrame(test_df.groupby('id')['cycle'].max()).reset_index()
rul.columns = ['id', 'max']
truth_df.columns = ['more']
truth_df['id'] = truth_df.index + 1
truth_df['max'] = rul['max'] + truth_df['more']
truth_df.drop('more', axis=1, inplace=True)



# generate RUL for test data
test_df = test_df.merge(truth_df, on=['id'], how='left')
test_df['RUL'] = test_df['max'] - test_df['cycle']
test_df.drop('max', axis=1, inplace=True)








def r2_keras(y_true, y_pred):
    """Coefficient of Determination 
    """
    SS_res =  K.sum(K.square( y_true - y_pred ))
    SS_tot = K.sum(K.square( y_true - K.mean(y_true) ) )
    return ( 1 - SS_res/(SS_tot + K.epsilon()) )




estimator = load_model('regression_model-dem.h5',custom_objects={'r2_keras': r2_keras})




# pick a large window size of 50 cycles
sequence_length = 50



# function to reshape features into (samples, time steps, features) 
def gen_sequence(id_df, seq_length, seq_cols):
    """ Only sequences that meet the window-length are considered, no padding is used. This means for testing
    we need to drop those which are below the window-length. An alternative would be to pad sequences so that
    we can use shorter ones """
    # for one id I put all the rows in a single matrix
    data_matrix = id_df[seq_cols].values
    num_elements = data_matrix.shape[0]
    # Iterate over two lists in parallel.
    # For example id1 have 192 rows and sequence_length is equal to 50
    # so zip iterate over two following list of numbers (0,112),(50,192)
    # 0 50 -> from row 0 to row 50
    # 1 51 -> from row 1 to row 51
    # 2 52 -> from row 2 to row 52
    # ...
    # 111 191 -> from row 111 to 191
    for start, stop in zip(range(0, num_elements-seq_length), range(seq_length, num_elements)):
        yield data_matrix[start:stop, :]




# pick the feature columns 
sensor_cols = ['s' + str(i) for i in range(1,22)]
sequence_cols = ['setting1', 'setting2', 'setting3', 'cycle_norm']
sequence_cols.extend(sensor_cols)
sequence_cols.remove('setting3')
sequence_cols.remove('s1')
sequence_cols.remove('s5')
sequence_cols.remove('s10')
sequence_cols.remove('s16')
sequence_cols.remove('s18')
sequence_cols.remove('s19')


seq_array_test_last = [test_df[test_df['id']==id][sequence_cols].values[-sequence_length:] 
                       for id in test_df['id'].unique() if len(test_df[test_df['id']==id]) >= sequence_length]

seq_array_test_last = np.asarray(seq_array_test_last).astype(np.float32)
# print(seq_array_test_last)


y_mask = [len(test_df[test_df['id']==id]) >= sequence_length for id in test_df['id'].unique()]


label_array_test_last = test_df.groupby('id')['RUL'].nth(-1)[y_mask].values



label_array_test_last = label_array_test_last.reshape(label_array_test_last.shape[0],1).astype(np.float32)



y_pred_test = estimator.predict(seq_array_test_last)
y_true_test = label_array_test_last




# fig_verify = plt.figure(figsize=(20, 10))
# plt.plot(y_pred_test, color="blue")
# plt.plot(y_true_test, color="green")
# plt.title('prediction')
# plt.ylabel('value')
# plt.xlabel('row')
# plt.legend(['predicted', 'actual data'], loc='upper left')
# plt.show()
# fig_verify.savefig("Output/model_regression_verify.png")




iid=6




data=test_df[(test_df['id']==iid) & (test_df['RUL']==93) ].to_dict('records')
# print(data)





seq_array_t_l = [test_df[test_df['id']== iid][sequence_cols].values[-sequence_length:]]
seq_array_t_l = np.asarray(seq_array_t_l).astype(np.float32)




y_mask_t_l = [len(test_df[test_df['id']==iid]) >= sequence_length]


label_array_test_t_l = test_df.groupby('id')['RUL','id'].nth(-1)
# label_array_test_t_l = test_df.groupby('id')['RUL'].nth(-1)[y_mask].values
label_array_test_t_l = label_array_test_t_l[label_array_test_t_l['id']==iid].RUL.values
# label_array_test_t_l = label_array_test_t_l[label_array_test_t_l['RUL']>= sequence_length].RUL.values



label_array_test_t_l = label_array_test_t_l.reshape(label_array_test_t_l.shape[0],1).astype(np.float32)



y_pred_single = estimator.predict(seq_array_t_l)
test_set_single = pd.DataFrame(y_pred_single)
test_set_single.values


from sklearn.metrics import r2_score,max_error,mean_absolute_error
mean_absolute_error(label_array_test_t_l[0], y_pred_single[0])


def predict(){

}
