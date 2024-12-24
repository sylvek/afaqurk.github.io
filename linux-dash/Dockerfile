# Build stage
FROM golang:1.20-alpine AS builder

WORKDIR /build
# Initialize go module
RUN go mod init linux-dash-server

# Copy go source
COPY app/server/index.go .

# Build static binary with all dependencies included
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o server

FROM alpine:3.18

WORKDIR /

# Copy binary and make executable
COPY --from=builder /build/server /server
RUN chmod +x /server

# Copy shell script and make executable
COPY app/server/linux_json_api.sh /
RUN chmod +x /linux_json_api.sh

# Install required system utilities including cron
RUN apk add --no-cache bash util-linux sysstat dcron


# Copy only required web assets to root
COPY app/index.html /
COPY app/linuxDash.min.css /
COPY app/linuxDash.min.js /

EXPOSE 8888

ENTRYPOINT ["/server"]