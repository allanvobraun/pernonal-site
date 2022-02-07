FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /usr/app
COPY ./package.json ./

RUN yarn install --production=true --frozen-lockfile

COPY . .

EXPOSE 1337

ENV NODE_ENV=production

CMD ["yarn", "start"]