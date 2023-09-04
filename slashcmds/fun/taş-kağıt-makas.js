const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`taş-kağıt-makas`)
  .setDescription(`Bot ile taş-kağıt-makas oynarsınız.`)
  .addStringOption(option => option
    .setName(`hamle`)
    .setDescription(`Bota karşı yapacağın hamleyi seç.`)
    .setRequired(true)
    .addChoices(
      {name: `Taş`, value: `Taş`},
      {name: `Kağıt`, value: `Kağıt`},
      {name: `Makas`, value: `Makas`}
    )
  ),

  run: async (client, interaction) => {

  var list = [`Taş`, `Kağıt`, `Makas`],
  bot = list[Math.floor(Math.random() * list.length)],
  user = interaction.options.getString(`hamle`);

  if (user == `Taş` && bot == `Taş`) {
    await interaction.followUp({content: `Sen \`${user}\` yaptın, ben \`${bot}\` yaptım. Bu durumda **berabere!**`});
  }
  else if (user == `Taş` && bot == `Kağıt`) {
    await interaction.followUp({content: `Sen \`${user}\` yaptın, ben \`${bot}\` yaptım. Bu durumda **ben kazandım!**`});
  }
  else if (user == `Taş` && bot == `Makas`) {
    await interaction.followUp({content: `Sen \`${user}\` yaptın, ben \`${bot}\` yaptım. Bu durumda **sen kazandın!**`});
  }
  else if (user == `Kağıt` && bot == `Kağıt`) {
    await interaction.followUp({content: `Sen \`${user}\` yaptın, ben \`${bot}\` yaptım. Bu durumda **berabere!**`});
  }
  else if (user == `Kağıt` && bot == `Makas`) {
    await interaction.followUp({content: `Sen \`${user}\` yaptın, ben \`${bot}\` yaptım. Bu durumda **ben kazandım!**`});
  }
  else if (user == `Kağıt` && bot == `Taş`) {
    await interaction.followUp({content: `Sen \`${user}\` yaptın, ben \`${bot}\` yaptım. Bu durumda **sen kazandın!**`});
  }
  else if (user == `Makas` && bot == `Makas`) {
    await interaction.followUp({content: `Sen \`${user}\` yaptın, ben \`${bot}\` yaptım. Bu durumda **berabere!**`});
  }
  else if (user == `Makas` && bot == `Taş`) {
    await interaction.followUp({content: `Sen \`${user}\` yaptın, ben \`${bot}\` yaptım. Bu durumda **ben kazandım!**`});
  }
  else if (user == `Makas` && bot == `Kağıt`) {
    await interaction.followUp({content: `Sen \`${user}\` yaptın, ben \`${bot}\` yaptım. Bu durumda **sen kazandın!**`});
  }
  else {
    return;
  };

  },
};
