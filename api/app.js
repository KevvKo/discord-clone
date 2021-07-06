'use strict';

const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client')
const { getUserId } = require('./src/utils/utils');
const fs = require('fs');
const path = require('path');
const Query = require('./src/resolvers/Query');
const Mutation = require('./src/resolvers/Mutation');
const User = require('./src/resolvers/User');

const resolvers = { 
  User,
  Mutation
}

const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, './src/schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: ({req}) => {
    return {
      ...req,
      prisma,
      // userId: 
      //   req && req.headers.authorization
      //     ? getUserId(req)
      //     : null
    }
  }
})

server
  .listen()
  .then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});