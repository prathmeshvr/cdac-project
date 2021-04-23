Analytica project 

Following stack:
  Backend: Python (fastapi,pymongo) with MongoDB as Database
  Frontend: Angular 10
  Hardware: ESP32, RS485 Module and Energy Meter
  Communications Protocols: REST API,MQTT, Kafka
  Data Processing Tool: PySpark Streaming
  Deployment: Cloud(AWS EC2) + Local using Docker

This project is used to monitor IoT devices. It contains dashboards for IoT devices with the user management system. It uses fastapi python backend, MongoDB Databases, and pymongo python connector for MongoDB.Angular is used for making dashboards.ESP32 is used to fetch data from the machine.MQTT, Kafka these communication protocols are used. PySpark Streaming is used to process data which is coming from IoT device and load to MongoDB.Dockers are used for deployment applications on aws EC2 & local.
