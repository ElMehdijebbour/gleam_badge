# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your app
RUN npm run build

# Use the official nginx image as a base image
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
