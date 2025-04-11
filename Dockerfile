# Step 1: Use a Python base image
FROM python:3.8-slim

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the requirements.txt (if you have one) and install dependencies
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Step 4: Copy the application files into the container
COPY . /app/

# Step 5: Expose the container's port (to match the Kubernetes service)
EXPOSE 8080

# Step 6: Set the command to run the app
CMD ["python", "app.py"]
