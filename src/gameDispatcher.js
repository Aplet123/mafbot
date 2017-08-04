const serverInfo = require("../constants/server.secret.json");
module.exports = function (game) {
    game.on("start", function (players, playerCount) {
        var guild = game.gameWindow.message.client.guilds.get(serverInfo.serverID);
        var muted = guild.roles.get(serverInfo.mutedID);
        players.map(v => guild.member(v).addRole(muted));
    });
    game.on("end", function (players, playerCount) {
        var guild = game.gameWindow.message.client.guilds.get(serverInfo.serverID);
        var muted = guild.roles.get(serverInfo.mutedID);
        players.map(v => guild.member(v).removeRole(muted));
    });
};