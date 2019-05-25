# Dockerfile for jwt.show

# We set a number of environment variables when serving with nginx. Those
# variables are necessary for nginx-proxy and letsencrypt-nginx-proxy-companion
# to work.
#
# The nginx-proxy container, if running, makes it possible to have multiple
# nginx containers listening on port 80. Read more:
# https://github.com/jwilder/nginx-proxy
#
# The letsencrypt-nginx-proxy-companion, if running, automatically gets and
# renews certificates from letsencrypt.org. Read more:
# https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion

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
RUN rm -rf /etc/nginx/conf.d/
COPY ./etc/nginx/conf.d /etc/nginx/conf.d
ENV VIRTUAL_HOST jwt.show
ENV LETSENCRYPT_HOST jwt.show
ENV LETSENCRYPT_EMAIL tim@datamadsen.dk
VOLUME /var/log/nginx/jwt.show:/var/log/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
