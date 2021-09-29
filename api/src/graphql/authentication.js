require('dotenv').config();
const { gql } = require('apollo-server');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { APP_SECRET } = process.env;

const Authentication = gql`

type AuthPayload {
    token: String
    user: User
}

extend type Mutation {
    signup ( signUpData: signUpData ): AuthPayload
    login ( email: String!, password: String! ): AuthPayload
}

input signUpData {
    email: String!
    password: String!
    name: String! 
    status: Boolean!
    active: Boolean!
}`

const authenticationResolvers = {
    Mutation: {
        login: async ( parent, args, context, info ) => {

            const user = await context.prisma.user.findUnique({ where: { email: args.email } });
            if (!user) throw new Error('No such user found');
            if (!user.active) throw new Error('This account is inactive');

            const valid = await bcrypt.compare(args.password, user.password);
            if (!valid) throw new Error('Invalid password');

            const token = jwt.sign({ userId: user.id }, APP_SECRET);

            return {
                token,
                user,
            }
        },
        signup: async ( parent, args, context, info ) => {
            const saltRounds =  5;
            const data = args.signUpData
            const password = await bcrypt.hash( data.password, saltRounds);
            const user = await context.prisma.user.create({ 
                data: { 
                    ...data, 
                    password,
                    userprofile:{
                    create: {}
                    }
                } 
            });
            const token = jwt.sign({ userId: user.id }, APP_SECRET);

            return {
                token,
                user
            }
        },
    }
}

module.exports = {
    Authentication,
    authenticationResolvers
}