# FROM node:20

# WORKDIR /app

# COPY . .
# RUN npm install

# EXPOSE 3000

# CMD ["npm", "run", "migrate"]

FROM node:20

WORKDIR /app

COPY . .
RUN npm install

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "start"]