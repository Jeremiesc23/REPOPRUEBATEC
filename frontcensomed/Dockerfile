# ---------- Build ----------
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Inyecta variables CRA en build time
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build


# ---------- Run ----------
FROM node:20-alpine
WORKDIR /app

RUN npm i -g serve
COPY --from=builder /app/build ./build

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["sh", "-c", "serve -s build -l $PORT"]
