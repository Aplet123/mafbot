const serverInfo = require("../constants/server.secret.json");
const Storage = require("../struct/Storage.js");
const fs = require("fs");
const path = require("path");
const { fileLog, fileError } = require("../util/log.js")(__filename);
module.exports = function (game) {
    var timerInterval;
    game.on("start", function (players, playerCount) {
        clearInterval(timerInterval);
        var guild = game.gameWindow.message.client.guilds.get(serverInfo.serverID);
        var muted = guild.roles.get(serverInfo.mutedID);
        players.map(v => guild.member(v).addRole(muted));
        let playerList = new Storage (players);
        var roles = fs.readdirSync(path.join(__dirname, "..", "roles"));
        var rls = [];
        for (let name of roles) {
            rls.push(require(path.join(__dirname, "..", "roles", name)));
        }
        for (var i = 0; i < rls.length; i ++) {
            for (var j = 0; j < rls[i].frequencies[playerCount - 5]; j ++) {
                let newKey = playerList.randomKey();
                game.players.get(newKey).role = rls[i];
                playerList.delete(newKey);
                game.players.get(newKey).send(`The game has started! Your role is **${rls[i].name}**. Do \`./roles ${rls[i].name}\` for more information.`);
            }
        }
    });
    game.on("end", function (players, playerCount) {
        var guild = game.gameWindow.message.client.guilds.get(serverInfo.serverID);
        var muted = guild.roles.get(serverInfo.mutedID);
        muted.members.map(v => guild.member(v).removeRole(muted));
        require("./startgame.js")(require("../constants/getBot.js"));
    });
    game.on("playerJoin", function (user, nick, playerCount) {
        clearInterval(timerInterval);
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
    game.on("playerLeave", function (user, nick, playerCount) {
        if (playerCount < 5) {
            clearInterval(timerInterval);
        }
    });
};