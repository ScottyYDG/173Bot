const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Tips is operational.');
});

// Ping pong test.
client.on('message', (message) => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

// Retrieves the token from .config
client.login(config.token);
