const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`yazı-tura`)
    .setDescription(`Bot sizin için yazı-tura atar ve sonucu söyler.`),
  run: async (client, interaction) => {
    const {EmbedBuilder} = require(`discord.js`);
    var list = [`Yazı`, `Tura`], result = list[Math.floor(Math.random() * list.length)];
    let coinflip = result;
      if (result == `Yazı`) {coinflip = `Yazı`};
      if (result == `Tura`) {coinflip = `Tura`};
    let image = coinflip;
      if (coinflip == `Yazı`) {image = `https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png`};
      if (coinflip == `Tura`) {image = `https://upload.wikimedia.org/wikipedia/commons/c/cd/1TL_reverse.png`};
    let embed = new EmbedBuilder().setColor(`#00FFB8`).setTitle(`Para atıldı. **${coinflip}** çıktı!`).setImage(image);
    await interaction.followUp({embeds: [embed]});
  },
};
