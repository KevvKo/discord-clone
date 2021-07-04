const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { getUserId } = require('../utils/utils');
require('dotenv').config();

const { APP_SECRET } = process.env;

async function signup(parent, args, context, info) {

    const saltRounds =  5;
    const password = await bcrypt.hash(args.password, saltRounds);
    const user = await context.prisma.user.create({ data: { ...args, password } });
    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    return {
      token,
      user
    }
  }
  
  async function login(parent, args, context, info) {

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
  
  module.exports = {
    signup,
    login
  }