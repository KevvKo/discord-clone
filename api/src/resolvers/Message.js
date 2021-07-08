
function writtenBy(parent, args, context){
    console.log(parent.id)
    return context.prisma.messages.findUnique({ where: { id: parent.id }}).written_by();
}

function writtenAt(parent, args, context){
    return context.prisma.messages.findUnique({ where: { writtenAt: parent.id }}).conversation_id();
}

module.exports =  {
    // writtenAt,
    writtenBy
}