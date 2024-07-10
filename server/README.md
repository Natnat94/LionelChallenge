# Backend server

*This is not production ready at all !*

## Project Overview

This project uses Docker Compose to launch a server and its dependencies. The Docker Compose setup streamlines the process of building and running the application by defining all the necessary services in a single configuration file.

## Prerequisites

Before you start, ensure you have the following installed on your system:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to run the Docker Compose file and launch the server:

```bash
cd server
docker compose up -d
```

You should access the API at <http://localhost:8000/api/v1/>

*You might encouter an error in minio becaue no bucket have been set, access the minio UI trought port 9001 and create a bucket of name "uploadedpictures" or any name you want that need to be set in the "STORAGE_BUCKET" env.*