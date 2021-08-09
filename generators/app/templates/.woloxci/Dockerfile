FROM node:14.17.1-alpine

WORKDIR /home/node

COPY package.json .

RUN npm install
ENV PATH /home/node/node_modules/.bin:$PATH

WORKDIR /home/node/app
