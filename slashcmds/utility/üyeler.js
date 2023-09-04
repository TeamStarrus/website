const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`üyeler`)
  .setDescription(`Sunucuda kaç üye bulunduğunu söyler.`),

  run: async (client, interaction) => {

	if (!interaction.member.permissions.has(`MANAGE_GUILD`)) return interaction.followUp({content: `${client.settings.config.emotes.redTick} Bu komutu kullanabilmek için \`Sunucuyu Yönet\` iznine sahip olmalısın!`, ephemeral: true});

  await interaction.followUp({content: `:busts_in_silhouette: Bu sunucuda **${interaction.guild.memberCount}** üye bulunuyor.`});

  },
};
