# # Docker Image which is used as foundation to create
# # a custom Docker Image with this Dockerfile
# FROM node:14-alpine

# # A directory within the virtualized Docker environment
# # Becomes more relevant when using Docker Compose later
# WORKDIR /user/src/app

# # Copies package.json and package-lock.json to Docker environment
# COPY package*.json ./

# # Installs all node packages
# RUN npm install

# # Copies everything over to Docker environment
# COPY . .

# # # Uses port which is used by the actual application
# # EXPOSE 3000

# # Finally runs the application
# CMD [ "npm", "start" ]

# Stage 1 (named "build-step"): Production React Build
FROM node:14-alpine AS build-steps

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# Stage 2: Start fresh, install a static server,
# and copy just the build artifacts from the previous stage.
FROM node:14-alpine

WORKDIR /app
RUN npm install -g serve
COPY --from=build-steps /app/build ./build

EXPOSE 5000
CMD ["serve", "-s", "build", "-l", "5000"]