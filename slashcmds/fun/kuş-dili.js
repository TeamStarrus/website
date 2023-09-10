const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`kuş-dili`)
    .setDescription(`Yazdığınız yazıyı kuş diline çevirir.`)
    .addStringOption(option => option
      .setName(`yazı`)
      .setDescription(`Kuş diline çevirmek istediğiniz yazıyı girin.`)
      .setRequired(true)
    ),
  run: async (client, interaction) => {
    const text = interaction.options.getString(`yazı`);
    String.prototype.replaceAll = function (find, replace) {var str = this; return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, `\\$&`), `g`), replace)};
    if (text.slice(0).join(` `).length <= 5) return interaction.followUp({content: `${client.config.s.ticks.red} En az 5 harf kullanmalısınız.`});
    let chimped = text.slice(0).join(` `), replaced = chimped.replaceAll(`a`, `aga`).replaceAll(`e`, `ege`).replaceAll(`i`, `igi`).replaceAll(`ı`, `igi`).replaceAll(`o`, `ogo`).replaceAll(`ö`, `ogo`).replaceAll(`u`, `ugu`).replaceAll(`ü`, `ugu`);
    return interaction.followUp({content: replaced, allowedMentions: {repliedUser: false}});
  },
};
