class Player {
    constructor (channel) {
        this.channel = channel;
    }
    send (message) {
        if (message.match(/^```/gi)) {
            this.channel.send (message);
        } else {
            this.channel.send ("```md\n" + message + "\n```");
        }
    }
}