const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`emojileştir`)
    .setDescription(`Yazdığınız yazıyı emojilerle yeniden atar.`)
    .addStringOption(option => option
      .setName(`yazı`)
      .setDescription(`Emojileştirmek istediğin yazıyı yaz.`)
      .setRequired(true)
    ),
  run: async (client, interaction) => {
    const text = interaction.options.getString(`yazı`), randomizeCase = word => word.split(``).map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join(``), mapping = {' ': `   `, '0': ` :zero:`, '1': ` :one:`, '2': ` :two:`, '3': ` :three:`, '4': ` :four:`, '5': ` :five:`, '6': ` :six:`, '7': ` :seven:`, '8': ` :eight:`, '9': ` :nine:`, '!': ` :grey_exclamation:`, '?': ` :grey_question:`, '#': ` :hash:`, '*': ` :asterisk:`, '+': ` :heavy_plus_sign:`, '-': ` :heavy_minus_sign:`, 'ç': ` :regional_indicator_c:`, 'Ç': ` :regional_indicator_c:`, 'ğ': ` :regional_indicator_g:`, 'Ğ': ` :regional_indicator_g:`, 'ı': ` :regional_indicator_i:`, 'İ': ` :regional_indicator_i:`, 'ö': ` :regional_indicator_o:`, 'Ö': ` :regional_indicator_o:`, 'ş': ` :regional_indicator_s:`, 'Ş': ` :regional_indicator_s:`, 'ü': ` :regional_indicator_u:`, 'Ü': ` :regional_indicator_u:`}; `abcdefghijklmnopqrstuvwxyz`.split(``).forEach(character => {mapping[character] = mapping[character.toUpperCase()] = ` :regional_indicator_${character}:`});
    if (text.length > 50) return interaction.followUp({content: `${client.config.s.ticks.red} En fazla 50 karakter kullanabilirsiniz.`}).then(sent => {setTimeout(function() {sent.delete()}, 3000)}).catch(err => {});
    await interaction.followUp({content: text.split(``).map(c => mapping[c] || c).join(``), allowedMentions: {repliedUser: false}});
  },
};
