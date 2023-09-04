const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
	data: new SlashCommandBuilder()
  .setName(`oy`)
  .setDescription(`Botumuza oy verebileceğiniz bağlantıyı gönderir.`),

	run: async (client, interaction) => {

  const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require(`discord.js`);

  let row = new ActionRowBuilder()
  .addComponents(
    new ButtonBuilder()
    .setStyle(ButtonStyle.Link)
    .setLabel(`Top.gg üzerinden oy ver!`)
    .setURL(`https://top.gg/bot/${client.user.id}/vote`)
  );

	await interaction.followUp({content: `${client.user.username} botuna Top.gg üzerinden oy vermek istiyorsanız aşağıdaki butona tıklayabilirsiniz! Şimdiden teşekkür ederiz.`, components: [row]});

	},
};
