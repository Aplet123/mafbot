const { fileLog, fileError } = require("../util/log.js")(__filename);
const fs = require("fs");
const path = require("path");
const prefix = require("../constants/info.json").prefix;
const roles = fs.readdirSync(path.join(__dirname, "..", "roles"));
const rls = [];
for (let name of roles) {
    rls.push (require(path.join(__dirname, "..", "roles", name)));
}
const roleList = rls.map(v => v.name);
module.exports = {
    name: "roles",
    description: "Gives you a list of all roles or details on a certain role",
    syntax: `${prefix}roles\n${prefix}roles [role name]`,
    regex: /^roles(?:\s{1,4}|$)/gi,
    group: 0,
    process (message, trimmed) {
        if (trimmed.match(/^roles\s{1,4}.+$/gi)) {
            var role = trimmed.match(/^roles\s{1,4}(.+)$/i)[1];
            var foundMatch = false;
            for (let rl of rls) {
                if (rl.name == role.toLowerCase()) {
                    foundMatch = true;
                    message.author.send(`${rl.name.replace(/^./, v => v.toUpperCase())} - ${rl.description}\n**Sided with the ${rl.alignment}.**`);
                }
            }
            if (! foundMatch) {
                message.author.send("Sorry, but that role does not exist.");
            }
        } else {
            message.author.send("**List of all roles, do " + prefix + "roles _[role name]_ for more info.**\n" + roleList.join`, `);
        }
    }
};