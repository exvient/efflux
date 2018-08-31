const Discord = require("discord.js")
const embedcolor = "#484848";
const embederrorcolor = "#e74c3c";

module.exports.run = async (bot, message, args) => {
  let nopermsembed = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setDescription("Insufficient Permissions")
  .setColor(embederrorcolor)

  let kerror = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setDescription("I couldn't find that user...")
  .setColor(embederrorcolor)
  let kerror2 = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setDescription("You did not specify a reason...")
  .setColor(embederrorcolor)
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  if(!kUser) return message.channel.send(kerror)
  let kReason = args.join(" ").slice(22)
  if(!kReason) return message.channel.send(kerror2)
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(nopermsembed)
  if(kUser.id === message.author.id)return message.channel.send(nopermsembed)
  if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send(nopermsembed)

  let kembed = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setColor(embedcolor)
  .setDescription("Kicks")
  .addField("Kicked User", `${kUser} with the ID: ${kUser.id}`)
  .addField("Kicking User", `${message.author} with the ID: ${message.author.id}`)
  .addField("Kicked in", message.channel)
  .addField("Kicked at", message.createdAt)
  .addField("Reason", kReason)
  message.delete().catch(O_o =>{})
  message.guild.member(kUser).kick(kReason)
  message.channel.send(kembed)



}


module.exports.help = {
  name: "kick"
}
