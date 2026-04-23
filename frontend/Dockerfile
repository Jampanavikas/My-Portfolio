FROM node:20-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
# `npm ci` requires an exact lockfile match; use `npm install` to avoid build failures
# if lockfile was generated with a different npm resolver version.
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
