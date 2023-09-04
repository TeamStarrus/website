const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`kaç-cm`)
  .setDescription(`Sizinkinin ne kadar olduğunu söyler.`),

  run: async (client, interaction) => {

  const {EmbedBuilder} = require(`discord.js`);
  let howlong = `Seninki tam **${Math.floor(Math.random() * 51)} cm**! Böyle devam.`;
  if (interaction.member.id == `687021258273194016`) {howlong = `Seninki **ölçülemeyecek kadar uzun**! Beton yetmez.`};

  let embed = new EmbedBuilder()
  .setColor(`#00FFB8`)
  .setTitle(`Kaç cm?`)
  .setDescription(`${interaction.member} ${howlong}`);

  await interaction.followUp({embeds: [embed]});

  },
};
