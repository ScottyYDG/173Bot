const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

const prefix = ".";

const args = message.content.slice(prefix.length).trim().split(/ +/g);

const command = args.shift().toLowerCase();

client.on('ready', () => {
  console.log('Tips is operational.');
});

// Ping pong test.
if (command === 'ping') {
  message.channel.send('Pong!');
} else
if (command === 'Cadence') {
  message.channel.send('Hook up, shuffle up to the door! Jump right out and count to four.');
}

// Kicking someone.
if (command === 'kick') {
  let member = message.mentions.members.first();
  member.kick();
}

// Retrieves the token from .config
client.login(config.token);
