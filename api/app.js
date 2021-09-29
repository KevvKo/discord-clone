'use strict';

const { ApolloServer, PubSub } = require('apollo-server');
const { PrismaClient } = require('@prisma/client')
const { getUserId } = require('./src/utils/utils');
const Subscription = require('./src/resolvers/Subscription');
const { schema } = require('./src/schema');
const resolvers = require('./src/resolvers/resolvers')

const prisma = new PrismaClient()
const pubsub = new PubSub()
const server = new ApolloServer({
  schema: schema,
  context: ({req}) => {
    return {
      ...req,
      prisma,
      pubsub,
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