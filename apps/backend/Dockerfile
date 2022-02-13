FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /usr/app
COPY package.json yarn.lock ./

COPY . .

EXPOSE 1337

ENV NODE_ENV=production

CMD ["yarn", "start"]