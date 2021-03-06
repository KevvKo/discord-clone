const { gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { merge } = require('lodash')
const { User, userResolvers } = require('./user');
const { UserProfile, userProfileResolvers } = require('./userProfile');
const { Authentication, authenticationResolvers } = require('./authentication');
const { File, fileResolvers } = require('./file');
const Query = gql`

type Query{
  user: User!
  userProfile: UserProfile!
}`

const queryResolvers = {
  Query: {
    user: async (parent, args, context) => {
      const { userId } = context
      return context.prisma.user.findUnique({
          where: { id: userId }
      });
    },
    userProfile: async (parent, args, context) => {
      const { userId } = context;
      return context.prisma.userprofile.findUnique({
          where: { userId: userId }
      });
    }
  }
}

const schema = makeExecutableSchema( {
  typeDefs: [Query, User, File, UserProfile, Authentication],
  resolvers: merge(
    queryResolvers, 
    authenticationResolvers, 
    userResolvers, 
    userProfileResolvers, 
    fileResolvers
  )
});

module.exports = {
  schema
}