'use strict';

const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client')

const fs = require('fs');
const path = require('path');

const resolvers = {
  Query: {

  },
  Mutation: {
   
  },
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: {
    prisma,
  }
})