
# Use lightweight Nginx Alpine image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx welcome page
RUN rm -rf ./*

# Copy website files into Nginx web directory
COPY . .

# Expose HTTP port
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
