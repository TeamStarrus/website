const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`gaymetre`)
    .setDescription(`Yüzde kaç eşcinsel olduğunuzu öğrenirsiniz.`),
  run: async (client, interaction) => {
    const {EmbedBuilder} = require(`discord.js`);
    let yuzde = `**%${Math.floor(Math.random() * 101)}**`;
    if (interaction.member.id == client.config.s.ownerId) {yuzde = `**%0**`};
    let embed = new EmbedBuilder().setColor(`#00FFB8`).setTitle(`Gaymetre`).setDescription(`${interaction.member} ${yuzde} gay :rainbow_flag:`);
    await interaction.followUp({embeds: [embed]});
  },
};
