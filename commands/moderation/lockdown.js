const Discord = module.require("discord.js");

module.exports = {
   name: "lock",
   description: "Locks a Channel",
   category: "moderation",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("<a:wrong:752200833348665354>You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(` <a:tick:752182871158161418> ${message.channel} has been Locked`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}
}