const prefix = "./"; //prefix to use for commands
const scroll = 10; //max message on screen. Doesn't apply to GAME.over.

module.exports = {};
module.exports.init = function(z){
	resetall();
	GAME.main.setup(z);
};

module.exports.stop = function(){
	stopall();
};

module.exports.GAMECHAT = function(z){
	if(z.content.startsWith(prefix)){
		let a = z.content.split(" ");
		let s = a[0], ss = a[0].replace(prefix,"");
		a[0] = ss;
		if(FUN[ss])FUN[ss].fun(a,z);
		z.delete(0);
	}
};

var GAME = {};

var Window = function(spec){
	var w = { msgs: [], screen: { edit: ()=>0 }, spec: spec};

	w.setup = function(channel){
		channel.send("```md\n# Loading... #```").then((z)=>{
			this.screen = z;
			this.addMsg("# Game started! Send ./reg (2-letter name) in DM to join! #");
		});
	}
	w.addMsg = function(txt){
		this.msgs.push(txt);
		if(this.spec) return;
		if(this.msgs[scroll]) this.msgs.shift();
		this.screen.edit("```md\n"+this.msgs.join("\n")+"\n```");
	}
	w.stop = function(){
		if(this.spec) return;
		this.screen.edit("**GAME ENDED. NOTHING TO SEE HERE.**");
	}
	w.clearWindow = function(){
		if(this.spec) return;
		this.msgs = [];
		this.screen.edit("```md\n\n```");
	}

	return w;
}

var Player = function(tag){
	var p = { channel: { send: ()=>0 }, tag: tag};

	p.setup = function(channel){
		channel.send("```md\n# Loading... #```").then((z)=>{
			this.channel = channel;
			this.addMsg("```diff\n+ Successful! Players in queue: "+GAME.plcount+"\n```");
		});
	}

	p.addMsg = function(txt){
		if(txt[0]=="`")this.channel.send(txt);
		else this.channel.send("```md\n"+txt+"```");
	}

	p.stop = function(){
		this.channel.send("**GAME ENDED.**");
	}

	return p;
}

function resetall(){
	GAME = {
		running: false,
		players: {},
		lookup: {},
		plcount: 0,
		main: new Window(),
		over: new Window(),
	};
}

function stopall(){
	//suggested by mpabdu, should use message chunks instead for dms
	Object.values(GAME.players).map((z)=>z.stop());
	GAME.main.stop();
	GAME.over.stop();
}

var FUN = { //Useful functions
	"help":{
		des:"Lists all available commands.",
		use:"./help",
		fun:(q,z)=>{
			let a = Object.keys(FUN).join(", ");
			z.reply("",{
				embed:{
					color:0xCC8800,
					title:"Available Commands:",
					description:a,
					footer:{text:"This message will be deleted in 5 seoncds"}
				}
			}).then((z)=>z.delete(5000));
		}
	},
	"reg":{
		des:"Register to a started game",
		use:"./help (2-letter username)",
		fun:(q,z)=>{
			if(GAME.running)return z.channel.send("Too late. Game in progress.");
			if(GAME.lookup[z.author.tag])return z.channel.send("You registered already.");
			if(q[1][2])return z.channel.send("Invalid name.");
			if(q[1] = "##")return z.channel.send("Reserved name.");
			if(GAME.players[q[1]])return z.channel.send("Already Used.");
			GAME.players[q[1]]=new Player(z.author.tag);
			GAME.players[q[1]].setup(z.channel);
			GAME.lookup[z.author.tag]=q[1];
			GAME.plcount++;
		}
	}
};