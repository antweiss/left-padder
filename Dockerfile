FROM node:4.4.3
MAINTAINER Anton Weiss <anton@otomato.link>
LABEL Description="Serve left-padded strings"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --silent
COPY . /usr/src/app
EXPOSE 3000
CMD [ "npm", "start" ]
