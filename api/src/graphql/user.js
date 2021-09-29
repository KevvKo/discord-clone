const { gql } = require('apollo-server');
const bcrypt = require('bcrypt')

const User = gql`

type Mutation {
  addPhoneNumber( phoneNumber: String!): User!
  changeActive( active: Boolean! ): User!
  changePassword( newPassword: String!, password: String! ): User!
  changeUsername( newUsername: String!, password: String! ): User!
  changeEmail( newEmail: String!, password: String! ): User!
  deleteAccount( password: String! ): User!
  setUserStatus ( status: Boolean! ): User!
}


type User {
  id: ID!
  name: String!
  email: String!
  phoneNumber: String
  status: Boolean!
  active: Boolean!
}`

const userResolvers = {
    Mutation: {
        setUserStatus: async ( parent, args, context, info ) => {
    
            const { userId } = context;
            const updatedUser = await context.prisma.user.update({
                where: { id: userId },
                data: { status: args.status } 
            })

            return updatedUser
        },
        changePassword: async ( parent, args, context, info ) => {

            const saltRounds =  5;
            const { userId } = context;
            const user = await context.prisma.user.findUnique({ where: { id: userId}});

            const valid = await bcrypt.compare( args.password, user.password );
            if(!valid) throw new Error('Invalid password');

            const password = await bcrypt.hash(args.newPassword, saltRounds);

            const updatedUser = await context.prisma.user.update({ 
                where: { id: userId},
                data: { password: password }
            })

            return updatedUser;
        },
        changeUsername: async ( parent, args, context, info ) => {
    
            const { userId } = context;
            const user = await context.prisma.user.findUnique({ where: { id: userId}});

            const valid = await bcrypt.compare( args.password, user.password );
            if(!valid) throw new Error('Invalid password');

            const updatedUser = await context.prisma.user.update({ 
                where: { id: userId},
                data: { name: args.newUsername}
            })

            return updatedUser;
        },
        changeEmail: async ( parent, args, context, info ) => {
        
            const { userId } = context;
            const user = await context.prisma.user.findUnique({ where: { id: userId}});

            const valid = await bcrypt.compare( args.password, user.password );
            if(!valid) throw new Error('Invalid password');

            const updatedUser = await context.prisma.user.update({ 
                where: { id: userId},
                data: { email: args.newEmail}
            })

            return updatedUser;
        },
        changeActive: async ( parent, args, context, info ) => {
            const { userId } = context;

            const updatedUser = await context.prisma.user.update({ 
            where: { id: userId},
            data: { active: args.active }
            })

            return updatedUser; 
        },
        deleteAccount: async ( parent, args, context, info ) => {
            const { userId } = context;
            const user = await context.prisma.user.findUnique({ where: { id: userId}});

            const valid = await bcrypt.compare( args.password, user.password );
            
            if(!valid) throw new Error('Invalid password');

            const updatedUser = await context.prisma.user.delete({ 
                where: { id: userId},
            })

            return updatedUser; 
        },
        addPhoneNumber: async ( parent, args, context, info ) => {
            const { userId } = context;
            const updatedUser = await context.prisma.user.update({
                where: { id: userId },
                data: { phoneNumber: args.phoneNumber } 
            })

            return updatedUser;
        }

    }
}
module.exports = {
  User,
  userResolvers
};