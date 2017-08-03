const fs = require("fs");
const path = require("path");
const { fileLog, fileError } = require("../util/log.js")(__filename);
module.exports = function (bot) {
    var files = fs.readdirSync(path.join(__dirname, "..", "events"));
    for (let name of files) {
        bot.on(name.replace(/\.\w+$/gi, ""), require(path.join(__dirname, "..", "events", name)));
    }
};