const { fileLog, fileError } = require("../util/log.js")(__filename);
module.exports = function(bot) {
    fileLog(`Ready and connected as ${bot.user.tag} (ID: ${bot.user.id})`);
    require("./startgame.js")(bot);
};