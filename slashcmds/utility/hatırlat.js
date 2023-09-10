const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`hatırlat`)
    .setDescription(`Sizin için hatırlatıcı oluşturur ve hatırlatır.`)
    .addStringOption(option => option.setName(`süre`).setDescription(`Süreyi girin. (Örnek: 60)`).setRequired(true))
    .addStringOption(option => option.setName(`birim`).setDescription(`Birimi girin. (Örnek: dakika)`).setRequired(true))
    .addStringOption(option => option.setName(`sebep`).setDescription(`Ne için bahsedilmek istersiniz?`).setRequired(false)),
  run: async (client, interaction) => {
    const ms = require(`ms`); let unit, time = interaction.options.getString(`süre`), birim = interaction.options.getString(`birim`);
  	if (!time || time >= `60`) {return interaction.followUp(`${client.config.s.ticks.red} Lütfen geçerli bir süre giriniz.`).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {})};
    if (!birim || !birim == `saniye` || !birim == `dakika` || !birim == `saat` || !birim == `gün`) {return interaction.followUp(`${client.config.s.ticks.red} Lütfen geçerli bir birim giriniz.`).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {})};
  	if (birim == `saniye`) unit = `seconds`; if (birim == `dakika`) unit = `minutes`; if (birim == `saat`) unit = `hours`; if (birim == `gün`) unit = `days`;
	  await interaction.followUp(`${client.config.s.ticks.green} Hatırlatıcı başarılı bir şekilde ayarlandı!`).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    const reason = interaction.options.getString(`sebep`);
    if (reason) {
      setTimeout(function() {
        await interaction.channel.send({content: `${interaction.member} Hatırlatıcının süresi doldu! Sebep: \`${reason}\``});
      }, ms(`${time} ${unit}`));
    } else {
      setTimeout(function() {
        await interaction.channel.send({content: `${interaction.member} Hatırlatıcının süresi doldu! Sebep belirtilmedi.`});
      }, ms(`${time} ${unit}`));
    };
  },
};
