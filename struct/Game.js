const Storage = require("./Storage.js");
const EventEmitter = require("events");

class Game extends EventEmitter {
    constructor (gameWindow, settings = {}) {
        super();
        this.gameWindow = gameWindow;
        this.players = new Storage();
        this.time = settings.startDay ? 1 : 0; // 0 is night 1, 1 is day 1, 2 is night 2, 3 is day 3 etc.
        this.voting = settings.majority ? 1 : 0; // 0 is plurality, 1 is majority
        this.playing = false;
    }
    join (user, nick) {
        this.players.set(nick, user);
        this.emit("playerJoin", user, nick, this.players.size);
    }
    checkNick (nick) {
        return this.players.has(nick);
    }
    checkUser (user) {
        return this.players.exists(v => v.id === user.id);
    }
    getNick (user) {
        return this.players.findKey(v => v.id === user.id);
    }
    start () {
        this.playing = true;
        this.emit("start", this.players, this.players.size);
    }
    end () {
        this.playing = false;
        this.emit("end", this.players, this.players.size);
    }
}

module.exports = Game;