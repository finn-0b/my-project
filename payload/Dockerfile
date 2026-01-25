FROM node:20-alpine AS base

# ===== DEPS STAGE =====
FROM base AS deps
WORKDIR /app

# Install build dependencies for node-gyp (in case sharp needs to compile)
RUN apk add --no-cache \
    libc6-compat \
    python3 \
    make \
    g++

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies with correct flags for Alpine ARM64
RUN npm ci --legacy-peer-deps && \
    npm install --arch=arm64 --os=linux --libc=musl sharp

# ===== BUILDER STAGE =====
FROM base AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build the application
RUN npm run build

# ===== RUNNER STAGE =====
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Create .next directory
RUN mkdir .next && chown nextjs:nodejs .next

# Copy standalone build output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
