const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor('F7A204')
        .setImage(message.author.avatarURL)
        .setFooter("Arda#0666 - Avatar Sistemi")

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['avatarım'],
  permLevel: 0 
};

exports.help = {
  name: 'avatarım', 
  description: 'Avatarınızı gösterir',
  usage: 'avatarım'
};
