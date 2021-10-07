'use strict';

const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const { PrismaClient } = require('@prisma/client')
const { getUserId } = require('./src/utils/utils');
const { schema } = require('./src/graphql/schema');
const express = require('express');
const http = require ('http');
const {
  GraphQLUpload,
  graphqlUploadExpress, // A Koa implementation is also exported.
} = require('graphql-upload');

async function startServer(){
  const app = express();
  const httpServer = http.createServer(app);
  const prisma = new PrismaClient()
  const server = new ApolloServer({
    schema: schema,
    context: ({req}) => {
      return {
        ...req,
        prisma,
        userId: 
          req && req.headers.authorization
            ? getUserId(req)
            : null
      }
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })
  
  await server.start();
  app.use(graphqlUploadExpress());
  server.applyMiddleware({
     app,
     path: '/'
  })
  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startServer();