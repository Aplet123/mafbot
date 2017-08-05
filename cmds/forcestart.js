const prefix = require("../constants/info.json").prefix;
const help = require("./help.js");
module.exports = {
    name: "forcestart",
    description: "Force starts the game",
    syntax: `${prefix}forcestart`,
    regex: /^forcestart$/gi,
    group: 1,
    process (message, trimmed) {
        const currentGame = require("../constants/currentGame.js");
        if (currentGame.players.size >= 5) {
            currentGame.start();
        } else {
            message.author.send("Sorry, but there are not enough people to play a game.");
        }
    }
};