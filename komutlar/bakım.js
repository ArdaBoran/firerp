const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('FireRP', client.user.avatarURL)
    .setFooter('Arda#0666')
    .setColor('F7A204')
    .setThumbnail('')
    .setImage('https://cdn.discordapp.com/attachments/750736214235283627/751850757325586603/tenor_4.gif')
    .setDescription('**Kısa süreliğine FireRp bakımda.**')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 2
};

exports.help = {
  name: 'bakım',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'bakım'
};
