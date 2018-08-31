const Discord = require("discord.js")
const embedcolor = "#484848";
const embederrorcolor = "#e74c3c";

module.exports.run = async (bot, message, args) => {

  var answers = ["https://media.giphy.com/media/pfGBhQSaYAO5y/giphy.gif",
                 "https://media.giphy.com/media/8TpEwyNgVypZm/giphy.gif",
                 "https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif",
                 "https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif",
                 "https://media.giphy.com/media/10Am8idu3qBYRy/giphy.gif",
                 "https://media.giphy.com/media/96bJvJ2jDrruo/giphy.gif",
                 "https://media.giphy.com/media/O3ao5CGUL7FK0/giphy.gif",
                // "",
                 //"",
                // "",
                // "",
                // "",
                 //""]
  var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  let slerror = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setDescription("I couldn't find that user...")
  .setColor(embederrorcolor)

  let slUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  if(!slUser) return message.channel.send(slerror)
  if(slUser.id === bot.user.id) return
  let slembed = new Discord.RichEmbed()
  .setAuthor("Efflux")
  .setImage(randomAnswer)
  .setDescription(`Ouch, ${slUser}, that's going to hurt.`)
  .setColor(embedcolor)
  message.channel.send(slembed)}
module.exports.help = {
  name: "slap"
}
