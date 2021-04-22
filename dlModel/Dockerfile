FROM python:3.8

RUN mkdir /app
COPY app.py /app/app.py 
COPY predTest.csv /app/predTest.csv 
COPY regression_model-dem.h5 /app/regression_model-dem.h5
COPY req.txt /app/req.txt

# WORKDIR /app

RUN pip3 install -r /app/req.txt

CMD ['/usr/local/bin/python', '/app/app.py']
