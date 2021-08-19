
function authenticatedUser(parent, args, context){
    const { userId } = context
    return context.prisma.user.findUnique({
        where: { id: userId}
    });
}

module.exports =  {
    authenticatedUser
}