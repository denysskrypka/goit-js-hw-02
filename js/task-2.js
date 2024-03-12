function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message;
    } else {
        const newMessage = message.slice(0 , maxLength);
        return newMessage + "...";
    }
}