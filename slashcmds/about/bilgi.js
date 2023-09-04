const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`bilgi`)
  .setDescription(`Starrus Bot hakkında detaylı bilgi verir.`),

  run: async (client, interaction) => {
    
  const {ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} = require(`discord.js`);

  let embed = new EmbedBuilder()
  .setColor(`#00FFB8`)
  .setTitle(`Starrus Bilgilendirme`)
  .setThumbnail(`https://imgur.com/iJh9KaC.png`)
  .setDescription(`**Bot Sahibi:** \`[Coanertinus](https://discord.com/users/687021258273194016)\`\n\n**Bot Gecikmesi:** ${client.ws.ping} milisaniye\n**Mesaj Gecikmesi:** ${new Date().getTime() - interaction.createdTimestamp} milisaniye\n\n**RAM Kullanımı:** ${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + ` / 512 MB`}\n\n**Sürümler**\n**Starrus:** ${client.settings.config.versions.starrus}\n**Discord.JS:** ${client.settings.config.versions.discordjs}\n**Discord.JS Rest:** ${client.settings.config.versions.discordjsrest}\n**Discord API Types:** ${client.settings.config.versions.discordapitypes}\n**Son Güncelleme Tarihi:** ${client.settings.config.versions.lastupdatedon}\n\n**Toplam Sunucu Sayısı:** ${client.guilds.cache.size.toLocaleString()}\n**Toplam Kullanıcı Sayısı:** ${client.guilds.cache.reduce((t, r) => t + r.memberCount, 0).toLocaleString()}\n**Toplam Kanal Sayısı:** ${client.channels.cache.size.toLocaleString()}\n**Toplam Emoji Sayısı:** ${client.emojis.cache.size.toLocaleString()}\n\n**Hazır Olma Süresi**\n<t:${Date.parse(client.readyAt) / 1000}:F> (<t:${Date.parse(client.readyAt) / 1000}:R>)`);
    
  let row = new ActionRowBuilder()
  .addComponents(
    new ButtonBuilder()
    .setStyle(ButtonStyle.Link)
    .setLabel(`Botu davet et!`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&response_type=code&scope=bot+applications.commands&permissions=8`),
    new ButtonBuilder()
    .setStyle(ButtonStyle.Link)
    .setLabel(`Destek sunucusuna katıl!`)
    .setURL(`https://discord.com/invite/${client.settings.config.server}`),
    new ButtonBuilder()
    .setStyle(ButtonStyle.Link)
    .setLabel(`Top.gg üzerinden oy ver!`)
    .setURL(`https://top.gg/bot/${client.user.id}/vote`)
  );
    
  await interaction.followUp({embeds: [embed], components: [row]});

  },
};
