# FROM ghcr.io/osgeo/gdal:alpine-small-latest

# ENV PYTHONDONTWRITEBYTECODE=1
# ENV PYTHONUNBUFFERED=1

# RUN apk add --no-cache python3 py3-pip postgresql-client geos curl

# RUN curl -sSL https://install.python-poetry.org | python - --version 1.5.0
# ENV PATH="${PATH}:/root/.local/bin"
# RUN poetry config virtualenvs.create false


# RUN mkdir /app
# WORKDIR /app

# RUN apk add --no-cache python3 py3-pip postgresql-client geos poetry

# COPY ./pyproject.toml ./poetry.lock ./
# RUN poetry install

# COPY . /app




########## Django server #############
FROM python:3.9-slim-buster as djangoServer

SHELL ["/bin/bash", "-eo", "pipefail", "-c"]

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apt-get update && apt-get install -y curl libpq-dev build-essential --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /src/*.deb

RUN curl -sSL https://install.python-poetry.org | python - --version 1.8.0
ENV PATH="${PATH}:/root/.local/bin"
RUN poetry config virtualenvs.create false

WORKDIR /usr/src/server
# ENV DJANGO_SETTINGS_MODULE=server.settings
ENV PYTHONPATH=/usr/src/server
ENV SECRET_KEY=changeme

COPY ./pyproject.toml ./poetry.lock ./
RUN poetry install
RUN poetry run python manage.py migrate
COPY . ./
