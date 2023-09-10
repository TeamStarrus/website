const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
	data: new SlashCommandBuilder()
    .setName(`temizle`)
    .setDescription(`Kanaldaki mesajları temizler.`)
    .addStringOption(option => option.setName(`miktar`).setDescription(`Temizlenecek mesaj sayısını girin.`).setRequired(true)),
	run: async (client, interaction) => {
  	if (!interaction.member.permissions.has(`MANAGE_MESSAGES`)) return interaction.followUp({content: `${client.config.s.ticks.red} Bu komutu kullanabilmek için \`Mesajları Yönet\` iznine sahip olmalısın!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    const amount = interaction.options.getString(`miktar`);
    if (!amount || amount == `0` || amount > 100) return interaction.followUp({content: `${client.config.s.ticks.red} Lütfen 1 ile 100 arasında bir değer gir!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    await interaction.deleteReply().catch(err => {});
    await interaction.channel.bulkDelete(amount, true).catch(err => {});
	},
};
