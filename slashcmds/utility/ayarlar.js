const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`ayarlar`)
  .setDescription(`Sunucunuzda ayarladığınız sistemleri listeler.`),

  run: async (client, interaction) => {

	if (!interaction.member.permissions.has(`MANAGE_GUILD`)) return interaction.followUp({content: `${client.settings.config.emotes.redTick} Bu komutu kullanabilmek için \`Sunucuyu Yönet\` iznine sahip olmalısın!`, ephemeral: true});

  const db = require(`quick.db`),
  {ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} = require(`discord.js`);

  let buyukharfengel = await db.get(`buyukharfengel_${interaction.guild.id}`);
  let cu31 = await db.get(`cu31_${interaction.guild.id}`);
  let gvbengel = await db.get(`gvbengel_${interaction.guild.id}`);
  let kufurengel = await db.get(`kufurengel_${interaction.guild.id}`);
  let reklamkoruma = await db.get(`reklamkoruma_${interaction.guild.id}`);
  let selamlama = await db.get(`selamlama_${interaction.guild.id}`);

  if (buyukharfengel == `açık`) {buyukharfengel = `${client.settings.config.emotes.greenTick} Açık`} else {buyukharfengel = `${client.settings.config.emotes.redTick} Kapalı`};
  if (cu31 == `açık`) {cu31 = `${client.settings.config.emotes.greenTick} Açık`} else {cu31 = `${client.settings.config.emotes.redTick} Kapalı`};
  if (gvbengel == `açık`) {gvbengel = `${client.settings.config.emotes.greenTick} Açık`} else {gvbengel = `${client.settings.config.emotes.redTick} Kapalı`};
  if (kufurengel == `açık`) {kufurengel = `${client.settings.config.emotes.greenTick} Açık`} else {kufurengel = `${client.settings.config.emotes.redTick} Kapalı`};
  if (reklamkoruma == `açık`) {reklamkoruma = `${client.settings.config.emotes.greenTick} Açık`} else {reklamkoruma = `${client.settings.config.emotes.redTick} Kapalı`};
  if (selamlama == `açık`) {selamlama = `${client.settings.config.emotes.greenTick} Açık`} else {selamlama = `${client.settings.config.emotes.redTick} Kapalı`};

  let embed = new EmbedBuilder()
  .setColor(`#00FFB8`)
  .setTitle(`${interaction.guild.name} için Ayarlar`)
  .setDescription(`Sistemleri ayarlamak için **/sistemler** komutunu kullanabilirsiniz.`)
  .addFields(
		{name: `Büyük-Harf-Engel`, value: buyukharfengel, inline: true},
		{name: `CU-31`, value: cu31, inline: true},
		{name: `Ğ-vb-Engel`, value: gvbengel, inline: true},
		{name: `Küfür-Engel`, value: kufurengel, inline: true},
		{name: `Reklam-Koruma`, value: reklamkoruma, inline: true},
		{name: `Selamlama`, value: selamlama, inline: true}
  );

  let row = new ActionRowBuilder()
  .addComponents(
    new ButtonBuilder()
    .setStyle(ButtonStyle.Link)
    .setLabel(`Destek sunucusuna katıl!`)
    .setURL(`https://discord.com/invite/${client.settings.config.server}`)
  );

  await interaction.followUp({embeds: [embed], components: [row]});

  },
};
