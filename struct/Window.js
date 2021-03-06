class Window {
    constructor (messageLimit, channel, clearMessages = true) {
        this.messages = [];
        this.displayedMessages = [];
        this.messageLimit = messageLimit;
        this.waitingPromise = channel.send("```md\n\n```");
        this.waitingPromise.then(v => {
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
    remove () {
        this.message.delete(0);
        this.message = null;
        this.messages = null;
        this.displayedMessages = null;
        this.messageLimit = null;
    }
}

module.exports = Window;