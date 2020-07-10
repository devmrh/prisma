FROM node:14.5.0
RUN npm install -g --unsafe-perm @prisma/cli

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/

RUN npm install
RUN prisma generate

CMD [ "npm", "run", "dev" ]