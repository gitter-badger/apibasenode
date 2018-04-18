FROM node:8.9
## ARGS ##
ARG app_env=development
ARG app_port=3000
ARG app_debug_port=9229

## ENV ##
ENV NODE_ENV $app_env
ENV APP_PORT $app_port

## COPY ##
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

## INSTALL DEPENDENCIES ##
# RUN npm cache clear --force
RUN npm install

## BUILD APP ##
RUN npm run build

## EXPOSE APP PORT ##
EXPOSE $app_port

## EXPOSE DEBUG PORT ## - WHEN YOU RUN DEBUG MODE
# EXPOSE $app_debug_port

## RUN DEBUG MODE ##
# CMD npm run db:migrate; npm run debug

## RUN ##
CMD npm run db:migrate; node ./dist/index.js


