module.exports = {
  run: async (client, message, args) => {

  if (message.author.id !== client.settings.config.owner) return;
  const {EmbedBuilder} = require(`discord.js`);

  try {
    let code = args.join(` `);
    let evaled = eval(code);

    if (code.length < 1) return message.react(`❔`);

    if (typeof evaled !== `string`)
    evaled = require(`util`).inspect(evaled, {depth: 0});

    let embed = new EmbedBuilder()
    .setColor(`#00FFB8`)
  	.addFields(
		  {name: `» Kod`, value: `\`\`\`js\n${code}\`\`\``},
		  {name: `» Sonuç`, value: `\`\`\`js\n${evaled}\n\`\`\``}
	  );

    await message.reply({embeds: [embed], allowedMentions: {repliedUser: false}}).then(msg => msg.react(client.settings.config.emotes.greenTick));

  } catch (err) {
    let code = args.join(` `);

    let embed = new EmbedBuilder()
    .setColor(`#ED4245`)
  	.addFields(
		  {name: `» Kod`, value: `\`\`\`js\n${code}\`\`\``},
		  {name: `» Sonuç`, value: `\`\`\`js\n${err}\n\`\`\``}
	  );

    await message.reply({embeds: [embed], allowedMentions: {repliedUser: false}}).then(msg => msg.react(client.settings.config.emotes.redTick));
  };

  },
};
