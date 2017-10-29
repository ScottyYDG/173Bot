const Discord = require('discord.js');

module.exports = (client, message, args) => {

    const embed = new Discord.MessageEmbed()

    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "This is an embed",
        url: "http://google.com",
        description: "This is a test embed to showcase what they look like and what they can do.",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL
        }
      }
    });
}