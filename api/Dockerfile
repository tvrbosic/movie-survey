# ==== CONFIGURE =====
FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# ==== RUN =======
EXPOSE 3001
CMD ["npm", "start"]
