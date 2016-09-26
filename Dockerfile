FROM node:6-slim
MAINTAINER cody.zuschlag@gmail.com
LABEL name="jasql"

EXPOSE 443
WORKDIR /usr/src/app
ENV npm_config_loglevel=warn
ADD . .

RUN npm install
# CMD bash -c "npm_config_color=always npm start 2>&1 | tee log.txt"
CMD npm start
