const Discord = require("discord.js")
const embedcolor = "#484848";
const embederrorcolor = "#e74c3c";

module.exports.run = async (bot, message, args) => {
  let nopermsembed = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setDescription("Insufficient Permissions")
  .setColor(embederrorcolor)

  let berror = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setDescription("I couldn't find that user...")
  .setColor(embederrorcolor)
  let berror2 = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setDescription("You did not specify a reason...")
  .setColor(embederrorcolor)
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  if(!bUser) return message.channel.send(berror)
  let bReason = args.join(" ").slice(22)
  if(!bReason) return message.channel.send(berror2)
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(nopermsembed)
  if(bUser.id === message.author.id)return message.channel.send(nopermsembed)
  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send(nopermsembed)

  let bembed = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setColor(embedcolor)
  .setDescription("Bans")
  .addField("Banned User", `${kUser} with the ID: ${kUser.id}`)
  .addField("Banning User", `${message.author} with the ID: ${message.author.id}`)
  .addField("Banned in", message.channel)
  .addField("Banned at", message.createdAt)
  .addField("Reason", bReason)
  message.delete().catch(O_o =>{})
  message.guild.member(bUser).ban(bReason)
  message.channel.send(bembed)
}


module.exports.help = {
  name: "ban"
}
