FROM node:carbon

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
ENV NODE_ENV production
RUN npm run dist
EXPOSE 8080
CMD [ "npm", "start" ]