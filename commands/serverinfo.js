const Discord = require("discord.js")
const embedcolor = "#484848";
const embederrorcolor = "#e74c3c";

module.exports.run = async (bot, message, args) => {

  let sicon = message.guild.iconURL
  let sinfoembed = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setDescription("Server Information")
  .setColor(embedcolor)
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You Joined", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount)
  return message.channel.send(sinfoembed)


}


module.exports.help = {
  name: "sinfo"
}
