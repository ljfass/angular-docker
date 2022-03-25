

# FROM hoosin/alpine-nginx-nodejs:latest
# RUN cd /usr/share/nginx/html
# RUN mkdir dist
# COPY ./dist/ng-countries-universal/server /usr/share/nginx/html
# COPY ./dist/ /usr/share/nginx/html/dist
# COPY /deploy/default.conf /etc/nginx/conf.d/default.conf
# WORKDIR /usr/share/nginx/html
# RUN mkdir dist
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build --prod
# COPY  ./dist /dist
# COPY ./dist/ng-countries-universal/server /usr/share/nginx/html
# COPY /deploy/default.conf /etc/nginx/conf.d/default.conf

# CMD ["node", "/usr/share/nginx/html/server/main.js"]
#EXPOSE 80

FROM node:14.15.5-slim
RUN apt-get update && apt-get install -y git
RUN npm install -g typescript @angular/cli
# EXPOSE 80 443
