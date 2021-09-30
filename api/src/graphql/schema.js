const { gql, makeExecutableSchema } = require('apollo-server');
const { merge } = require('lodash')
const { User, userResolvers } = require('./user');
const { UserProfile, userProfileResolvers } = require('./userProfile');
const { Authentication, authenticationResolvers } = require('./authentication');

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
  typeDefs: [Query, User, UserProfile, Authentication],
  resolvers: merge(
    queryResolvers, 
    authenticationResolvers, 
    userResolvers, 
    userProfileResolvers 
  )
});

module.exports = {
  schema
}