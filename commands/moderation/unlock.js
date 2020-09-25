const Discord = module.require("discord.js");

module.exports = {
   name: "unlock",
   description: "Unlocks a Channel",
   category: "moderation",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("<a:wrong:752200833348665354>You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`ًں”“ ${message.channel}  has been Unlocked`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}
}