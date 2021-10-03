require('dotenv').config();
const { gql } = require('apollo-server');

const UserProfile = gql`

type UserProfile {
    userId: ID!
    color: String!
    description: String
}

extend type Mutation {
    setColor (color: String): UserProfile!
    setDescription (description: String): UserProfile!
}`

const userProfileResolvers = {
    Mutation: {
        setColor: async ( parent, args, context, info ) => {
            const { userId } = context;
            const updatedUserProfile = await context.prisma.userprofile.update({
                where: { userId: userId },
                data: { color: args.color } 
            }) 

            return updatedUserProfile;
        },
        setDescription: async ( parent, args, context, info ) => {
            const { userId } = context;
            const updatedUserProfile = await context.prisma.userprofile.update({
                where: { userId: userId },
                data: { description: args.description } 
            })

            return updatedUserProfile;
        },
    }
}

module.exports = {
    UserProfile,
    userProfileResolvers
}