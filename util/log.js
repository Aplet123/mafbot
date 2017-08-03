const chalk = require("chalk");
module.exports = function (fileName) {
	fileName = fileName.match(/[^\\/]+$/ig)[0].replace(/\.\w+$/ig, "");
	return {
		fileLog (text) {
			console.log(`[${chalk.green.bold(fileName)}] ${text}`);
		},
		fileError (text) {
			console.error(`[${chalk.red.bold(fileName)}] ${text}`);
		}
	};
};