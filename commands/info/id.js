const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
  name: "userid",
  category: "info",
  run: async (client, message, args) => {
    const member =
      message.mentions.users.first() ||
      message.guild.members.cache.find(x => x.name === `${args.join(" ")}`) ||
      message.author;

    const embed = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`User ID`)
      .addField(`Full Username`, member.tag, true)
      .addField(`ID`, member.id, true)
      .setFooter(`Useful Command For Who Does Not Know How To Get ID!`)
      .setTimestamp();

    message.channel.send(embed);
  }
};