module.exports = {
  run: async (client, guild) => {

  const {EmbedBuilder} = require(`discord.js`);

  var VerificationLevel = guild.verificationLevel, verificationLevel = (VerificationLevel == `NONE` ? (`Yok`) : (VerificationLevel == `LOW` ? (`Düşük`) : (VerificationLevel == `MEDIUM` ? (`Orta`) : (VerificationLevel == `HIGH` ? (`Yüksek`) : (VerificationLevel == `VERY_HIGH` ? (`Çok Yüksek`) : (`Bilinmiyor/Bulunamadı`))))));
  const description = guild.description || `Yok.`;

  let embed = new EmbedBuilder()
  .setColor(`#ED4245`)
  .setTitle(`BİR SUNUCUDAN AYRILDIM`)
  .setThumbnail(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`)
  .setDescription(`**Sunucu Adı:** ${guild.name}\n**Sunucu ID'si:** ${guild.id}\n\n**Sunucu Sahibi:** ${(await guild.fetchOwner()).user.tag}\n**Sunucu Sahibinin ID'si:** ${guild.ownerId}\n**Sunucu Sahibinin Profili:** <@!${guild.ownerId}>\n\n**Sunucudaki Üye Sayısı:** ${guild.members.cache.size}\n**Sunucudaki Rol Sayısı:** ${guild.roles.cache.size}\n**Sunucudaki Kanal Sayısı:** ${guild.channels.cache.size}\n**Sunucudaki Emoji Sayısı:** ${guild.emojis.cache.size}\n**Sunucudaki Çıkartma Sayısı:** ${guild.stickers.cache.size}\n\n**Doğrulama Seviyesi:** ${verificationLevel}\n**Oluşturulma Tarihi:**\n<t:${Date.parse(guild.createdAt) / 1000}:F> (<t:${Date.parse(guild.createdAt) / 1000}:R>)\n\n**Sunucu Açıklaması:** ${description}\n\n**Şu Anki Toplam Üye Sayısı:** ${client.guilds.cache.reduce((t, r) => t + r.memberCount, 0).toLocaleString()}\n**Şu Anki Toplam Kanal Sayısı:** ${client.channels.cache.size.toLocaleString()}\n**Şu Anki Toplam Sunucu Sayısı:** ${client.guilds.cache.size.toLocaleString()}`);

  client.channels.cache.get(client.settings.config.logchannel).send({embeds: [embed]});

  },
};
