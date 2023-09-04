const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
	data: new SlashCommandBuilder()
  .setName(`temizle`)
  .setDescription(`Kanaldaki mesajları temizler.`)
  .addStringOption(option => option
    .setName(`miktar`)
    .setDescription(`Temizlenecek mesaj sayısını girin.`)
    .setRequired(true)
  ),

	run: async (client, interaction) => {

	if (!interaction.member.permissions.has(`MANAGE_MESSAGES`)) return interaction.followUp({content: `${client.settings.config.emotes.redTick} Bu komutu kullanabilmek için \`Mesajları Yönet\` iznine sahip olmalısın!`, ephemeral: true});

  const amount = interaction.options.getString(`miktar`);

  if (!amount || amount == `0` || amount > 100) return interaction.followUp({content: `${client.settings.config.emotes.redTick} Lütfen 1 ile 100 arasında bir değer gir!`, ephemeral: true});

  await interaction.deleteReply();
  await interaction.channel.bulkDelete(amount, true);

	},
};
