const prefix = require("../constants/info.json").prefix;
module.exports = {
    name: "restart",
    description: "Restarts the bot",
    syntax: `${prefix}restart`,
    regex: /^restart$/gi,
    group: 1,
    process (message, trimmed) {
        process.exit("restarting");
    }
};