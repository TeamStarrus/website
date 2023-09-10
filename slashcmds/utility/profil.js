const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`profil`)
    .setDescription(`Bir üyenin veya sunucunun detaylı bilgisini gönderir.`)
    .addSubcommand(subcommand => subcommand.setName(`üye`).setDescription(`Sizin veya seçtiğiniz üyenin detaylı bilgisini gönderir.`).addUserOption(option => option.setName(`üye`).setDescription(`Detaylı bilgisini görmek istediğiniz üyeyi seçin.`).setRequired(false)))
    .addSubcommand(subcommand => subcommand.setName(`sunucu`).setDescription(`Bulunduğunuz sunucunun detaylı bilgisini gönderir.`)),
  run: async (client, interaction) => {
    if (interaction.options.getSubcommand() == `üye`) {
      const {EmbedBuilder} = require(`discord.js`), member = interaction.options.getMember(`üye`) || interaction.member;
      let isThisBot = member.user.bot; if (isThisBot) {isThisBot = `Evet.`} else {isThisBot = `Hayır.`}; const nickname = member.nickname || `Yok.`;
      let embed = new EmbedBuilder().setColor(`#00FFB8`).setTitle(`${member.user.username}`).setThumbnail(`https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png`).setDescription(`**Kullanıcı Adı:** ${member.user.username}\n**Kullanıcı Etiketi:** ${member.user.tag}\n**Kullanıcı ID'si:** ${member.user.id}\n**Kullanıcı Profili:** <@!${member.user.id}>\n\n**Bu Kullanıcı Bot Mu?** ${isThisBot}\n**Sunucudaki Kullanıcı Adı:** ${nickname}\n\n**Oluşturulma Tarihi:**\n<t:${Date.parse(member.user.createdAt) / 1000}:F> (<t:${Date.parse(member.user.createdAt) / 1000}:R>)\n\n**Sunucuya Katılma Tarihi:**\n<t:${Date.parse(member.joinedAt) / 1000}:F> (<t:${Date.parse(member.joinedAt) / 1000}:R>)\n\n**Sunucudaki En Yüksek Dereceli Rolü:**\n<@&${member.roles.highest.id}>\n\n:star2: Bu üyenin afişine ulaşmak istiyorsanız **/afiş üye** komutunu, avatarına ulaşmak istiyorsanız **/avatar üye** komutunu kullanabilirsiniz.`);
      await interaction.followUp({embeds: [embed]});
    };
    if (interaction.options.getSubcommand() == `sunucu`) {
      const {EmbedBuilder} = require(`discord.js`), guild = interaction.guild;
      var VerificationLevel = guild.verificationLevel, verificationLevel = (VerificationLevel == `NONE` ? (`Yok\nYasaklanmamış.`) : (VerificationLevel == `LOW` ? (`Düşük\nDiscord hesapları e-posta ile doğrulanmalıdır.`) : (VerificationLevel == `MEDIUM` ? (`Orta\nDiscord'da 5 dakikadan daha uzun süre kayıtlı olmalı.`) : (VerificationLevel == `HIGH` ? (`Yüksek\nBu sunucuda 10 dakikadan daha uzun süredir üyeliği bulunmalı.`) : (VerificationLevel == `VERY_HIGH` ? (`Çok Yüksek\nDiscord hesabında doğrulanmış bir telefonu bulunmalı.`) : (`Bilinmiyor/Bulunamadı`)))))); const afkChannel = guild.afkChannel || `Yok.`, afkTimeout = guild.afkTimeout || `Yok.`, systemChannel = guild.systemChannel || `Yok.`, rulesChannel = guild.rulesChannel || `Yok.`, description = guild.description || `Yok.`;
      let embed = new EmbedBuilder().setColor(`#00FFB8`).setTitle(`${guild.name}`).setThumbnail(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`).setDescription(`**Sunucu Adı:** ${guild.name}\n**Sunucu ID'si:** ${guild.id}\n\n**Sunucu Sahibi:** ${(await guild.fetchOwner()).user.tag}\n**Sunucu Sahibinin ID'si:** ${guild.ownerId}\n**Sunucu Sahibinin Profili:** <@!${guild.ownerId}>\n\n**Sunucudaki Üye Sayısı:** ${guild.members.cache.size}\n**Sunucudaki Rol Sayısı:** ${guild.roles.cache.size}\n**Sunucudaki Kanal Sayısı:** ${guild.channels.cache.size}\n**Sunucudaki Emoji Sayısı:** ${guild.emojis.cache.size}\n**Sunucudaki Çıkartma Sayısı:** ${guild.stickers.cache.size}\n\n**Sunucunun AFK Kanalı:** ${afkChannel}\n**Sunucunun AFK Zaman Aşımı:** ${afkTimeout} saniye\n\n**Sistem Mesajları Kanalı:** ${systemChannel}\n\n**Doğrulama Seviyesi:** ${verificationLevel}\n\n**Oluşturulma Tarihi:**\n<t:${Date.parse(guild.createdAt) / 1000}:F> (<t:${Date.parse(guild.createdAt) / 1000}:R>)\n\n**__Topluluk Sunucularına Özgü Özellikler__**\n\n**Sunucunun Kurallar Kanalı:** ${rulesChannel}\n**Sunucu Açıklaması:** ${description}\n\n:star2: Bu sunucunun afişine ulaşmak istiyorsanız **/afiş sunucu** komutunu, avatarına ulaşmak istiyorsanız **/avatar sunucu** komutunu kullanabilirsiniz.`);
      await interaction.followUp({embeds: [embed]});
    };
  },
};
