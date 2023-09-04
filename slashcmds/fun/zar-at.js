const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`zar-at`)
  .setDescription(`Bot sizin için 6 yüzlü bir zar atar.`),

  run: async (client, interaction) => {

  function dice() {
    var rand = [`1`, `2`, `3`, `4`, `5`, `6`];
    return rand[Math.floor(Math.random() * rand.length)];
  };

  await interaction.followUp({content: `:game_die: ${interaction.member}, zarın **${dice()}** çıktı!`, allowedMentions: {repliedUser: false}});

  },
};
