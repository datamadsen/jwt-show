# Dockerfile for jwt.show

# generate changelog stage
FROM perl:latest as changelog-stage
RUN apt-get update
RUN apt-get install -y git
COPY . /jwt-show
WORKDIR /jwt-show
RUN ./bin/generate-changelog-entries > ./src/models/Changes.js

# build stage
FROM node:lts as build-stage
COPY --from=changelog-stage /jwt-show /app
WORKDIR /app
RUN yarn install
RUN yarn run build

# production stage
FROM nginx:stable as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./etc/nginx/conf.d /etc/nginx/conf.d
EXPOSE 80
