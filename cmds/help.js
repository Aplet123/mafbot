const { fileLog, fileError } = require("../util/log.js")(__filename);
module.exports = {
    regex: /^help\s{0,4}/gi,
    process: function (message) {}
};