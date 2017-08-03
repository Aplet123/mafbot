class Window {
    constructor (messageLimit, channel, clearMessages = true) {
        this.messages = [];
        this.displayedMessages = [];
        this.messageLimit = messageLimit;
        return channel.send("```md\n\n```").then(v => {
            this.message = v;
        });
    }
    add (message) {
        this.messages.push(message);
        this.displayedMessages.push(message);
        if (this.displayedMessages.length > this.messageLimit) {
            this.displayedMessages.shift();
        }
        this.message.edit("```md\n" + this.displayedMessages.join`\n` + "\n```");
    }
    flush () {
        this.displayedMessages = [];
        this.message.edit("```md\n" + this.displayedMessages.join`\n` + "\n```");
    }
    hardEdit (message) {
        this.message.edit(message);
    }
}