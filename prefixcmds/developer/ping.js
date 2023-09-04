module.exports = {
	run: async (client, message) => {

  if (message.author.id !== client.settings.config.ownerId) return;

	await message.reply({content: `:ping_pong: Bot Gecikmesi: ${client.ws.ping} ms\n:speech_balloon: Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms`, allowedMentions: {repliedUser: false}});

	},
};
