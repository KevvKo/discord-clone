const { prisma } = require("@prisma/client");

function messages(parent, args, context){
    return prisma.context.messages.findUnique({ where: { id: parent.id }}).messages();
}

module.exports =  {
    messages
}