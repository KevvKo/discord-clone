function messages(parent, args, context){
    return context.prisma.messages.findMany({ where: { written_by_id: parent.id }});
}

module.exports =  {
    // messages
}