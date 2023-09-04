const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`sustur`)
  .setDescription(`Belirtilen üyeyi sunucuda susturur.`)
  .addUserOption(option => option
    .setName(`üye`)
    .setDescription(`Susturmak istediğin üyeyi seç.`)
    .setRequired(true)
  )
  .addStringOption(option => option
    .setName(`süre`)
    .setDescription(`Susturma süresini belirt. (Örnek: 60m)`)
    .setRequired(true)
  )
  .addStringOption(option => option
    .setName(`sebep`)
    .setDescription(`Üyeyi susturma sebebini yaz.`)
    .setRequired(false)
  ),

  run: async (client, interaction) => {

  if (!interaction.member.permissions.has(`MODERATE_MEMBERS`)) return interaction.followUp({content: `${client.settings.config.emotes.redTick} Bu komutu kullanabilmek için \`Üyelere Zamanaşımı Uygula\` iznine sahip olmalısın!`, ephemeral: true});

  const member = interaction.options.getMember(`üye`),
  ms = require(`ms`), time = ms(interaction.options.getString(`süre`)),
  reason = interaction.options.getString(`sebep`) || `Sebep belirtilmedi.`;

  if (!time) return interaction.followUp({content: `Lütfen geçerli bir süre giriniz.\n\`s = saniye / m = dakika / h = saat\` (Örnek: 60m)`});
  const response = await member.timeout(time, reason);

  if (!response) return interaction.followUp({content: `${client.settings.config.emotes.redTick} Bu üyeyi sunucuda susturamıyorum.`});
  return interaction.followUp({content: `${client.settings.config.emotes.greenTick} ${member}, ${ms(time, {long: true})} süreyle susturuldu!`});

  },
};
