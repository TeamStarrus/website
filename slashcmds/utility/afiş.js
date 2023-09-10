const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`afiş`)
    .setDescription(`Bir üyenin veya sunucunun afişini gönderir.`)
    .addSubcommand(subcommand => subcommand.setName(`üye`).setDescription(`Sizin veya seçtiğiniz üyenin afişini gönderir.`).addUserOption(option => option.setName(`üye`).setDescription(`Afişini görmek istediğiniz üyeyi seçin.`).setRequired(false)))
    .addSubcommand(subcommand => subcommand.setName(`sunucu`).setDescription(`Bulunduğunuz sunucunun afişini gönderir.`)),
  run: async (client, interaction) => {
    if (interaction.options.getSubcommand() == `üye`) {
      const {EmbedBuilder} = require(`discord.js`),
      member = interaction.options.getUser(`üye`) || interaction.member.user;
      if (member.banner) {
        let embed = new EmbedBuilder().setColor(`#00FFB8`).setTitle(`${member.username} Kullanıcısının Afişi`).setImage(`https://cdn.discordapp.com/banners/${member.id}/${member.banner}.png?size=1024`).setDescription(`**gif** [[512]](https://cdn.discordapp.com/banners/${member.id}/${member.banner}.gif?size=512) [[1024]](https://cdn.discordapp.com/banners/${member.id}/${member.banner}.gif?size=1024) [[2048]](https://cdn.discordapp.com/banners/${member.id}/${member.banner}.gif?size=2048)\n**jpg** [[512]](https://cdn.discordapp.com/banners/${member.id}/${member.banner}.jpg?size=512) [[1024]](https://cdn.discordapp.com/banners/${member.id}/${member.banner}.jpg?size=1024) [[2048]](https://cdn.discordapp.com/banners/${member.id}/${member.banner}.jpg?size=2048)\n**png** [[512]](https://cdn.discordapp.com/banners/${member.id}/${member.banner}.png?size=512) [[1024]](https://cdn.discordapp.com/banners/${member.id}/${member.banner}.png?size=1024) [[2048]](https://cdn.discordapp.com/banners/${member.id}/${member.banner}.png?size=2048)\n**webp** [[512]](https://cdn.discordapp.com/banners/${member.id}/${member.banner}.webp?size=512) [[1024]](https://cdn.discordapp.com/banners/${member.id}/${member.banner}.webp?size=1024) [[2048]](https://cdn.discordapp.com/banners/${member.id}/${member.banner}.webp?size=2048)`);
        await interaction.followUp({embeds: [embed]});
      } else {
        await interaction.followUp({content: `${client.config.s.ticks.red} Bu kullanıcının bir afişi yok!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
      };
    };
    if (interaction.options.getSubcommand() == `sunucu`) {
      const {EmbedBuilder} = require(`discord.js`),
      guild = interaction.guild;
      if (interaction.guild.banner) {
        let embed = new EmbedBuilder().setColor(`#00FFB8`).setTitle(`${guild.name} Sunucusunun Afişi`).setImage(`https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=1024`).setDescription(`**gif** [[512]](https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.gif?size=512) [[1024]](https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.gif?size=1024) [[2048]](https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.gif?size=2048)\n**jpg** [[512]](https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.jpg?size=512) [[1024]](https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.jpg?size=1024) [[2048]](https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.jpg?size=2048)\n**png** [[512]](https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=512) [[1024]](https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=1024) [[2048]](https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=2048)\n**webp** [[512]](https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.webp?size=512) [[1024]](https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.webp?size=1024) [[2048]](https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.webp?size=2048)`);
        await interaction.followUp({embeds: [embed]});
      } else {
        await interaction.followUp({content: `${client.config.s.ticks.red} Bu sunucunun bir afişi yok!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
      };
    };
  },
};
