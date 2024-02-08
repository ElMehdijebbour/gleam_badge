# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy your application files
COPY . .

# Build your React app
RUN npm run build

# Expose the port your app is running on
EXPOSE 3000

# Start your application
CMD ["npm", "start"]