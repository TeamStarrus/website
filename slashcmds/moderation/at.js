const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`at`)
    .setDescription(`Belirtilen üyeyi sunucudan atar.`)
    .addUserOption(option => option.setName(`üye`).setDescription(`Atmak istediğin üyeyi seç.`).setRequired(true))
    .addStringOption(option => option.setName(`sebep`).setDescription(`Üyeyi atma sebebini yaz.`).setRequired(false)),
  run: async (client, interaction) => {
    if (!interaction.member.permissions.has(`KICK_MEMBERS`)) return interaction.followUp({content: `${client.config.s.ticks.red} Bu komutu kullanabilmek için \`Üyeleri At\` iznine sahip olmalısın!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    const user = interaction.options.getUser(`üye`), member = interaction.guild.members.cache.get(user.id) || await interaction.guild.members.fetch(user.id).catch(err => {});
    if (!member) return interaction.followUp({content: `${client.config.s.ticks.red} Sunucuda böyle bir üye bulunamadı.`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    if (!member.kickable || member.user.id == client.user.id || interaction.member.roles.highest.position <= member.roles.highest.position) return interaction.followUp({content: `${client.config.s.ticks.red} Bu üyeyi sunucudan atamıyorum.`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    const reason = interaction.options.getString(`sebep`);
    if (reason) {
      await interaction.followUp({content: `${client.config.s.ticks.green} ${member.user.tag} adlı kullanıcı \`${reason}\` sebebiyle sunucudan atıldı!`}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
      await member.user.send({content: `**\`${interaction.guild.name}\`** sunucusundan \`${reason}\` sebebiyle atıldın!`}).catch(err => {});
      await member.kick(reason).catch(err => {});
    } else {
      await interaction.followUp({content: `${client.config.s.ticks.green} ${member.user.tag} adlı kullanıcı sunucudan atıldı! Sebep belirtilmedi.`}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
      await member.user.send({content: `**\`${interaction.guild.name}\`** sunucusundan atıldın! Sebep belirtilmedi.`}).catch(err => {});
      await member.kick().catch(err => {});
    };
  },
};
