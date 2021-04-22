from time import sleep
from json import dumps
import json
import random
import threading
import time
from kafka import KafkaProducer

producer=None

def init_kafka(url):
    producer = KafkaProducer(bootstrap_servers=[url])


def kafka_producer(topic,msg):
    producer.send(topic, bytes(msg, encoding='utf-8'))

# for j in range(10):
#     print("Iteration", j)
#     data = {'hi': j}
#     msg = json.dumps({
#                 'timestamp': str(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())),
#                 'uid': '2',
#                 'heart_rate': random.randint(50, 70),
#                 'steps': random.randint(100, 1000)
#             })
#     producer.send('topic_test', bytes(msg, encoding='utf-8'))
#     # producer.send('topic_test', bytes("data"))
#     sleep(0.5)