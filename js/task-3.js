function checkForSpam(message) {
    const messageLower = message.toLowerCase();
    if (messageLower.includes("spam") || messageLower.includes("sale")) {
        return true;
    } else {
        return false;
    }
}