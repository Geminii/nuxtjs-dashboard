# Taken from https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:current-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

ENV HOST 0.0.0.0
EXPOSE 3000

# Start command
# .. serving with hot reload
#CMD [ "npm", "run", "dev"]
CMD npm run build && npm run start
