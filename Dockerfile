FROM node:13.10.1-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 9999
CMD ["npm", "start"]

