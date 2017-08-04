const serverInfo = require("../constants/server.secret.json");
var forcestart = false;
module.exports = function (game) {
    var timerInterval;
    game.on("start", function (players, playerCount) {
        var guild = game.gameWindow.message.client.guilds.get(serverInfo.serverID);
        var muted = guild.roles.get(serverInfo.mutedID);
        players.map(v => guild.member(v).addRole(muted));
    });
    game.on("end", function (players, playerCount) {
        var guild = game.gameWindow.message.client.guilds.get(serverInfo.serverID);
        var muted = guild.roles.get(serverInfo.mutedID);
        muted.members.map(v => guild.member(v).removeRole(muted));
        require("./startgame.js")(require("../constants/getBot.js"));
    });
    game.on("playerJoin", function (user, nick, playerCount) {
        if (playerCount >= 5) {
            var timeLeft = 59;
            game.emit("starting");
            timerInterval = setInterval(function () {
                game.emit("timertick", timeLeft);
                timeLeft --;
                if (timeLeft == 0) {
                    game.start();
                }
            }, 1000);
        }
    });
};