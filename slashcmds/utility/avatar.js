const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`avatar`)
    .setDescription(`Bir üyenin veya sunucunun profil fotoğrafını gönderir.`)
    .addSubcommand(subcommand => subcommand.setName(`üye`).setDescription(`Sizin veya seçtiğiniz üyenin profil fotoğrafını gönderir.`).addUserOption(option => option.setName(`üye`).setDescription(`Profil fotoğrafını görmek istediğiniz üyeyi seçin.`).setRequired(false)))
    .addSubcommand(subcommand => subcommand.setName(`sunucu`).setDescription(`Bulunduğunuz sunucunun profil fotoğrafını gönderir.`)),
  run: async (client, interaction) => {
    if (interaction.options.getSubcommand() == `üye`) {
      const {EmbedBuilder} = require(`discord.js`), member = interaction.options.getUser(`üye`) || interaction.member.user;
      if (member.avatar) {
        let embed = new EmbedBuilder().setColor(`#00FFB8`).setTitle(`${member.username} Kullanıcısının Avatarı`).setImage(`https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png?size=1024`).setDescription(`**gif** [[512]](https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.gif?size=512) [[1024]](https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.gif?size=1024) [[2048]](https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.gif?size=2048)\n**jpg** [[512]](https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.jpg?size=512) [[1024]](https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.jpg?size=1024) [[2048]](https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.jpg?size=2048)\n**png** [[512]](https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png?size=512) [[1024]](https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png?size=1024) [[2048]](https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png?size=2048)\n**webp** [[512]](https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.webp?size=512) [[1024]](https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.webp?size=1024) [[2048]](https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.webp?size=2048)`);
        await interaction.followUp({embeds: [embed]});
      } else {
        await interaction.followUp({content: `${client.config.s.ticks.red} Bu kullanıcının bir avatarı yok!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
      };
    };
    if (interaction.options.getSubcommand() == `sunucu`) {
      const {EmbedBuilder} = require(`discord.js`), guild = interaction.guild;
      if (interaction.guild.icon) {
        let embed = new EmbedBuilder().setColor(`#00FFB8`).setTitle(`${guild.name} Sunucusunun Avatarı`).setImage(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=1024`).setDescription(`**gif** [[512]](https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.gif?size=512) [[1024]](https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.gif?size=1024) [[2048]](https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.gif?size=2048)\n**jpg** [[512]](https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg?size=512) [[1024]](https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg?size=1024) [[2048]](https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg?size=2048)\n**png** [[512]](https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=512) [[1024]](https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=1024) [[2048]](https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=2048)\n**webp** [[512]](https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=512) [[1024]](https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=1024) [[2048]](https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=2048)`);
        await interaction.followUp({embeds: [embed]});
      } else {
        await interaction.followUp({content: `${client.config.s.ticks.red} Bu sunucunun bir avatarı yok!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
      };
    };
  },
};
