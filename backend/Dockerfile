FROM node:alpine

# ensure environmental variables are available
ARG PORT
ENV PORT=$PORT

# Set working directory
WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# copy the backend code
# you would copy only ./dist for production, 
COPY ./dist .
# but we're developing inside the container so we copy everything
# COPY . .

# when we have the docker-compose up and running, this will be unnecessary
EXPOSE $PORT

# Build the typescript code
# this soulw be unnecessary in production
RUN npm run build

# if building the whole folder
# CMD [ "npm", "run", "dev" ]
# if building only the dist folder
CMD [ "node", "server.js" ]