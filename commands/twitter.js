const Discord = require('discord.js');

module.exports = (client, message, args) => {

    const embed = new Discord.MessageEmbed()

    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "173rd Airborne Twitter",
        url: "https://twitter.com/173rdABOMST",
        description: "Official Account of the 173rd Airborne Brigade.",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL
        }
      }
    });
}