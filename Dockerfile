FROM node:slim

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start" ]

