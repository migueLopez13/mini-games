# Use the official Python base image
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the project code into the container
COPY . .

# Expose the Django development server port (change as needed)
EXPOSE 8001
