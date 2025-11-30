# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source and build
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production

RUN apk add --no-cache curl

# Install serve to serve static files
RUN npm install -g serve@14.2.1

WORKDIR /app

# Copy built app from build stage
COPY --from=build /app/dist ./dist

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S reactapp -u 1001

# Change ownership to non-root user
RUN chown -R reactapp:nodejs /app
USER reactapp

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

EXPOSE 3000

# Serve the built app
CMD ["serve", "-s", "dist", "-l", "3000", "--no-clipboard"]