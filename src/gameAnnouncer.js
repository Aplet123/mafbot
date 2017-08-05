const prefix = require("../constants/info.json").prefix;

module.exports = function (game) {
    if (typeof require("../constants/currentGame.js") == "function") {
        require("../constants/currentGame.js")(game);
    } else {
        for (let i of Object.keys(game)) {
            require("../constants/currentGame.js")[i] = game[i];
        }
    }
    game.gameWindow.add("# Game created! Use " + prefix + "reg to register! #");
    game.on ("playerJoin", function (user, nick, size) {
        game.gameWindow.add(`()[${user.tag} (ID: ${user.id}) has joined the game with the name ${nick}! There are now ${size} players queueing.]()`);
    });
    game.on ("playerLeave", function (user, nick, size) {
        if (game.playing) {
            game.gameWindow.add(`> ${user.tag} (ID: ${user.id}) has left the game with the name ${nick}. <`);
        } else {
            game.gameWindow.add(`> ${user.tag} (ID: ${user.id}) has left the game with the name ${nick}. There are now ${size} players queueing. <`);
            if (size < 5) {
                game.gameWindow.add(`< Timer stopped due to not enough players. >`);
            }
        }
    });
    game.on("start", function (players, playerSize) {
        game.gameWindow.add(`[-](The game has started with ${playerSize} players!)[-]`);
    });
    game.on("end", function () {
        game.gameWindow.hardEdit(`\`\`\`md\n[-](The game has ended.)[-]\n\`\`\``);
    });
    game.on("starting", function () {
        game.gameWindow.add(`< The game starts in 1 minute! >`);
    });
    game.on("timertick", function (timeLeft) {
        if ([45, 30, 20, 10, 5].includes(timeLeft)) {
            game.gameWindow.add(`< The game starts in ${timeLeft} seconds! >`);
        }
    });
};