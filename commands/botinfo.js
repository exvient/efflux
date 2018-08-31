const Discord = require("discord.js")
const embedcolor = "#484848";
const embederrorcolor = "#e74c3c";

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL
  let botinfoembed = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setDescription("Bot Information")
  .setThumbnail(bicon)
  .setColor(embedcolor)
  .addField("Created On",bot.user.createdAt)
return message.channel.send(botinfoembed)


}


module.exports.help = {
  name: "binfo"
}
