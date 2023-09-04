const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`çalıştır`)
  .setDescription(`Geliştirici kodlarını sınamak içindir.`)
  .addStringOption(option => option
    .setName(`kod`)
    .setDescription(`Sınayabilmek için bir kod gir.`)
    .setRequired(true)
  ),

  run: async (client, interaction) => {

  if (interaction.member.id !== client.settings.config.ownerId) return interaction.followUp({content: `${client.settings.config.emotes.redTick} Senin bu komutu kullanmaya yetkin yok!`, ephemeral: true});

  const {EmbedBuilder} = require(`discord.js`),
  codee = interaction.options.getString(`kod`);

  try {
    let code = codee;
    let evaled = eval(code);

    if (typeof evaled !== `string`)
    evaled = require(`util`).inspect(evaled, {depth: 0});

    let embed = new EmbedBuilder()
    .setColor(`#00FFB8`)
  	.addFields(
		  {name: `» Kod`, value: `\`\`\`js\n${code}\`\`\``},
		  {name: `» Sonuç`, value: `\`\`\`js\n${evaled}\n\`\`\``}
	  );

    await interaction.followUp({embeds: [embed]}).then(msg => msg.react(client.settings.config.emotes.greenTick));

  } catch (err) {
    let code = codee;

    let embed = new EmbedBuilder()
    .setColor(`#ED4245`)
  	.addFields(
		  {name: `» Kod`, value: `\`\`\`js\n${code}\`\`\``},
		  {name: `» Sonuç`, value: `\`\`\`js\n${err}\n\`\`\``}
	  );

    await interaction.followUp({embeds: [embed]}).then(msg => msg.react(client.settings.config.emotes.redTick));
  };

  },
};
