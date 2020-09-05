const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('FireRP', client.user.avatarURL)
    .setFooter('Arda#0666')
    .setColor('F7A204')
    .setThumbnail('')
    .setImage('https://cdn.discordapp.com/attachments/750736214235283627/751850156843859998/tenor_3.gif')
    .setDescription('**Sunucu Aktiftir İyi Roller... **')
    
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aktif'],
  permLevel: 2
};

exports.help = {
  name: 'aktif',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'aktif'
};
