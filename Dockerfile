FROM node:22.4.0-alpine3.20

# update
RUN apk update && apk upgrade && apk add --no-cache bash

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

EXPOSE 3000

CMD ["yarn", "run", "dev"]
