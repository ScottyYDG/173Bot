exports.run = (client, message, [mention, ...reason]) => {
  if(command === "kick") {
    let modeRole = message.guild.roles.find("name", "Moderator, Mods");
    if(!message.member.roles.has(modeRole.id)) {
      return message.reply("You do not have premission to use this command.");
    }
  if(message.mentions.users.size === 0) {
    return message.reply("Please mention a user to kick");
  }
  let kickMember = message.guild.member(message.mentions.users.first());
  if(!kickMember) {
    return message.reply("That user does not seem valid");
  }
  if(!message.guild.member(bot.user).hasPremission("KICK_MEMBERS")) {
    return message.reply("I don't have premissions (KICK_MEMBER) to do this.");
  }
  kickMember.kick();
  }
}
