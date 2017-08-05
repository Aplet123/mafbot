const Discord = require("discord.js");
const token = require("../constants/login.secret.json").token;
const { fileLog, fileError } = require("../util/log.js")("main");
const bot = new Discord.Client({
    fetchAllMembers: true,
    disableEveryone: true
});
process.on("exit", function(code) {
    if (code == 0) {
        fileLog(`Exiting process with no problem.`);
    } else if (code == "restarting") {
        fileLog(`Restarting bot...`);
    } else {
        fileError(`Exiting process with code ${code}.`);
    }
});
process.on("unhandledRejection", (rej, p)=>{
    fileError("Unhandled Rejection:\n"+rej);
    if (rej instanceof Error) {
        if (/Error:\sSomething took too long to do|read\sECONNRESET|EAI_AGAIN|ECONNREFUSED/i.test(rej.message)) {
            process.exit(1);
        }
    }
});
require("../constants/getBot.js")(bot);
require("./bot.js")(bot);
bot.login(token).then (v => {
    require("./ready.js")(bot);
}).catch (err => {
    fileError(err);
});