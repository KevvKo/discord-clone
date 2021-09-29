const { gql } = require('apollo-server');

const typeDefs = gql`

type Mutation {
  addPhoneNumber( phoneNumber: String!): User!
  changeActive( active: Boolean! ): User!
  changePassword( newPassword: String!, password: String! ): User!
  changeUsername( newUsername: String!, password: String! ): User!
  changeEmail( newEmail: String!, password: String! ): User!
  deleteAccount( password: String! ): User!
  setUserStatus ( status: Boolean! ): User!
  signup ( signUpData: signUpData ): AuthPayload
  login ( email: String!, password: String! ): AuthPayload
}


type User {
  id: ID!
  name: String!
  email: String!
  phoneNumber: String
  status: Boolean!
  active: Boolean!
}`

module.exports = typeDefs;