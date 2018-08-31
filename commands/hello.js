const Discord = require("discord.js")
const embedcolor = "#484848";
const embederrorcolor = "#e74c3c";

module.exports.run = async (bot, message, args) => {

  let helloembed = new Discord.RichEmbed()
      helloembed.setAuthor("Efflux")
      helloembed.setDescription("Hello there!")
    return message.channel.send(helloembed)


}


module.exports.help = {
  name: "hello"
}
