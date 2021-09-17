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
  }