//BotRequired
const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true})
const fs = require("fs")
bot.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  jsfile = files.filter(f => f.split(".").pop() === "js")


jsfile.forEach((f, i) => {
  let props = require(`./commands/${f}`)
  //console.log(`${f} loaded`)
  bot.commands.set(props.help.name, props)
})

})

//BotConfigurations
const embedcolor = "#484848";
const embederrorcolor = "#e74c3c";
const token = process.env.TOKEN;
const prefix = ".";


bot.on("ready", async() => {
  console.log("Efflux is online.")
  console.log("Efflux is running.")
})

bot.on("message", async message =>{
  if(message.author.bot) return
  if(message.channel.type === "dm") return
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let args = messageArray.slice(1)
  let commandfile = bot.commands.get(cmd.slice(prefix.length))
  if(commandfile) return commandfile.run(bot,message,args)
})
bot.login(token)
