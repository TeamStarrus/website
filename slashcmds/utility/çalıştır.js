const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`çalıştır`)
    .setDescription(`Geliştirici kodlarını sınamak içindir.`)
    .addStringOption(option => option.setName(`kod`).setDescription(`Sınayabilmek için bir kod gir.`).setRequired(true)),
  run: async (client, interaction) => {
    if (interaction.member.id !== client.config.s.ownerId) return interaction.followUp({content: `${client.config.s.ticks.red} Senin bu komutu kullanmaya yetkin yok!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    const {EmbedBuilder} = require(`discord.js`), codee = interaction.options.getString(`kod`);
    try {
      let code = codee, evaled = eval(code);
      if (typeof evaled !== `string`) evaled = require(`util`).inspect(evaled, {depth: 0});
      let embed = new EmbedBuilder().setColor(`#00FFB8`).addFields({name: `» Kod`, value: `\`\`\`js\n${code}\`\`\``}, {name: `» Sonuç`, value: `\`\`\`js\n${evaled}\n\`\`\``});
      await interaction.followUp({embeds: [embed]}).then(msg => msg.react(client.config.s.ticks.green));
    } catch (err) {
      let code = codee, embed = new EmbedBuilder().setColor(`#ED4245`).addFields({name: `» Kod`, value: `\`\`\`js\n${code}\`\`\``}, {name: `» Sonuç`, value: `\`\`\`js\n${err}\n\`\`\``});
      await interaction.followUp({embeds: [embed]}).then(msg => msg.react(client.config.s.ticks.red));
    };
  },
};
