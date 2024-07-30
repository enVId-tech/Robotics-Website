FROM node:lts

WORKDIR /docker-react

COPY . /docker-react

RUN npm install

RUN npm run start