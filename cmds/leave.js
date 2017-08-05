const prefix = require("../constants/info.json").prefix;
module.exports = {
    name: "leave",
    description: "Leave a game",
    syntax: `${prefix}leave`,
    regex: /^leave$/gi,
    group: 0,
    process (message, trimmed) {
        const currentGame = require("../constants/currentGame.js");
        if (currentGame.checkUser (message.author)) {
            if (currentGame.playing) {
                currentGame.getUser(message.author).attacked = "suicide";
            }
            currentGame.leave(message.author);
            message.author.send("You have left the game.");
        } else {
            message.author.send("You are not in a game.");
        }
    }
};