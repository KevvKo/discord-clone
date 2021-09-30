require('dotenv').config();
const { gql } = require('apollo-server');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { APP_SECRET } = process.env;

const UserProfile = gql`

type UserProfile {
    id: ID!
    color: String!
}

extend type Mutation {
    setColor (color: String): UserProfile!
}`

const userProfileResolvers = {
    Mutation: {}
}

module.exports = {
    UserProfile,
    userProfileResolvers
}