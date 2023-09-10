const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`söyle`)
    .setDescription(`Bota istediğiniz mesajı söyletebilirsiniz.`)
    .addStringOption(option => option
      .setName(`yazı`)
      .setDescription(`Botun söylemesini istediğiniz mesajı yazın.`)
      .setRequired(true)
    ),
  run: async (client, interaction) => {
    if (!interaction.member.permissions.has(`MANAGE_MESSAGES`)) return interaction.followUp({content: `${client.config.s.ticks.red} Bu komutu kullanabilmek için \`Mesajları Yönet\` iznine sahip olmalısın!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 3000)}).catch(err => {});
    const text = interaction.options.getString(`yazı`); await interaction.deleteReply().catch(err => {});
    await interaction.channel.send({content: text});
  },
};
