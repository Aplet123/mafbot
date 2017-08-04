const { fileLog, fileError } = require("../util/log.js")(__filename);
const fs = require("fs");
const path = require("path");
const prefix = require("../constants/info.json").prefix;
const commands = fs.readdirSync(__dirname);
const cmds = [];
const helpInfo = {
    name: "help",
    description: "Gives you a list of all commands or details on a certain command",
    syntax: `${prefix}help\n${prefix}help [command name]`,
    regex: /^help(?:\s{1,4}|$)/gi
};
module.exports = helpInfo;
for (let name of commands) {
    if (name == "help") {
        cmds.push(helpInfo);
    }
    cmds.push (require(path.join(__dirname, name)));
}
const commandList = cmds.map(v => v.name);
module.exports.process =  function (message, trimmed) {
    if (trimmed.match(/^help\s{1,4}.+$/gi)) {
        var command = trimmed.match(/^help\s{1,4}(.+)$/i)[1];
        var foundMatch = false;
        for (let cmd of cmds) {
            if (cmd.name == command.toLowerCase()) {
                foundMatch = true;
                message.author.send(`${cmd.name} - ${cmd.description}\n\`\`\`\nSyntax:\n${cmd.syntax}\n\`\`\``);
            }
        }
        if (! foundMatch) {
            message.author.send("Sorry, but that command does not exist.");
        }
    } else {
        message.author.send("**List of all commands, do " + prefix + "help _[command name]_ for more info.**\n" + commandList.join`, `);
    }
}