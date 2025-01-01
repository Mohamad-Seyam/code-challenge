# ------------ STAGE 1: Build ------------
FROM node:20 AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if you use it)
COPY package*.json ./

# Install dependencies (including dev dependencies for TypeScript)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build


# ------------ STAGE 2: Production ------------
FROM node:20 AS production

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy build artifacts from builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Copy .env if needed at runtime
# (If you rely on Docker Compose environment variables, you can skip copying .env)
COPY .env ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/index.js"]