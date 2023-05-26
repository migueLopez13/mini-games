# Use the official Python base image
FROM python:3.9

# Set the working directory in the container
WORKDIR /app/mini_games

# Install dependencies
COPY requirements.txt .
RUN pip install --upgrade -r requirements.txt

# Copy the project code into the container
COPY . /app

# Expose the Django development server port (change as needed)
EXPOSE 8001
