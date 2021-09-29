const { gql, makeExecutableSchema } = require('apollo-server');
const { merge } = require('lodash')
const { User, userResolvers } = require('./user');
const {
  Authentication,
  authenticationResolvers
} = require('./authentication');

const Query = gql`

type Query{
  user: User!
}`

const queryResolvers = {
  Query: {
    user: async (parent, args, context) => {
      const { userId } = context
      return context.prisma.user.findUnique({
          where: { id: userId }
      });
    }
  }
}

const schema = makeExecutableSchema( {
  typeDefs: [Query, User, Authentication],
  resolvers: merge(queryResolvers, authenticationResolvers, userResolvers )
});

module.exports = {
  schema
}