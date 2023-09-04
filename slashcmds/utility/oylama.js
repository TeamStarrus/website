const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
	data: new SlashCommandBuilder()
  .setName(`oylama`)
  .setDescription(`Sunucu içerisinde bir oylama/anket başlatırsınız.`)
  .addStringOption(option => option
    .setName(`soru`)
    .setDescription(`Bir oylama/anket sorusu belirleyin.`)
    .setRequired(true)
  ),

	run: async (client, interaction) => {

	if (!interaction.member.permissions.has(`MANAGE_GUILD`)) return interaction.followUp({content: `${client.settings.config.emotes.redTick} Bu komutu kullanabilmek için \`Sunucuyu Yönet\` iznine sahip olmalısın!`, ephemeral: true});

  const {EmbedBuilder} = require(`discord.js`),
  question = interaction.options.getString(`soru`);

  let embed = new EmbedBuilder()
  .setColor(`#00FFB8`)
  .setTitle(`**Oylama başlatıldı!**`)
  .setDescription(`${question}`);

  await interaction.deleteReply();
  await interaction.channel.send({embeds: [embed]})
  .then(function (interaction) {
    interaction.react(client.settings.config.emotes.greenTick);
    interaction.react(client.settings.config.emotes.redTick);
  });

	},
};
