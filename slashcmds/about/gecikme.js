const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
	data: new SlashCommandBuilder()
  .setName(`gecikme`)
  .setDescription(`Botun ms cinsinden gecikme süresini söyler.`),

	run: async (client, interaction) => {

	await interaction.followUp({content: `:ping_pong: Bot Gecikmesi: ${client.ws.ping} ms\n:speech_balloon: Mesaj Gecikmesi: ${new Date().getTime() - interaction.createdTimestamp} ms`});

	},
};
