const chalk = require("chalk");
function fileLog (text) {
	var fileName = __filename.match(/[^\\/]+$/ig)[0].replace(/\.js$/ig, "");
	console.log(`[${chalk.green.bold(fileName)}] ${text}`);
}
function fileError (text) {
	var fileName = __filename.match(/[^\\/]+$/ig)[0].replace(/\.js$/ig, "");
	console.error(`[${chalk.red.bold(fileName)}] ${text}`);
}
module.exports = {
	fileLog,
	fileError
};