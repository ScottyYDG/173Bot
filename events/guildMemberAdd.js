module.exports = (client, member) => {
  client.log('Log', `${member.user.tag} (${member.id}) has joined ${member.guild.name} (${member.guild.id})`);
  const welcomeChannel = member.guild.channels.find('name', 'the-rock-pit' || 'barracks');
  if (welcomeChannel) {
    welcomeChannel.send(`${member.user} Congratulations, privates. Welcome to the 173rd Airborne Brigade. You are now a Sky Soldier`);
  }
};
