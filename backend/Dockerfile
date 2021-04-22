FROM python:3.8

# RUN apk add build-base

# ADD requirements.txt /requirements.txt
ADD req.txt /req.txt
RUN pip install -r req.txt


# EXPOSE 80

COPY ./app /app

CMD ["python", "/app/main.py"]
