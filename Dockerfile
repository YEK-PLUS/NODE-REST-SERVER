FROM node:12-alpine

WORKDIR /usr/src/app

# ARG BIT_TOKEN
# ARG GIT_TOKEN
#
# ENV BIT_TOKEN $BIT_TOKEN
# ENV GIT_TOKEN $GIT_TOKEN

RUN apk add --update git

# COPY .npmrc .npmrc
COPY package.json package.json
RUN npm install

COPY . /usr/src/app

EXPOSE 8080

CMD [ "node", "index.js" ]
