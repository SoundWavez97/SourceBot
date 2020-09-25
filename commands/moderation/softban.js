const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
  name: "softban",
  aliases: null,
  category: "moderation",
  description: "SoftBan A Member!",
  usage: "Ban <Mention Member>",
  accessableby: "everyone",
  run: async (client, message, args) => {
    //Start

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `<a:wrong:752200833348665354>You Don't Have Permission To Use This Command!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `Please Mention A Member That You Want To Ban!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Please Mention A Valid Member!`);


    if (Member.id === message.author.id)
      return message.channel.send(`You Can't Ban Your Self!`);

    if (Member.id === client.user.id)
      return message.channel.send(`Please Don't Ban Me ;-;`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`You Can't Ban Owner Of Server!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);
    
    let BotRole = message.guild.member(message.guild.me).roles.highest.position;
    
    let Role = User.roles.highest.position;
    
    let UserRole = message.member.roles.highest.position;
    
    if (UserRole <= Role) return message.channel.send(`<a:wrong:752200833348665354>I Can't Ban That Member Because That Member Has Role Position Is Higher Than My Role Or Same Role As You!`);
    
    if (BotRole <= Role) return message.channel.send(`<a:wrong:752200833348665354>I Can't Ban That Member Because That Member Has Role Position Is Higher Than My Role Or Same Role As Me!`);
    
    if (!User.bannable) return message.channel.send(`<a:wrong:752200833348665354>I Can't Ban That Member!`),

  banMember.send({embed: {color: "#ff0019", description:`Hello, you have been banned from ${message.guild.name} for: ${reason}`}}).then(() =>
   message.guild.member(banMember).ban(banMember, { days: 1, reason: reason})).then(() => message.guild.members.unban(banMember.id).catch(err => console.log(err)));

   

    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .setThumbnail(banMember.user.displayAvatarURL())
    .addField("Moderation:", "SOFT BAN")
    .addField("Banned:", banMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .setTimestamp()
    
        let sChannel = message.guild.channels.cache.find(c => c.name === "🚨│logs")
        sChannel.send(embed)

        message.channel.send({embed: {color: "#10de47", description: `<a:tick:752182871158161418> ${banMember.user.username} has successfully been soft banned from the server.`}});
        
    }
}