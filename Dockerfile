# Use a Node.js LTS image
FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files and build
COPY . .
RUN npm run build

# Expose port and start application
EXPOSE 3004
CMD ["npm", "start"]
