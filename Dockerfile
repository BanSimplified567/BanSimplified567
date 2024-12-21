# Use an official Node.js runtime as the base image
FROM node:18-alpine AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your project files into the container
COPY . .

# Build the React app using Vite
RUN npm run build

# Use Nginx as the server for the built app
FROM nginx:alpine

# Copy the build files from the previous step
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
