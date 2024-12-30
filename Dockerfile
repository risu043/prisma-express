FROM node:20 as builder
WORKDIR /build

COPY . /build
RUN npm clean-install
RUN npm run build
RUN npx prisma generate

FROM node:20-slim

WORKDIR /app

COPY --from=builder /build/dist /app/dist/
COPY --from=builder /build/prisma/schema.prisma /app/prisma/schema.prisma
COPY --from=builder /build/node_modules/.prisma/ /app/node_modules/.prisma/
COPY --from=builder /build/node_modules/@prisma/ /app/node_modules/@prisma/

EXPOSE 3000

CMD ["node", "dist/index.js"]