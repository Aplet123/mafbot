const { fileLog, fileError } = require("../util/log.js")(__filename);
const channelID = require("../constants/server.secret.json").channelID;
const Window = require("../struct/Window.js");
const Game = require("../struct/Game.js");
const messageLimit = require("../constants/info.json").msgCount;
const prefix = require("../constants/info.json").prefix;
module.exports = function (bot) {
    const channel = bot.channels.get(channelID);
    const gameWindow = new Window(messageLimit, channel);
    gameWindow.waitingPromise.then(v => {
        gameWindow.game = new Game(gameWindow);
        require("./gameAnnouncer.js")(gameWindow.game);
        require("./gameDispatcher.js")(gameWindow.game);
    });
};