const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`çay-iç`)
    .setDescription(`Boğaz manzarası karşısında çay içersiniz.`),
  run: async (client, interaction) => {
    const {EmbedBuilder} = require(`discord.js`);
    let embed = new EmbedBuilder().setColor(`#00FFB8`).setImage(`https://i.hizliresim.com/4ey00j0.jpg`).setTitle(`${interaction.member.user.username} çay içti!`);
    await interaction.followUp({embeds: [embed]});
  },
};
