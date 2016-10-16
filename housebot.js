const Discord = require("discord.js");
const yt = require("ytdl-core");
const bot = new Discord.Client();
const now = require("performance-now"); 
const prefix = '>>'; // Prefix for commands, you can change this
const token = 'Token goes here'; // Token to login to bot goes here


// HouseBot by houseofkraft
// Please don't copy this


bot.on("ready", () => { // Executes the code below when the bot is ready for use
	bot.user.setStatus("online", "HouseBot | >>help");
	console.log("Ready!")
});


   
bot.on("message", message => {  // Executes all the code below when a user sends a message
function checkPerm(member, perm) { // This function will come in handy
    if( message.member.roles.filter(r=>r.hasPermission(perm)).size > 0) {
        return true
    }
    else {
        return false
    }
}	

function play(url) { // A little broken at the moment
// play streams using ytdl-core
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
   const stream = ytdl(url, {filter : 'audioonly'});
   const dispatcher = connection.playStream(stream, streamOptions);
}



	
 
// Commands
if (message.content.startsWith(prefix + "about"))  message.channel.sendMessage("HouseBot Beta made by houseofkraft");  
if (message.content.startsWith(prefix + "help"))  message.channel.sendMessage("```Commands:\n help - Gets help for commands.\n ping - Pong!\n about - Show's who made this bot.\n logo - HouseBot logo\n winlogo - Windows logo\n invite - Tell's you the link to invite HouseBot to other Discord Servers\n isadmin - Says if your an admin (admin perm) or not\n say <message> - Says a message\n kick <person> - Kick's the person (Admins Only) \n music_join - Makes the bot join the voice channel \nBy houseofkraft```");  
if (message.content.startsWith(prefix + "logo"))  message.channel.sendFile("http://i.imgur.com/yy4aG6o.png");
if (message.content.startsWith(prefix + "winlogo"))  message.channel.sendFile("http://i.imgur.com/Gy2aISn.png");
if (message.content === "<@236597190611566602> Hi") message.channel.sendMessage("Hi, " + message.author);
if (message.content === "<@236597190611566602> hi") message.channel.sendMessage("Hi, " + message.author);
if (message.content === "<@236597190611566602>") message.channel.sendMessage("Wat?");
if (message.content.startsWith(prefix + "invite")) message.channel.sendMessage("You can invite the bot to other servers by using this link: https://discordapp.com/oauth2/authorize?client_id=236597190611566602&scope=bot&permissions=101376=0x400|0x800|0x8000|0x10000");
if (message.content.startsWith(prefix + "isadmin")) message.channel.sendMessage("Admin: " + checkPerm(message.author, "ADMINISTRATOR"));
if (message.content.startsWith(prefix + "say")) {
    let saytext = message.content.split(" ").slice(1);
    message.channel.sendMessage(saytext)
}
if (message.content.startsWith(prefix + "kick")) { // Admin Command
     let userToKick = message.mentions.users.first();
     if (checkPerm(message.author, "KICK_MEMBERS") === true) {
      if (checkPerm(userToKick, "ADMINISTRATOR") === true) {
          message.channel.sendMessage("You cannot kick admins!");
      }
      else {
               message.guild.member(userToKick).kick();
             message.channel.sendMessage("Kicked " + userToKick + " by " + message.author);
      }
  };
}

if (message.content.startsWith(prefix + "ban")) { // Admin Command
     let userToKick = message.mentions.users.first();
     if (checkPerm(message.author, "KICK_MEMBERS") === true) {
      if (checkPerm(userToKick, "ADMINISTRATOR") === true) {
          message.channel.sendMessage("You cannot ban admins!");
      }
      else {
               message.guild.member(userToKick).ban();
             message.channel.sendMessage("Banned " + userToKick + " by " + message.author);
      }
  };
}

if (message.content.startsWith(prefix + "ping")) {
    var old = message.createdTimestamp();
  message.channel.sendMessage("Ping?")
  var n = message.createdTimestamp();
  message.edit("Pong! (took " + n - old + " ms");
}

if (message.content.startsWith(prefix + "music_join")) {
  const voiceChannel = message.member.voiceChannel;
  if (!voiceChannel || voiceChannel.type !== 'voice') {
	  message.channel.sendMessage(":warning: You are not in a voice channel")
  }
  else {
	  message.channel.sendMessage(":white_check_mark: Sucessfully joined " + voiceChannel);
	  voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
  }
   if (message.guild.voiceConnection === "") {
	   message.channel.sendMessage(":warning: Your voice channel either reached the max people allowed or is locked")
   }
}

if (message.content.startsWith(prefix + "music_leave")) {
   const voiceChannel = message.member.voiceChannel;
  voiceChannel.leave()
  message.channel.sendMessage(":white_check_mark: Sucessfully left " + voiceChannel);
}

if (message.content.startsWith(prefix + "play")) { // Don't get this confused with the play function, this just activates the play function
	let args = message.content.split(" ").slice(1);
	let song = args[0];
	play(song);
}


	 

});
bot.login(token);
