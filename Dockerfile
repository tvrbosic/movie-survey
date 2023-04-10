# ==== CONFIGURE =====
FROM node:lts-alpine 
WORKDIR /app
COPY . .

# ==== BUILD =====
RUN npm ci 
RUN npm run build

# ==== RUN =======
EXPOSE 3000
CMD [ "npx", "serve", "build" ]