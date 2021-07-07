
function writtenBy(parent, args, context){
    return context.prisma.messages.findUnique({ where: { writtenBy: parent.id }}).message();
}

function writtenAt(parent, args, context){
    return context.prisma.messages.findUnique({ where: { writtenAt: parent.id }}).message();
}

module.exports =  {
    // writtenAt,
    writtenBy
}