const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "verify",
  description: "verify new members",
  usage: "verify",
  category: "verification for unverified members",
   run: async (client, message, args) => {
    await message.member.roles.add('749631622105661541')
 if (!message.member.roles.cache.get('749631622105661541')) return
     if (message.channel.id !== '758244690541281320') return
    await message.channel.send("You Have Been successfully verified in **Chill's Base**")
  }
}


