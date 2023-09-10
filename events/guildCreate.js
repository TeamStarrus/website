module.exports = {
  run: async (client, guild) => {
    const log = client.channels.cache.get(client.config.s.logChannel), {ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} = require(`discord.js`), description = guild.description || `Bilinmiyor/Bulunamadı`;
    var VerificationLevel = guild.verificationLevel, verificationLevel = (VerificationLevel == `NONE` ? (`Yok`) : (VerificationLevel == `LOW` ? (`Düşük`) : (VerificationLevel == `MEDIUM` ? (`Orta`) : (VerificationLevel == `HIGH` ? (`Yüksek`) : (VerificationLevel == `VERY_HIGH` ? (`Çok Yüksek`) : (`Bilinmiyor/Bulunamadı`))))));
    let embed = new EmbedBuilder().setColor(`#00FFB8`).setTitle(`BİR SUNUCUYA EKLENDİM`).setThumbnail(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`).setDescription(`**Sunucu Adı:** ${guild.name}\n**Sunucu ID'si:** ${guild.id}\n\n**Sunucu Sahibi:** ${(await guild.fetchOwner()).user.tag}\n**Sunucu Sahibinin ID'si:** ${guild.ownerId}\n**Sunucu Sahibinin Profili:** <@!${guild.ownerId}>\n\n**Sunucudaki Üye Sayısı:** ${guild.members.cache.size}\n**Sunucudaki Rol Sayısı:** ${guild.roles.cache.size}\n**Sunucudaki Kanal Sayısı:** ${guild.channels.cache.size}\n**Sunucudaki Emoji Sayısı:** ${guild.emojis.cache.size}\n**Sunucudaki Çıkartma Sayısı:** ${guild.stickers.cache.size}\n\n**Doğrulama Seviyesi:** ${verificationLevel}\n**Oluşturulma Tarihi:**\n<t:${Date.parse(guild.createdAt) / 1000}:F> (<t:${Date.parse(guild.createdAt) / 1000}:R>)\n\n**Sunucu Açıklaması:** ${description}\n\n**Şu Anki Toplam Üye Sayısı:** ${client.guilds.cache.reduce((x, y) => x + y.memberCount, 0).toLocaleString()}\n**Şu Anki Toplam Kanal Sayısı:** ${client.channels.cache.size.toLocaleString()}\n**Şu Anki Toplam Sunucu Sayısı:** ${client.guilds.cache.size.toLocaleString()}`), row = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId(`leave`).setLabel(`Sunucudan Sessizce Ayrıl`).setStyle(ButtonStyle.Danger));
    const filter = i => i.customId == `leave` && i.user.id == client.config.s.ownerId, collector = log.createMessageComponentCollector({filter});
    collector.on(`collect`, async i => {
	    if (i.customId == `leave`) {
        let row = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId(`leave`).setLabel(`Sunucudan Sessizce Ayrıl`).setStyle(ButtonStyle.Danger).setDisabled(true));
        await i.update({content: `<@!${client.config.s.ownerId}> kullanıcısının isteği üzerine bu sunucudan ayrıldım!`, components: [row], allowedMentions: {repliedUser: false}});
        await client.guilds.cache.get(guild.id).leave();
	    };
    });
    collector.on(`end`, i => console.log(`✔️ ${guild.id} ID'li sunucudan başarıyla ayrıldım!`));
    log.send({embeds: [embed], components: [row]});
  },
};
