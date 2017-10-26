const Discord = require('discord.js');

module.exports = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.name}'s Information and Details`)
    .setThumbnail(message.guild.iconURL())
    .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL())
    .addField('Members', `${message.guild.members.filter(member => member.user.bot).size} bots of ${message.guild.memberCount} members.`)
    .addField('Roles', message.guild.roles.map(role => role.name).join(', '));
  message.channel.send({ embed });
};
