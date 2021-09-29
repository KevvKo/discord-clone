const { gql, makeExecutableSchema } = require('apollo-server');
const { merge } = require('lodash')
const User = require('./User');
const Authentication = require('./Authentication');

const Query = gql`

type Query{
  user: User!
}`

const queryResolvers = {
  Query: {
    user: (parent, args, context) => {
      const { userId } = context
      return context.prisma.user.findUnique({
          where: { id: userId }
      });
    }
  }
}

const schema = makeExecutableSchema( {
  typeDefs: [Query, User, Authentication],
  resolvers: merge(queryResolvers)
});

module.exports = {
  schema,
  
}