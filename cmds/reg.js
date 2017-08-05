const prefix = require("../constants/info.json").prefix;
const help = require("./help.js");
module.exports = {
    name: "reg",
    description: "Register for a game using a 4 or less alphanumerical character name",
    syntax: `${prefix}reg [4 or less alphanumerical character name]`,
    regex: /^reg(?:\s{1,4}.+)?$/gi,
    group: 0,
    process (message, trimmed) {
        if (trimmed.match(/^reg$/gi)) {
            help.process(message, "help " + this.name);
        } else {
            let game = require("../constants/currentGame.js");
            if (game.playing) {
                message.author.send("Sorry, but the game is already in progress.");
            } else if (trimmed.match(/^reg\s{1,4}\w{5,}$/gi) || trimmed.match(/[^\w\s]/gi)){
                message.author.send("Your nickname must be 4 or less alphanumerical characters. (0-9, a-z, A-Z, _)");
            } else if (trimmed.match(/^reg\s{1,4}\w{1,4}$/gi)) {
                let nick = trimmed.match(/^reg\s{1,4}(\w{1,4})$/i)[1];
                if (game.checkUser(message.author)) {
                    message.author.send("You have already registered with the name " + game.getNick(message.author) + "!");
                } else if (game.checkNick(nick)) {
                    message.author.send("Sorry, but that name is taken.");
                } else {
                    game.join(message.author, nick);
                    message.author.send(`You have joined the game with the name ${nick}! There are now ${game.players.size} players queueing.`);
                }
            } else {
                message.author.send("Your nickname must be 4 or less alphanumerical characters. (0-9, a-z, A-Z, _)");
            }
        }
    }
};