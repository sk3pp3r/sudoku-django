FROM python:3.8
RUN mkdir app
RUN python -m pip install django
WORKDIR /app
COPY . /app

EXPOSE 8000
# RUN ["/bin/bash", "-c", "python" "manage.py" "runserver"]
#CMD ["/usr/bin/python3", "manage.py", "migrate" && "/usr/bin/python3", "manage.py", "runserver"]
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
