require('dotenv').config();
const { gql } = require('apollo-server-express');
const { GraphQLUpload } = require('graphql-upload');
const fs = require('fs');

const UserProfile = gql`

scalar Upload

type UserProfile {
    userId: ID!
    color: String!
    description: String
    path: String
}

type Image{
    filename: String!
    mimetype: String!
    encoding: String!
}

extend type Mutation {
    setColor (color: String): UserProfile!
    setDescription (description: String): UserProfile!
    setPath (string: String): UserProfile!
    uploadImage (image: Upload! ): Image!
}`

const userProfileResolvers = {
    Upload: GraphQLUpload,

    Mutation: {
        setColor: async ( parent, args, context ) => {
            const { userId } = context;
            const updatedUserProfile = await context.prisma.userprofile.update({
                where: { userId: userId },
                data: { color: args.color } 
            }) 

            return updatedUserProfile;
        },
        setDescription: async ( parent, args, context ) => {
            const { userId } = context;
            const updatedUserProfile = await context.prisma.userprofile.update({
                where: { userId: userId },
                data: { description: args.description } 
            })

            return updatedUserProfile;
        },
        setPath: async ( parent, args, context ) => {
            const { userId } = context;
            const updatedUserProfile = await context.prisma.userprofile.update({
                where: { userId: userId },
                data: { path: args.description } 
            })

            return updatedUserProfile;
        },
        uploadImage: async( parent, { file }) => {
            const { filename, mimetype, createReadStream } = await image;
            const stream = createReadStream();
            const writeStream = fs.createWriteStream('./src/assets/img');
            return true;
        }
    }
}

module.exports = {
    UserProfile,
    userProfileResolvers
}