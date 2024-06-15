FROM node:18-alpine AS build
WORKDIR /app
COPY packcage* ./
RUN npm ci
COPY . ./
RUN npm run build
