# --------- Step 1: Build React frontend ---------
    FROM node:20 AS frontend-builder

    WORKDIR /app/frontend
    COPY frontend/package*.json ./
    RUN npm install
    COPY frontend/ ./
    RUN npm run build
    
    
    # --------- Step 2: Build Go backend ---------
    FROM golang:1.22 AS backend-builder
    
    WORKDIR /app
    COPY backend/ ./
    COPY --from=frontend-builder /app/frontend/build ./frontend/build
    RUN go build -o server main.go
    
    
    # --------- Step 3: Final container ---------
    FROM debian:bookworm-slim
    
    WORKDIR /app
    COPY --from=backend-builder /app/server .
    COPY --from=backend-builder /app/frontend/build ./frontend/build
    
    EXPOSE 8080
    CMD ["./server"]
    