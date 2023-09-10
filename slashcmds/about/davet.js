const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
	data: new SlashCommandBuilder()
  .setName(`davet`)
  .setDescription(`Botun davet bağlantısını sunucuya gönderir.`),

	run: async (client, interaction) => {

  const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require(`discord.js`);

  let row = new ActionRowBuilder().addComponents(new ButtonBuilder().setStyle(ButtonStyle.Link).setLabel(`Botu davet et!`).setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&response_type=code&scope=bot+applications.commands&permissions=8`));

	await interaction.followUp({content: `${client.user.username} botunu kendi sunucunuza davet etmek istiyorsanız aşağıdaki butona tıklayabilirsiniz! Şimdiden teşekkür ederiz.`, components: [row]});

	},
};
