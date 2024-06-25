# Stage 1: Compile and Build Angular codebase

FROM node:14-alpine as build
WORKDIR /usr/local/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod


# Stage 2: Serve app with Nginx server

FROM nginx:alpine
COPY --from=build /usr/local/app/dist /usr/share/nginx/html
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
