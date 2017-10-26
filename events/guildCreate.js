module.exports = (client, guild) => {
  client.log('Log', `This Sky Soldier is at: ${guild.name}, Owned by: ${guild.owner.user.tag}`);
};
