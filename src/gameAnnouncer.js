const prefix = require("../constants/info.json").prefix;

module.exports = function (game) {
    require("../constants/currentGame.js")(game);
    game.gameWindow.add("# Game started! Use " + prefix + "reg to register! #");
    game.on ("playerJoin", function (user, nick, size) {
        game.gameWindow.add(`()[${user.tag} (ID: ${user.id}) has joined the game with the name ${nick}! There are now ${size} players queueing.]()`);
    });
};