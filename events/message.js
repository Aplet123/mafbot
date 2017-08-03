const { fileLog, fileError } = require("../util/log.js")(__filename);
const prefix = new RegExp("^" + require("../constants/info.json").prefix, "gi");
const fs = require("fs");
const path = require("path");
const commands = fs.readdirSync(path.join(__dirname, "..", "cmds"));
const cmds = [];
for (let name of commands) {
    cmds.push (require(path.join(__dirname, "..", "cmds", name)));
}
module.exports = function (message) {
    if (message.content.match(prefix)) {
        var msgContent = message.content.replace(prefix, "");
        for (var i = 0; i < cmds.length; i ++) {
            if (msgContent.match (cmds[i].regex)) {
                cmds[i].process (message);
            }
            break;
        }
    }
};