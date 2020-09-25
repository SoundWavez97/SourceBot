const discord = require("discord.js");

module.exports = {
  name: "say",
  category: "info",
  description: "xd",
  usage: "say <message>",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`YOU DON'T HAVE PERMS USE REPEATER`)
    }
    
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('BRUHH SAY SOMETHING')
    message.channel.send(text)
}
  
}