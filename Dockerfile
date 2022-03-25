

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

FROM nginx
COPY ./dist/ /usr/share/nginx/html/
EXPOSE 80
