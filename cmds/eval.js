const Discord = require("discord.js");
const prefix = require("../constants/info.json").prefix;
const help = require("./adminhelp.js");
const _ = require("lodash");
const { fileLog, fileError } = require("../util/log.js")(__filename);
Discord.RichEmbed.prototype.oldSetDescription = function(text) {
    this.description = text;
    return this;
};
Discord.RichEmbed.prototype.setDescription = function(text, joinStr = "\n ... \n ... \n ... \n", sliceCount = 1000, blankStr = "\u2064") {
    if(/^\s$/.test(blankStr)) {
        blankStr = "\u2064";
    }
    if(text.length === 0) {
        this.description = blankStr;
    } else if(text.length <= 2048) {
        this.description = text;
    } else {
        sliceCount = Math.min(sliceCount, 1024);
        this.description = text.split``.slice(0, sliceCount).join`` + joinStr + text.split``.slice(- sliceCount).join``;
        if(this.description.length >= 2048) {
            this.description = text.split``.slice(0, 1000).join`` + "\n ... \n ... \n ... \n" + text.split``.slice(-1000).join``;
        }
    }
    return this;
};
Discord.RichEmbed.prototype.oldAddField = function(name, value, inline = false) {
    this.fields.push({name, value, inline});
    return this;
};
Discord.RichEmbed.prototype.addField = function(name, value, inline = false, joinStr = "\n ... \n ... \n ... \n", sliceCount = 500, blankStr = "\u2064") {
    if(/^\s$/.test(blankStr)) {
        blankStr = "\u2064";
    }
    if(name.length === 0) {
        name = blankStr;
    }
    if(value.length === 0) {
        value = blankStr;
    }
    if(value.length > 1024) {
        sliceCount = Math.min(sliceCount, 512);
        value = value.split``.slice(0, sliceCount).join`` + joinStr + value.split``.slice(- sliceCount).join``;
        if(value.length >= 1024) {
            value = value.split``.slice(0, 500).join`` + "\n ... \n ... \n ... \n" + value.split``.slice(-500).join``;
        }
    }
    if(name.length > 1024) {
        sliceCount = Math.min(sliceCount, 512);
        name = name.split``.slice(0, sliceCount).join`` + joinStr + name.split``.slice(- sliceCount).join``;
        if(name.length >= 1024) {
            name = name.split``.slice(0, 500).join`` + "\n ... \n ... \n ... \n" + name.split``.slice(-500).join``;
        }
    }
    this.fields.push({name, value, inline});
    return this;
};
module.exports = {
    name: "eval",
    description: "Evaluate a JavaScript expression",
    syntax: `${prefix}eval [JavaScript expression]`,
    regex: /^eval(\s{1,4}[^]+)?$/gi,
    group: 1,
    process (message, trimmed) {
        if (trimmed.match(/^eval$/gi)) {
            help.process(message, "help eval");
            return;
        }
        var query = trimmed.match(/^eval\s{1,4}([^]+)$/i)[1];
        var embed = new Discord.RichEmbed();
        var util = require("util");
        embed.setTitle("-=≡EVAL≡=-");
        embed.addField("Query:", `\`\`\`js
${query}
\`\`\``);
        var result;
        var utilResult;
        try {
            result = eval(query);
            embed.setColor(0x00ff00);
        } catch (err) {
            result = err.toString();
            embed.setColor(0xff0000);
        }
        try {
            utilResult = util.inspect(result, {
                depth: 0
            });
        } catch (err) {
            utilResult = err.toString();
            embed.setColor(0xffff00);
        }
        embed.addField("Result:", `\`\`\`js
${(typeof result == "string") ? result.replace(new RegExp(_.escapeRegExp(message.client.user.email || "this.awesome.email@sham.wow"), "gi"), "this.awesome.email@sham.wow").replace(new RegExp(_.escapeRegExp(message.client.token), "gi"), "aBcD.eF.gHiJ") : result}
\`\`\``);
        embed.addField("Util:", `\`\`\`js
${utilResult.replace(new RegExp(_.escapeRegExp(message.client.user.email || "this.awesome.email@smam.wow"), "gi"), "this.awesome.email@sham.wow").replace(new RegExp(_.escapeRegExp(message.client.token), "gi"), "aBcD.eF.gHiJ")}
\`\`\``);
        message.channel.send({
            embed
        });
        fileLog(`Eval of query ${query} by ${message.author.tag} (ID: ${message.author.id}) finished with result:
${result}
and a util result of:
${utilResult}`);
    }
};