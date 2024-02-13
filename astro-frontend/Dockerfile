FROM node:lts AS runtime
WORKDIR /app

COPY . .

ARG ADOBE_ANALYTICS_URL=""

RUN npm install
RUN npm run build

ENV ADOBE_ANALYTICS_URL=$ADOBE_ANALYTICS_URL
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs