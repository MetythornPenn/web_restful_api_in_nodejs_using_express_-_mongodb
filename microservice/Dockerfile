# Backend Dockerfile
FROM node:14-alpine
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend .
EXPOSE 3000
CMD [ "npm", "start" ]

# Machine Learning Backend Dockerfile
FROM python:3.9-slim
WORKDIR /app/ml_backend
COPY ml_backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY ml_backend .
EXPOSE 8000
CMD [ "python", "main.py" ]

# Frontend Dockerfile
FROM node:14-alpine
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
