const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`gaymetre`)
  .setDescription(`Yüzde kaç eşcinsel olduğunuzu öğrenirsiniz.`),

  run: async (client, interaction) => {

  const {EmbedBuilder} = require(`discord.js`);
  let howgay = `**%${Math.floor(Math.random() * 101)}**`;
  if (interaction.member.id == `687021258273194016`) {howgay = `**%0**`};

  let embed = new EmbedBuilder()
  .setColor(`#00FFB8`)
  .setTitle(`Gaymetre`)
  .setDescription(`${interaction.member} ${howgay} gay :rainbow_flag:`);

  await interaction.followUp({embeds: [embed]});

  },
};
