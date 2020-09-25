const Discord = require('discord.js');

module.exports = {
    name: 'bite',
    description: 'bite someone',
    run: (client, message, args) =>{

        var images = ["https://cdn.discordapp.com/attachments/571671578610499585/716357275178106900/anime-bite-gif.gif", "https://cdn.discordapp.com/attachments/571671578610499585/716361436095578132/200_d.gif", "https://cdn.discordapp.com/attachments/571671578610499585/716361437752328252/anime-bite-gif-4.gif", "https://cdn.discordapp.com/attachments/571671578610499585/716361438649647174/179a16220f6cf2712073ccdc759ff3e1.gif", "https://cdn.discordapp.com/attachments/571671578610499585/716361441577533480/source.gif", "https://cdn.discordapp.com/attachments/571671578610499585/716361442013741126/k5tADh7.gif", "https://cdn.discordapp.com/attachments/571671578610499585/716361450725310494/tenor_1.gif", ];
        var image = Math.floor(Math.random() * images.length);
        var member = message.mentions.members.first();
        if(!member){
            message.channel.send("you need to mention someone")
        } else{
            if(member.id === message.author.id) {
                let killEmbed1 = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} don't bite yourself`)
          .setImage(String([images[image]]))
          .setColor(0xff0000)
       
         message.channel.send({embed: killEmbed1});

            } else {

         let killEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} bite ${member.user.username} like a cookie`)
          .setImage(String([images[image]]))
          .setColor(0xff0000)
       
         message.channel.send({embed: killEmbed});
        }
    }
    },
    


};