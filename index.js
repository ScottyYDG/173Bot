const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

const prefix = ".";

client.on('ready', () => {
  console.log('Tips is operational.');
});

// Ping pong test.
client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.reply('Pong!');
  } else
  if (message.content.startsWith(prefix + "Hook up shuffle up to the door!")) {
    message.channel.send("Jump right out and count to four!");
  }
});

// Retrieves the token from .config
client.login(config.token);
