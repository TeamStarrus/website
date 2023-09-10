const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
	data: new SlashCommandBuilder()
    .setName(`oylama`)
    .setDescription(`Sunucu içerisinde bir oylama/anket başlatırsınız.`)
    .addStringOption(option => option.setName(`soru`).setDescription(`Bir oylama/anket sorusu belirleyin.`).setRequired(true)),
	run: async (client, interaction) => {
  	if (!interaction.member.permissions.has(`MANAGE_GUILD`)) return interaction.followUp({content: `${client.config.s.ticks.red} Bu komutu kullanabilmek için \`Sunucuyu Yönet\` iznine sahip olmalısın!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    const {EmbedBuilder} = require(`discord.js`), question = interaction.options.getString(`soru`);
    let embed = new EmbedBuilder().setColor(`#00FFB8`).setTitle(`**Oylama başlatıldı!**`).setDescription(`${question}`);
    await interaction.deleteReply().catch(err => {});
    await interaction.channel.send({embeds: [embed]}).then(function (interaction) {interaction.react(client.config.s.ticks.green); interaction.react(client.config.s.ticks.red)});
	},
};
