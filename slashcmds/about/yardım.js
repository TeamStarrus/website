const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
	data: new SlashCommandBuilder()
  .setName(`yardım`)
  .setDescription(`Yardıma ihtiyacınız varsa bu komutu kullanın.`),

	run: async (client, interaction) => {

  const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require(`discord.js`);

  let row = new ActionRowBuilder()
  .addComponents(
    new ButtonBuilder()
    .setStyle(ButtonStyle.Link)
    .setLabel(`Destek sunucusuna katıl!`)
    .setURL(`https://discord.com/invite/${client.settings.config.server}`)
  );

	await interaction.followUp({content: `${client.user.username} ile ilgili bir sorunuz veya sorununuz varsa, komutlarda bir hata bulduysanız ya da bize bir öneride bulunmak istiyorsanız aşağıdaki butonu kullanarak destek sunucumuza katılabilirsiniz.`, components: [row]});

	},
};
