const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { APP_SECRET } = process.env;

async function newConversation( parent, args, contect, info ){
  const { userId } = context;

  const newMessage = await context.prisma.Conversation.create({
    data: {
      written_by: { connect: { id: userId }},
      written_in:  2,   
      text: args.text
    }
  })
  context.pubsub.publish("NEW_CONVERSATION", newMessage)
  return newchat;
}

async function signup( parent, args, context, info ) {
    const saltRounds =  5;
    const password = await bcrypt.hash(args.password, saltRounds);
    const user = await context.prisma.user.create({ data: { ...args, password } });
    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    return {
      token,
      user
    }
  }
  
  async function login( parent, args, context, info ) {

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
  }
  
  async function setUserStatus( parent, args, context, info ){
    
    const { userId } = context;
    const updatedUser = await context.prisma.user.update({
      where: { id: userId },
      data: { status: args.status } 
    })

    return updatedUser
  }

  async function changePassword( parent, args, context, info ){

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
  }

  async function changeUsername( parent, args, context, info ){
   
    const { userId } = context;
    const user = await context.prisma.user.findUnique({ where: { id: userId}});

    const valid = await bcrypt.compare( args.password, user.password );
    if(!valid) throw new Error('Invalid password');

    const updatedUser = await context.prisma.user.update({ 
      where: { id: userId},
      data: { username: args.newUsername}
    })

    return updatedUser;
  }

  async function changeEmail( parent, args, context, info ){
   
    const { userId } = context;
    const user = await context.prisma.user.findUnique({ where: { id: userId}});

    const valid = await bcrypt.compare( args.password, user.password );
    if(!valid) throw new Error('Invalid password');

    const updatedUser = await context.prisma.user.update({ 
      where: { id: userId},
      data: { email: args.newEmail}
    })

    return updatedUser;
  }

  async function changeActive( parent, args, context, info ){
    const { userId } = context;

    const updatedUser = await context.prisma.user.update({ 
      where: { id: userId},
      data: { active: args.active }
    })

    return updatedUser; 
  }

  async function deleteAccount( parent, args, context, info ){
    const { userId } = context;
    const user = await context.prisma.user.findUnique({ where: { id: userId}});

    const valid = await bcrypt.compare( args.password, user.password );
    
    if(!valid) throw new Error('Invalid password');

    const updatedUser = await context.prisma.user.delete({ 
      where: { id: userId},
    })

    return updatedUser; 
  }

  async function addPhoneNumber( parent, args, context, info ){
    const { userId } = context;
    const updatedUser = await context.prisma.user.update({
      where: { id: userId },
      data: { phoneNumber: args.phoneNumber } 
    })

    return updatedUser;
  }


  module.exports = {
    addPhoneNumber,
    changeActive,
    changePassword,
    changeEmail,
    changeUsername,
    deleteAccount,
    setUserStatus,
    signup,
    login
  }