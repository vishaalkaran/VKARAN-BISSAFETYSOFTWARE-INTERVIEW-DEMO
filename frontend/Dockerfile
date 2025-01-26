# Use Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app/frontend/react-app

# Copy package.json and package-lock.json for dependency installation
COPY react-app/package*.json ./

# Install dependencies during the build (optional for faster start times)
RUN npm install

# Copy the rest of the application code
COPY react-app/ ./

# Expose the development server port
EXPOSE 3000

# Default command: Ensure dependencies are installed, then start the server
CMD ["/bin/sh", "-c", "if [ ! -d node_modules ]; then npm install; fi && npm run start-dev"]
