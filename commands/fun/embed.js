const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "embed",
aliases: ["embedsay"],
category: "Utility",
usage: "embed <text to say>",
description: "Returns provided text in Embed form.",
run: async(client, message, args) => {
     if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "<a:wrong:752200833348665354>You Don't Have Permission To Use This Command!"
      );
 await message.delete()
  let say = message.content.split(" ").slice(1).join(" ")
  if(!say) return message.channel.send(`❌ | `+"I Cannot Repeat Blank Message")
  let embed = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
  .setDescription(`${say}`)
  .setColor("RANDOM")
.setFooter(`Embed by ${message.author.username}`)
.setTimestamp()
  message.channel.send(embed)
  message.delete();
}
}