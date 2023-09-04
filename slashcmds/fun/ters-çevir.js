const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`ters-çevir`)
  .setDescription(`Yazdığınız yazıyı ters çevirir.`)
  .addStringOption(option => option
    .setName(`yazı`)
    .setDescription(`Tersine çevirmek istediğiniz yazıyı yazın.`)
    .setRequired(true)
  ),

  run: async (client, interaction) => {

  const text = interaction.options.getString(`yazı`);

  await interaction.followUp({content: text.split(``).reverse().join(``), allowedMentions: {repliedUser: false}});

  },
};
