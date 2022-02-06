FROM node:14-alpine as BUILD_IMAGE

ENV NODE_ENV=production

WORKDIR /usr/app
COPY ./package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:14-alpine

COPY --from=BUILD_IMAGE /usr/app /usr/app

WORKDIR /usr/app

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "./build"]