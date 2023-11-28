# BASE
FROM node:latest AS base

WORKDIR /app

COPY . .
EXPOSE 3001

# DEVELOPMENT
FROM base AS dev

RUN npm install && npm run build

CMD ["npm", "start"]