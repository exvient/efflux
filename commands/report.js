const Discord = require("discord.js")
const embedcolor = "#484848";
const embederrorcolor = "#e74c3c";

module.exports.run = async (bot, message, args) => {
  let nopermsembed = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setDescription("Insufficient Permissions")
  .setColor(embederrorcolor)

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  let rerror = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setDescription("I couldn't find that user...")
  .setColor(embederrorcolor)
  let rerror2 = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setDescription("You did not specify a reason...")
  .setColor(embederrorcolor)
  if(!rUser) return message.channel.send(rerror)
  let rReason = args.join(" ").slice(22)
  if(!rReason) return message.channel.send(rerror2)
  if(rUser.id === message.author.id)return message.channel.send(nopermsembed)
  let rembed = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setDescription("Reports")
  .setColor(embedcolor)
  .addField("Reported User", `${rUser} with the ID: ${rUser.id}`)
  .addField("Reporting User", `${message.author} with the ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Reported at", message.createdAt)
  .addField("Reason", rReason)
  message.delete().catch(O_o =>{})
  message.channel.send(rembed)}


module.exports.help = {
  name: "report"
}
