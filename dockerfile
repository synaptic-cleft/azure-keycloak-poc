FROM nginx:1.17.10-alpine

COPY ./build/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf