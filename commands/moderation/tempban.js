const { MessageEmbed } = require("discord.js");
const moment = require('moment');
const ms = require('ms');
const discord = require("discord.js");
module.exports = {
	name: "tempban",
	category: "info",
	description: "Returns latency and API ping",
	run: async (client, message, args) => {
		const reason = args.splice(2).join(" ");
		const tbuser = message.mentions.members.first();
		const regex = args.splice(1).join(" ");

		if (!message.member.hasPermission("BAN_MEMBERS")) {
			return message.channel.send("U dont have perms to ban someone");
		}
		if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
			return message.channel.send("I dont have permissions to ban someone");
		}
		if(tbuser === message.guild.me) {
			return ("You cant ban me LOL");
		}
		if (!tbuser) {
			return message.channel.send("You need to specify a user ``@user``");
		}
		if (tbuser.id == message.author.id) {
			return message.channel.send("U cant tempban urself");
		}
		if(tbuser.roles.highest.position >= message.member.roles.highest.position) {
			return("You cant ban that person\nreason: Highest perms or roles");
		}

		if(tbuser.id == message.guild.owner.id) {
			return message.channel.send("You cant ban the server owner");
		}

		if(!reason) {
			return message.channel.send('You need to give a reason!');
		}
		const tbuembed = new MessageEmbed()
			.setTitle("You have been banned!")
			.setColor("#854ae3")
			.addField("Reason:", reason)
			.addField("Time (s)", regex)
			.addField("Moderator:", message.author.username);
		tbuser.send(tbuembed);
		const tbembed = new MessageEmbed()
			.setTitle("Action: Tempban")
			.addField("User:", tbuser)
			.setAuthor(`${message.author.username}`)
			.setColor("#854ae3")
			.addField("Reason:", reason)
			.addField("Time (s)", regex)
			.addField("Moderator:", message.author.username);
		message.channel.send(tbembed);
		tbuser.send(tbuembed);
		tbuser.ban(reason).reason;
		setTimeout(() => {
			message.guild.members.unban(tbuser.id);
			message.channel.send(`${tbuser} has been unbanned after the tempban of ${regex}`);
		}, ms(regex));
		return undefined;
	},
};