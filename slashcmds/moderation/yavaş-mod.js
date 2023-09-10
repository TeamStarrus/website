const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`yavaş-mod`)
    .setDescription(`Kullanıldığı kanalda yavaş modu ayarlar.`)
    .addStringOption(option => option.setName(`süre`).setDescription(`Yavaş modu kaç saniye yapmak istediğinizi yazın.`).setRequired(true)),
  run: async (client, interaction) => {
    if (!interaction.member.permissions.has(`MANAGE_GUILD`)) return interaction.followUp({content: `${client.config.s.ticks.red} Bu komutu kullanabilmek için \`Sunucuyu Yönet\` iznine sahip olmalısın!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    const request = require(`request`), limit = interaction.options.getString(`süre`);
    if (limit > 21600) return interaction.followUp({content: `${client.config.s.ticks.red} Yavaş mod en fazla 21600 saniye (6 saat) olarak ayarlanabilir.`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    if (limit == 0) {
      await interaction.followUp({content: `${client.config.s.ticks.green} <#${interaction.channel.id}> için yavaş mod sıfırlandı.`}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    } else {
      await interaction.followUp({content: `${client.config.s.ticks.green} <#${interaction.channel.id}> için yavaş mod **${limit} saniye** olarak ayarlandı.`}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    };
    request({
      url: `https://discord.com/api/v10/channels/${interaction.channel.id}`,
      method: `PATCH`,
      json: {
        rate_limit_per_user: limit
      },
      headers: {
        "Authorization": `Bot ${client.config.s.token}`
      },
    });
  },
};
