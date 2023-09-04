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

  if (!interaction.member.permissions.has(`MANAGE_MESSAGES`)) return interaction.followUp({content: `${client.settings.config.emotes.redTick} Bu komutu kullanabilmek için \`Mesajları Yönet\` iznine sahip olmalısın!`, ephemeral: true});

  const text = interaction.options.getString(`yazı`);

  await interaction.deleteReply();
  await interaction.channel.send({content: text, allowedMentions: {repliedUser: false}});

  },
};
