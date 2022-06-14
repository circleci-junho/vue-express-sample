FROM --platform=linux/amd64 node:16-alpine

WORKDIR /api

COPY . /api

RUN yarn install && \
    yarn add express && \
    yarn add global nodemon
    
EXPOSE 3000