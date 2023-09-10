module.exports = {
  run: async (client, message, args) => {

  if (message.author.id !== client.config.s.ownerId) return;
  const {EmbedBuilder} = require(`discord.js`);

  try {
    let code = args.join(` `), evaled = eval(code);

    if (code.length < 1) return message.react(`❔`);
    if (typeof evaled !== `string`) evaled = require(`util`).inspect(evaled, {depth: 0});

    let embed = new EmbedBuilder().setColor(`#00FFB8`).addFields(
		  {name: `» Kod`, value: `\`\`\`js\n${code}\`\`\``},
		  {name: `» Sonuç`, value: `\`\`\`js\n${evaled}\n\`\`\``}
    );

    await message.reply({embeds: [embed], allowedMentions: {repliedUser: false}}).then(msg => msg.react(client.config.s.ticks.green));

  } catch (err) {
    let code = args.join(` `);

    let embed = new EmbedBuilder().setColor(`#ED4245`).addFields(
		  {name: `» Kod`, value: `\`\`\`js\n${code}\`\`\``},
		  {name: `» Sonuç`, value: `\`\`\`js\n${err}\n\`\`\``}
	  );

    await message.reply({embeds: [embed], allowedMentions: {repliedUser: false}}).then(msg => msg.react(client.config.s.ticks.red));
  };

  },
};
