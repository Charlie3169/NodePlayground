FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5080

EXPOSE 5080

CMD [ "npm", "start" ]
