FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /usr/app
COPY package.json yarn.lock ./

COPY ./build ./build

EXPOSE 3000

CMD ["node", "build"]