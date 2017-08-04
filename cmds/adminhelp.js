const { fileLog, fileError } = require("../util/log.js")(__filename);
const fs = require("fs");
const path = require("path");
const prefix = require("../constants/info.json").prefix;
const commands = fs.readdirSync(__dirname);
const cmds = [];
const helpInfo = {
    name: "adminhelp",
    description: "Gives you a list of all commands (including administrator commands) or details on a certain command",
    syntax: `${prefix}adminhelp\n${prefix}adminhelp [command name]`,
    regex: /^adminhelp(?:\s{1,4}|$)/gi,
    group: 1
};
module.exports = helpInfo;
for (let name of commands) {
    if (name == "adminhelp") {
        cmds.push(helpInfo);
    }
    cmds.push (require(path.join(__dirname, name)));
}
const commandList = cmds.map(v => v.name);
module.exports.process =  function (message, trimmed) {
    if (trimmed.match(/^adminhelp\s{1,4}.+$/gi)) {
        var command = trimmed.match(/^adminhelp\s{1,4}(.+)$/i)[1];
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
        message.author.send("**List of all commands (including administrator commands), do " + prefix + "adminhelp _[command name]_ for more info.**\n" + commandList.join`, `);
    }
};