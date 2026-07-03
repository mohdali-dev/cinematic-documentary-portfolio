# Stage 1: Build the React SPA
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency files first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the production static bundle
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine

# Copy custom Nginx configuration to support client-side routing (React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the production build outputs to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose Port 80 (standard HTTP port)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
