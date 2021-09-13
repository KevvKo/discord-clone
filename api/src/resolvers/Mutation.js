const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { getUserId } = require('../utils/utils');
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


async function message(parent, args, context, info) {
  const { userId } = context;

  const newMessage = await context.prisma.messages.create({
    data: {
      written_by: { connect: { id: userId }},
      written_in:  2,   
      text: args.text
    }
  })
  context.pubsub.publish("NEW_MESSAGE", newMessage)
  return newMessage;
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


  module.exports = {
    changeEmail,
    changeUsername,
    setUserStatus,
    signup,
    login
  }