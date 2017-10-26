module.exports = (client, member) => {
  const welcomeChannel = member.guild.channels.find('name', 'the-rock-pit' || 'barracks');
  if (welcomeChannel) {
    welcomeChannel.send(`${member.user} Has just left the server.`);
  }
};
