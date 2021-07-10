// Subscriptions for Model Messages

function newMessageSubscribe(parent, args, context, info) {
    return context.pubsub.asyncIterator("NEW_MESSAGE");
}

const newMessage = {
    subscribe: newMessageSubscribe,
    resolve: payload => {
        return payload
    },
}

// Subscriptions for Model Conversation

function newConversationSubscribe(parent, args, context, info) {
    return context.pubsub.asyncIterator("NEW_Conversation");
}

const newConversation = {
    subscribe: newConversationSubscribe,
    resolve: payload => {
        return payload
    },
}

module.exports = {
    newMessage,
    newConversation
}

