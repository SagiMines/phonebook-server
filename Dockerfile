# syntax:docker/dockerfile:1

FROM node:18.14.2-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "dist/main" ]

