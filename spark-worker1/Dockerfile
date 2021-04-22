# FROM bde2020/spark-base:3.0.2-hadoop3.2
FROM bde2020/spark-submit:2.4.5-hadoop2.7

# LABEL maintainer="Gezim Sejdiu <g.sejdiu@gmail.com>, Giannis Mouchakis <gmouchakis@gmail.com>"

ENV SPARK_MASTER_NAME spark-master
ENV SPARK_MASTER_PORT 7077
ENV KAFKA_BROKER kafka
# ENV SPARK_APPLICATION_JAR_LOCATION /app/application.jar
ENV SPARK_APPLICATION_PYTHON_LOCATION /app/receiver.py
# ENV SPARK_APPLICATION_MAIN_CLpip install --upgrade pipASS my.main.Application
ENV SPARK_APPLICATION_ARGS ""
# RUN pip3 install --upgrade pip3
# RUN pip3 install pymongo
# RUN pip freeze

# RUN export LD_LIBRARY_PATH=$HADOOP_HOME/lib/native
# # (OR) If you have hadoop library installed at /usr/lib/
# RUN export LD_LIBRARY_PATH=/usr/lib/hadoop/lib/native


COPY receiver.py /app/receiver.py
COPY global_vals.py /app/global_vals.py
COPY mongo_utils.py /app/mongo_utils.py
COPY spark-streaming-kafka-0-8_2.11-2.4.5.jar /app/spark-streaming-kafka-0-8_2.11-2.4.5.jar
COPY submit.sh /

# Copy the requirements.txt first, for separate dependency resolving and downloading
# ONBUILD COPY requirements.txt /app/
RUN pip3 install pymongo
# RUN pip3 install pyspark==2.4.5
# RUN pip3 install py4j

# Copy the source code
# ONBUILD COPY . /app

CMD ["/bin/bash", "/submit.sh"]
