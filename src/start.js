const Discord = require("discord.js");
const token = require("../constants/login.json").token;
const { fileLog, fileError } = require("../util/log.js")(__filename);
const ShardingManager = Discord.ShardingManager;
const path = require("path");
const manager = new ShardingManager(path.join(__dirname, 'bot.js'), { token });
manager.spawn(undefined, 1000);