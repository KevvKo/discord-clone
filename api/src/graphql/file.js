require('dotenv').config();
const { gql } = require('apollo-server-express');
const { GraphQLUpload } = require('graphql-upload');
const fs = require('fs');
const {v4: uuid} = require('uuid');

const File = gql`

scalar Upload

type File{
    filename: String!
    mimetype: String!
    encoding: String!
    success: String!
    message: String!
    location: String
}

extend type Mutation {
    uploadFile (file: Upload! ): File!
}`

const fileResolvers = {
    Upload: GraphQLUpload,

    Mutation: {
        uploadFile: async( parent, { file }) => {
            const { filename, mimetype, createReadStream } = await image;
            let path = 'uploads/' + uuid() + filename;
            const stream = createReadStream();

            return new Promise((resolve, reject) => {
                stream
                    .pipe(fs.createWriteStream(path))
                    .on('finish', () => {
                        resolve({
                            success: true,
                            message: 'Successfully uploaded',
                            mimetype, filename, encoding, location: path
                        })
                    })
                    .on('error', (error) => {
                        console.error( error );
                        reject({
                            success: false,
                            message: 'Failed to upload'
                        })
                    })
            })
        }
    }
}

module.exports = {
    File,
    fileResolvers
}