# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Expose port
EXPOSE 3000

# f a React project exists, it starts the server.
# If no project exists, it keeps the container running for manual initialization.
CMD ["/bin/sh", "-c", "[ -f package.json ] && npm start || tail -f /dev/null"]