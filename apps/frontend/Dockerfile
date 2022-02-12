FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /usr/app
COPY ./package.json .

RUN yarn install --production=true --frozen-lockfile

COPY ./build ./build

EXPOSE 3000

CMD ["node", "build"]