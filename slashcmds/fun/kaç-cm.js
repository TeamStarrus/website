const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`kaç-cm`)
    .setDescription(`Sizinkinin ne kadar olduğunu söyler.`),
  run: async (client, interaction) => {
    const {EmbedBuilder} = require(`discord.js`);
    let nekadar = `Seninki tam **${Math.floor(Math.random() * 51)} cm**! Böyle devam.`;
    if (interaction.member.id == client.config.s.ownerId) {nekadar = `Seninki **ölçülemeyecek kadar uzun**! Beton yetmez.`};
    let embed = new EmbedBuilder().setColor(`#00FFB8`).setTitle(`Kaç cm?`).setDescription(`${interaction.member} ${nekadar}`);
    await interaction.followUp({embeds: [embed]});
  },
};
