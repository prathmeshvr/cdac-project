import os
import pymongo
import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import backend as K
from tensorflow.keras.models import load_model
from sklearn.metrics import r2_score,max_error,mean_absolute_error,mean_squared_error

global estimator,sequence_len


def r2_keras(y_true, y_pred):
    """Coefficient of Determination 
    """
    SS_res =  K.sum(K.square( y_true - y_pred ))
    SS_tot = K.sum(K.square( y_true - K.mean(y_true) ) )
    return ( 1 - SS_res/(SS_tot + K.epsilon()) )

def load_model_reg():
    estimator = load_model('regression_model-dem.h5',custom_objects={'r2_keras': r2_keras})
    

def gen_sequence(id_df, seq_length, seq_cols):
    """ Only sequences that meet the window-length are considered, no padding is used. This means for testing
    we need to drop those which are below the window-length. An alternative would be to pad sequences so that
    we can use shorter ones """
    # for one id I put all the rows in a single matrix
    data_matrix = id_df[seq_cols].values
    num_elements = data_matrix.shape[0]
    for start, stop in zip(range(0, num_elements-seq_length), range(seq_length, num_elements)):
        yield data_matrix[start:stop, :]

def preprocess_data(iid):
    # myclient = pymongo.MongoClient("mongodb+srv://cdac:cdac@cluster0.fa505.mongodb.net/cdac?retryWrites=true&w=majority")
    # mydb = myclient["DB"]
    # test = mydb["predTest"]
    # train = mydb["predTrain"]
    # test_data=[]
    # train_data=[]
    # for x in test.find():
    #     test_data.append(x) 
    sequence_length = 50
    # for x in train.find():
    #     train_data.append(x) 

    # test_df=pd.DataFrame(test_data)
    # test_df=test_df.drop(['_id'],axis=1)
    # # test_df
    # train_df=pd.DataFrame(train_data)
    # train_df=train_df.drop(['_id'],axis=1)

    test_df=pd.read_csv('predTest.csv')

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

    # iid=6
    seq_array_t_l = [test_df[test_df['id']== iid][sequence_cols].values[-sequence_length:]]
    seq_array_t_l = np.asarray(seq_array_t_l).astype(np.float32)
    y_mask_t_l = [len(test_df[test_df['id']==iid]) >= sequence_length]
    y_mask_t_l
    label_array_test_t_l = test_df.groupby('id')['RUL','id'].nth(-1)

    # label_array_test_t_l = test_df.groupby('id')['RUL'].nth(-1)[y_mask].values
    label_array_test_t_l = label_array_test_t_l[label_array_test_t_l['id']==iid].RUL.values
    # label_array_test_t_l = label_array_test_t_l[label_array_test_t_l['RUL']>= sequence_length].RUL.values
    label_array_test_t_l
    label_array_test_t_l = label_array_test_t_l.reshape(label_array_test_t_l.shape[0],1).astype(np.float32)
    print(label_array_test_t_l.shape)
    print("label_array_test_t_l")
    print(label_array_test_t_l)


    return seq_array_t_l,label_array_test_t_l

def predict(id):
    # load_model_reg()
    seq_array_t_l,y_true = preprocess_data(id)
    y_pred_single = estimator.predict(seq_array_t_l)
    # test_set_single = pd.DataFrame(y_pred_single)
    mse=mean_squared_error(y_true[0], y_pred_single[0])**0.5
    return y_pred_single,y_true,mse



# print(y_pred)
# print(y_true)
# print(mse)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import  Body
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/tfeTimeToFailure")
async def root():
    y_pred,y_true,mse=predict(6)
    return {
        "y_pred": str(y_pred[0][0]),
        "y_true": str(y_true[0][0]),
        "mse": str(mse)
    }
import uvicorn
if __name__ == "__main__":
    estimator = load_model('regression_model-dem.h5',custom_objects={'r2_keras': r2_keras})
    uvicorn.run(app, host="127.0.0.1", port=8081)