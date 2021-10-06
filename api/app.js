'use strict';

const { ApolloServer, PubSub } = require('apollo-server');
const { PrismaClient } = require('@prisma/client')
const { getUserId } = require('./src/utils/utils');
const { schema } = require('./src/graphql/schema');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

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
  }
})

server
  .listen()
  .then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});