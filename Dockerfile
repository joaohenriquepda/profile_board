FROM node:19-slim

COPY . .
WORKDIR /home/node/app
RUN npm install -g @angular/cli@15.2.7
RUN npm install

EXPOSE 4200
