FROM node:slim
WORKDIR /usr/src/app
ENV WELCOME_MESSAGE='Node & Express with docker, by Miki.Tran - Welcome 2 - update via docker-compose'
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 4000
CMD ["yarn","start"]