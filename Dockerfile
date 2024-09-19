FROM node:18.18.2

WORKDIR /app

COPY package.json .
RUN npm install
COPY . ./

CMD ["npm", "run", "local"]
