FROM node:14.5.0
RUN apt-get -qy update && apt-get -qy install openssl
RUN npm install -g --unsafe-perm @prisma/cli

RUN mkdir /app
WORKDIR /app

COPY ./ ./prisma/

CMD npx prisma studio --experimental