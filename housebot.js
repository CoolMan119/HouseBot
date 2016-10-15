const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = '>>';
const token = 'Make your own token';
bot.on("ready", () => {
	bot.user.setStatus("online", "HouseBot | >>help");
});
bot.on("message", message => { 
if (message.content.startsWith(prefix + "ping"))  message.channel.sendMessage("Pong!");  
if (message.content.startsWith(prefix + "about"))  message.channel.sendMessage("HouseBot Beta made by houseofkraft");  
if (message.content.startsWith(prefix + "help"))  message.channel.sendMessage("```Commands:\n help - Gets help for commands.\n ping - Pong!\n about - Show's who made this bot.\n logo - HouseBot logo\n winlogo - Windows logo\n - By houseofkraft```");  
if (message.content.startsWith(prefix + "logo"))  message.channel.sendFile("http://i.imgur.com/yy4aG6o.png");
if (message.content.startsWith(prefix + "winlogo"))  message.channel.sendFile("http://i.imgur.com/Gy2aISn.png");
});
bot.login(token);
