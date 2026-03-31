FROM node:18-alpine

WORKDIR /usr/src/app

COPY server.js .

CMD ["node", "server.js"]