#!/bin/bash

# Run the migrate command
poetry run python manage.py migrate

# Check if the migrate command was successful
if [ $? -eq 0 ]; then
  echo "Migrate command executed successfully, starting the server..."
  # Run the runserver command
  poetry run python manage.py runserver 0.0.0.0:8000
else
  echo "Migrate command failed, server not started."
fi
