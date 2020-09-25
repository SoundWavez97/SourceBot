const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "bot-owner",
  run: async (client, message, args) => {
    
    //OWNER ONLY COMMAND
    let allowed_users = ['718164201033564200', '696781138630279229']
    if (!allowed_users.includes(message.author.id)) return message.reply('no permission rip')
    
    //ARGUMENT
    if(!args.length) {
      return message.channel.send("Please give status message")
    }
    
 db.set(`status`, args.join(" "))
   await message.channel.send("Updated the bot status")
    process.exit(1);
    
  }
}