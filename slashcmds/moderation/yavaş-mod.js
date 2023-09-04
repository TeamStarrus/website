const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`yavaş-mod`)
  .setDescription(`Kullanıldığı kanalda yavaş modu ayarlar.`)
  .addStringOption(option => option
    .setName(`süre`)
    .setDescription(`Yavaş modu kaç saniye yapmak istediğinizi yazın.`)
    .setRequired(true)
  ),

  run: async (client, interaction) => {

  if (!interaction.member.permissions.has(`MANAGE_GUILD`)) return interaction.followUp({content: `${client.settings.config.emotes.redTick} Bu komutu kullanabilmek için \`Sunucuyu Yönet\` iznine sahip olmalısın!`, ephemeral: true});

  const request = require(`request`),
  limit = interaction.options.getString(`süre`);

  if (limit > 21600) return interaction.followUp({content: `${client.settings.config.emotes.redTick} Yavaş mod en fazla 21600 saniye (6 saat) olarak ayarlanabilir.`, ephemeral: true});

  if (limit == 0) {
    await interaction.followUp({content: `${client.settings.config.emotes.greenTick} <#${interaction.channel.id}> için yavaş mod sıfırlandı.`});

  } else {
    await interaction.followUp({content: `${client.settings.config.emotes.greenTick} <#${interaction.channel.id}> için yavaş mod **${limit} saniye** olarak ayarlandı.`});
  };

  request({
    url: `https://discord.com/api/v10/channels/${interaction.channel.id}`,
    method: `PATCH`,
    json: {
      rate_limit_per_user: limit
    },
    headers: {
      "Authorization": `Bot ${process.env.token}`
    },
  });

  },
};
