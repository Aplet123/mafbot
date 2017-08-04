const { fileLog, fileError } = require("../util/log.js")(__filename);
const prefix = require("../constants/info.json").prefix;
module.exports = function(bot) {
    fileLog(`Ready and connected as ${bot.user.tag} (ID: ${bot.user.id})`);
    bot.user.setGame(`Do ${prefix}help for help | Mafbot`);
    require("./startgame.js")(bot);
};