FROM node:10.14.1
RUN mkdir -p /usr/src/grocerystore

COPY build  /usr/src/grocerystore/build
COPY authMiddleware.js /usr/src/grocerystore/
COPY productionData.json /usr/src/grocerystore/
COPY server.js /usr/src/grocerystore/
COPY deploy-package.json /usr/src/grocerystore/package.json

COPY serverQueriesSchema.graphql /usr/src/grocerystore/
COPY serverQueriesResolver.js /usr/src/grocerystore/
COPY serverMutationsSchema.graphql /usr/src/grocerystore/
COPY serverMutationsResolver.js /usr/src/grocerystore/

WORKDIR /usr/src/grocerystore

RUN echo 'package-lock=false' >> .npmrc

RUN npm install

EXPOSE 80

CMD ["node", "server.js", "./productionData.json", "80"]