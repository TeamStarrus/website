const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`sustur`)
    .setDescription(`Belirtilen üyeyi sunucuda susturur.`)
    .addUserOption(option => option.setName(`üye`).setDescription(`Susturmak istediğin üyeyi seç.`).setRequired(true))
    .addStringOption(option => option.setName(`süre`).setDescription(`Susturma süresini belirt. (Örnek: 60m)`).setRequired(true))
    .addStringOption(option => option.setName(`sebep`).setDescription(`Üyeyi susturma sebebini yaz.`).setRequired(false)),
  run: async (client, interaction) => {
    if (!interaction.member.permissions.has(`MODERATE_MEMBERS`)) return interaction.followUp({content: `${client.config.s.ticks.red} Bu komutu kullanabilmek için \`Üyelere Zamanaşımı Uygula\` iznine sahip olmalısın!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    const member = interaction.options.getMember(`üye`), ms = require(`ms`), time = ms(interaction.options.getString(`süre`)), reason = interaction.options.getString(`sebep`) || `Sebep belirtilmedi.`;
    if (!time) return interaction.followUp({content: `${client.config.s.ticks.red} Lütfen geçerli bir süre giriniz.\n\`s = saniye / m = dakika / h = saat\` (Örnek: 60m)`}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    const response = await member.timeout(time, reason);
    if (!response) return interaction.followUp({content: `${client.config.s.ticks.red} Bu üyeyi sunucuda susturamıyorum.`}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    await interaction.followUp({content: `${client.config.s.ticks.green} ${member}, ${ms(time, {long: true})} süreyle susturuldu!`}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
  },
};
