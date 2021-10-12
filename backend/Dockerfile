FROM node:14-alpine as BUILD_IMAGE

WORKDIR /usr/app
COPY ./package.json ./

RUN apk --no-cache add curl
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | sh -s -- -b /usr/local/bin
RUN yarn install --production=true --frozen-lockfile

COPY . .

ENV NODE_ENV=production

RUN yarn build

RUN npm prune --production

FROM node:14-alpine

# Only copy your source code without system file
COPY --from=BUILD_IMAGE /usr/app /usr/app

WORKDIR /usr/app

EXPOSE 1337

ENV NODE_ENV=production

CMD ["yarn", "start"]