const { gql } = require('apollo-server');

const typeDefs = gql`

type AuthPayload {
  token: String
  user: User
}

input signUpData {
  email: String!
  password: String!
  name: String! 
  status: Boolean!
  active: Boolean!
}`

module.exports = typeDefs;