module.exports = {
  run: async (client, interaction) => {

  const InteractionType = require(`discord.js`);

  if (!interaction.type == InteractionType.ApplicationCommand || interaction.member.bot || !interaction.guild) return;
  await interaction.deferReply().catch(err => {});

  const {commandName} = interaction,
  command = client.slashcmds.get(commandName);

  const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require(`discord.js`);

  let row = new ActionRowBuilder().addComponents(new ButtonBuilder().setStyle(ButtonStyle.Link).setLabel(`Destek sunucusuna katıl!`).setURL(`https://discord.gg/${client.config.s.guildInvite}`));
  let errorMessage = `${client.config.s.ticks.red} Komut yürütülürken bir hata oluştu! `, errorMessage2 = `\nLütfen bu hatayı destek ekibimize bildiriniz.`;
  if (!command) return interaction.followUp({content: errorMessage + `\`(Command not found.)\`` + errorMessage2, components: [row], ephemeral: true});

  try {
    if (command) await command.run(client, interaction);
  } catch (err) {
    await console.log(err);
    return interaction.followUp({content: errorMessage + `\`(Command gave an error.)\`` + errorMessage2, components: [row], ephemeral: true})
  };

  },
};
