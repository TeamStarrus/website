const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`ayarlar`)
    .setDescription(`Sunucunuzda ayarladığınız sistemleri listeler.`),
  run: async (client, interaction) => {
  	if (!interaction.member.permissions.has(`MANAGE_GUILD`)) return interaction.followUp({content: `${client.config.s.ticks.red} Bu komutu kullanabilmek için \`Sunucuyu Yönet\` iznine sahip olmalısın!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    const db = require(`quick.db`), {ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} = require(`discord.js`);
    let buyukharfengel = await db.get(`buyukharfengel_${interaction.guild.id}`), cu31 = await db.get(`cu31_${interaction.guild.id}`), gvbengel = await db.get(`gvbengel_${interaction.guild.id}`), kufurengel = await db.get(`kufurengel_${interaction.guild.id}`), reklamkoruma = await db.get(`reklamkoruma_${interaction.guild.id}`), selamlama = await db.get(`selamlama_${interaction.guild.id}`);
    if (buyukharfengel == `açık`) {buyukharfengel = `${client.config.s.ticks.green} Açık`} else {buyukharfengel = `${client.config.s.ticks.red} Kapalı`};
    if (cu31 == `açık`) {cu31 = `${client.config.s.ticks.green} Açık`} else {cu31 = `${client.config.s.ticks.red} Kapalı`};
    if (gvbengel == `açık`) {gvbengel = `${client.config.s.ticks.green} Açık`} else {gvbengel = `${client.config.s.ticks.red} Kapalı`};
    if (kufurengel == `açık`) {kufurengel = `${client.config.s.ticks.green} Açık`} else {kufurengel = `${client.config.s.ticks.red} Kapalı`};
    if (reklamkoruma == `açık`) {reklamkoruma = `${client.config.s.ticks.green} Açık`} else {reklamkoruma = `${client.config.s.ticks.red} Kapalı`};
    if (selamlama == `açık`) {selamlama = `${client.config.s.ticks.green} Açık`} else {selamlama = `${client.config.s.ticks.red} Kapalı`};
    let embed = new EmbedBuilder().setColor(`#00FFB8`).setTitle(`${interaction.guild.name} için Ayarlar`).setDescription(`Sistemleri ayarlamak için **/sistemler** komutunu kullanabilirsiniz.`).addFields({name: `Büyük-Harf-Engel`, value: buyukharfengel, inline: true}, {name: `CU-31`, value: cu31, inline: true}, {name: `Ğ-vb-Engel`, value: gvbengel, inline: true}, {name: `Küfür-Engel`, value: kufurengel, inline: true}, {name: `Reklam-Koruma`, value: reklamkoruma, inline: true}, {name: `Selamlama`, value: selamlama, inline: true}), row = new ActionRowBuilder().addComponents(new ButtonBuilder().setStyle(ButtonStyle.Link).setLabel(`Destek sunucusuna katıl!`).setURL(`https://discord.gg/${client.config.s.guildInvite}`));
    await interaction.followUp({embeds: [embed], components: [row]});
  },
};
