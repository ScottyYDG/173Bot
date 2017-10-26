module.exports = (client, member) => {
  client.log('Log', `${member.user.tag} (${member.id}) has joined ${member.guild.name} (${member.guild.id})`);
  const welcomeChannel = member.guild.channels.find('name', 'the-rock-pit' || 'barracks');
  if (welcomeChannel) {
    welcomeChannel.send(`${member.user} Contact an avalible DS to get squared away.`);
  }
};
