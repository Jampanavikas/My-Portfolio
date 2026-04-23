FROM node:20-alpine

WORKDIR /app

# Install production deps first (better caching)
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy only what the backend needs
COPY server.js ./

ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

CMD ["npm", "start"]
