
const Discord = require("discord.js");
const yt = require("ytdl-core");
const http = require("http");
const os = require("os");

const bot = new Discord.Client();

const mamajokes = [ // Some amazing yo mama jokes
                   "Yo mama so fat she left the house in high heels and when she came back she had on flip flops.",
                   "Yo mama so fat she sat on an iPhone and turned it into an iPad", 
                   "Yo mama so fat she went to KFC to get a bucket of chicken they asked her what size and she said the one on the roof",
                   "Yo momma so fat she sued xbox 360 for guessing her weight",
                   "yo mama so fat that she dont need the internet she's already world wide",
                   "Yo mama so fat that I ran out of gas trying to drive around her."
]
const knockjokes = [ // Knock Knock Jokes
                    "Test"
]

const square = [
   "|----------------|",
   "|                |",
   "|                |",
   "|                |",
   "|                |",
   "|                |",
   "|________________|"
]
const prefix = '>>'; // Prefix for commands, you can change this
const token = 'Token'; // Token to login to bot goes here
const annouce_channel = ""



// HouseBot by houseofkraft
// This is a basic bot using discord.js
// If you copy this bot, Please give me credit



bot.on("ready", () => { // Executes the code below when the bot is ready for use
	bot.user.setStatus("online", "HouseBot | >>help");
	console.log("Ready!");
});


 
bot.on("message", message => {  // Executes all the code below when a user sends a message

// Functions
function checkPerm(member, perm) {
    if( message.member.roles.filter(r=>r.hasPermission(perm)).size > 0) {
        return true
        // Returns True
    }
    else {
		    return false
        // Returns False
    }
}	

function toGB(data) {
  output = data / 1073741824  
  output = output.toFixed(1)
  return output
}

// Making HTTP Callback
callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    message.channel.sendMessage(str)
  });
}


function play(url) { // A little broken at the moment
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
   const stream = ytdl(url, {filter : 'audioonly'});
   const dispatcher = connection.playStream(stream, streamOptions);
}

// Commands
if (message.content.startsWith(prefix + "about"))  message.channel.sendMessage("HouseBot made by houseofkraft");  
if (message.content.startsWith(prefix + "help"))  {
  message.author.sendMessage("HouseBot Help \n```Commands:\n help - Get's help for commands.\n ping - Pong!\n about - Show's who made this bot.\n logo - HouseBot logo\n winlogo - Windows logo\n invite - Tell's you the link to invite HouseBot to other Discord Servers\n isadmin - Says if your an admin (admin perm) or not\n say <message> - Says a message\n kick <person> - Kick's the person (Admins Only) \n ban <person> - Ban's the person (Admins only) \n music_join - Makes the bot join the voice channel \n music_leave - Makes the bot leave the voice channel \n roll - Roll's the dice! \n yomama - Yo mama jokes!\n servers - Tells you how much servers HouseBot is on \n square - Makes a square \n stats - Stat's about the server HouseBot is running on \n github - Github Information \nBy houseofkraft``` \n Version: V2.1.0"); 
  message.channel.sendMessage(message.author + " I just sent you a PM with the help contents")
}
if (message.content.startsWith(prefix + "logo"))  message.channel.sendFile("http://i.imgur.com/yy4aG6o.png");
if (message.content.startsWith(prefix + "winlogo")) message.channel.sendFile("http://i.imgur.com/Gy2aISn.png");
if (message.content === "<@236597190611566602> Hi")  message.channel.sendMessage("Hi, " + message.author);
if (message.content === "<@236597190611566602> hi")  message.channel.sendMessage("Hi, " + message.author);
if (message.content === "<@236597190611566602>")  message.channel.sendMessage("Wat?");
if (message.content.startsWith(prefix + "invite"))  message.author.sendMessage("You can invite the bot to other servers by using this link: https://discordapp.com/oauth2/authorize?client_id=236597190611566602&scope=bot&permissions=101378");
if (message.content.startsWith(prefix + "isadmin")) message.channel.sendMessage("Admin: " + checkPerm(message.author, "ADMINISTRATOR")); // Mostly for checking if the permission checking works, comment this cmd out to disable
if (message.content.startsWith(prefix + "uptime")) message.channel.sendMessage("Uptime: " + (process.uptime() /60).toFixed(0) + " minute(s)")
//if (message.content.startsWith(prefix + "wipeall")) {
//   let args = message.content.split(" ").slice(1);
//   message.channel.sendMessage("Purging " + totalmsgs.length + " messages...");
//   message.channel.bulkDelete(totalmsgs);
//   message.channel.sendMessage("Purged " + totalmsgs.length + " messages.");  
//}
if (message.content.startsWith(prefix + "say")) { 
    var user = message.author;
    let saytext = message.content.split(" ").slice(1);
    message.delete();
	 message.channel.sendMessage(saytext);
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

if (message.content.startsWith(prefix + "github")) {
  message.channel.sendMessage("Github: https://github.com/CoolMan119/HouseBot")
}

//if (message.content.startsWith(prefix + "ban")) {
//  if (checkPerm(message.author, "KICK_MEMBERS")) {
//    if (checkPerm(bot.self, "KICK_MEMBERS")) {
//      message.guild.member(userToKick).ban();
//      message.channel.sendMessage("Banned " + userToKick + " by " + message.author);
//     } else {
//      message.channel.sendMessage("I don't have permission to kick users!")
//    }
//   else {
//    message.channel.sendMessage("You don't have permission!")
//  }
//}


if (message.content.startsWith(prefix + "music_join")) { // Music Module
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
	//let args = message.content.split(" ").slice(1);
	//let song = args[0];
  message.channel.sendMessage("Sorry, The play function is not working!")
}

if (message.content.startsWith(prefix + "roll")) {
    var roll = Math.floor(Math.random() * 4) + 1
	if (roll === 1) {
		return message.channel.sendMessage(":one:");
	}
	if (roll === 2) {
		return message.channel.sendMessage(":two:");
	}
	if (roll === 3) {
		return message.channel.sendMessage(":three:");
	}
	if (roll === 4) {
		return message.channel.sendMessage(":four:");
	}
  
}

if (message.content.startsWith(prefix + "yomama")) {
	 var joke = Math.floor(Math.random() * mamajokes.length) + 1
   message.channel.sendMessage(mamajokes[joke])   
}

if (message.content.startsWith(prefix + "knockknock")) {
  var joke = Math.floor(Math.random() * knockjokes.length) + 1
  message.channel.sendMessage("Knock Knock\n" + knockjokes[joke])
}

if (message.content.startsWith(prefix + "stats")) {
  //message.channel.sendMessage("HouseBot is on **" + bot.guilds.size + "** servers, monitoring **" + bot.channels.size + "** channels.");  
  message.channel.sendMessage("```\nHouseBot Stats\nServers: " + bot.guilds.size + "\nChannels: " + bot.channels.size + "\nUsers: " + bot.users.size + "\nFree Memory: " + toGB(os.freemem()) + "/" + toGB(os.totalmem()) + "GB\n```")
}

if (message.content.startsWith(prefix + "crash")) {
 message.channel.sendMessage("And do you really think i would let you?")
}

if (message.content.startsWith(prefix + "pastebin-get")) {
  let args = message.content.split(" ").slice(1)
  var input = args[0]
  var options = {
    host: 'www.pastebin.com',
    path: '/raw.php?i=' + input
  };
  http.request(options, callback).end();
  //message.channel.sendMessage(str)
}

if (message.content.startsWith(prefix + "square")) {
  square.forEach(function (i, index, array) {
  message.channel.sendMessage(i)
});
}


	 
});
bot.login(token);
