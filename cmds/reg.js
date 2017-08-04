const prefix = require("../constants/info.json").prefix;
const help = require("./help.js");
module.exports = {
    name: "reg",
    description: "Register for a game using a 2 character name",
    syntax: `${prefix}reg [2 character name]`,
    regex: /^reg(?:\s{1,4}..)?$/gi,
    group: 0,
    process (message, trimmed) {
        if (trimmed.match(/^reg$/gi)) {
            help.process(message, "help " + this.name);
        } else {
            //register user
        }
    }
};