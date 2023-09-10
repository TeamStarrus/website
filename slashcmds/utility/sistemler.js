const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`sistemler`)
    .setDescription(`Sunucunuzda ayarlamalı sistemleri ayarlayın.`)
    .addSubcommand(subcommand => subcommand.setName(`büyük-harf-engel`).setDescription(`Sunucunuzda Büyük-Harf-Engel sistemini ayarlayın.`).addStringOption(option => option.setName(`seç`).setDescription(`Sunucunuzda Büyük-Harf-Engel sistemini açın veya kapatın.`).setRequired(true).addChoices({name: `Aç`, value: `Aç`}, {name: `Kapat`, value: `Kapat`})))
    .addSubcommand(subcommand => subcommand.setName(`cu-31`).setDescription(`Sunucunuzda CU-31 sistemini ayarlayın.`).addStringOption(option => option.setName(`seç`).setDescription(`Sunucunuzda CU-31 sistemini açın veya kapatın.`).setRequired(true).addChoices({name: `Aç`, value: `Aç`}, {name: `Kapat`, value: `Kapat`})))
    .addSubcommand(subcommand => subcommand.setName(`ğ-vb-engel`).setDescription(`Sunucunuzda Ğ-vb-Engel sistemini ayarlayın.`).addStringOption(option => option.setName(`seç`).setDescription(`Sunucunuzda Ğ-vb-Engel sistemini açın veya kapatın.`).setRequired(true).addChoices({name: `Aç`, value: `Aç`}, {name: `Kapat`, value: `Kapat`})))
    .addSubcommand(subcommand => subcommand.setName(`küfür-engel`).setDescription(`Sunucunuzda Küfür-Engel sistemini ayarlayın.`).addStringOption(option => option.setName(`seç`).setDescription(`Sunucunuzda Küfür-Engel sistemini açın veya kapatın.`).setRequired(true).addChoices({name: `Aç`, value: `Aç`}, {name: `Kapat`, value: `Kapat`})))
    .addSubcommand(subcommand => subcommand.setName(`reklam-koruma`).setDescription(`Sunucunuzda Reklam-Koruma sistemini ayarlayın.`).addStringOption(option => option.setName(`seç`).setDescription(`Sunucunuzda Reklam-Koruma sistemini açın veya kapatın.`).setRequired(true).addChoices({name: `Aç`, value: `Aç`}, {name: `Kapat`, value: `Kapat`})))
    .addSubcommand(subcommand => subcommand.setName(`selamlama`).setDescription(`Sunucunuzda Selamlama sistemini ayarlayın.`).addStringOption(option => option.setName(`seç`).setDescription(`Sunucunuzda Selamlama sistemini açın veya kapatın.`).setRequired(true).addChoices({name: `Aç`, value: `Aç`}, {name: `Kapat`, value: `Kapat`}))),
  run: async (client, interaction) => {
  	if (!interaction.member.permissions.has(`MANAGE_GUILD`)) return interaction.followUp({content: `${client.config.s.ticks.red} Bu komutu kullanabilmek için \`Sunucuyu Yönet\` iznine sahip olmalısın!`, ephemeral: true}).then(sent => {setTimeout(function() {sent.delete()}, 5000)}).catch(err => {});
    const db = require(`quick.db`);
    if (interaction.options.getSubcommand() == `büyük-harf-engel`) {
      if (interaction.options.getString(`seç`) == `Aç`) {
        await db.set(`buyukharfengel_${interaction.guild.id}`, `açık`);
        return interaction.followUp({content: `${client.config.s.ticks.green} Büyük-Harf-Engel sistemi başarıyla açıldı!`});
      };
      if (interaction.options.getString(`seç`) == `Kapat`) {
        await db.set(`buyukharfengel_${interaction.guild.id}`, `kapalı`);
        return interaction.followUp({content: `${client.config.s.ticks.green} Büyük-Harf-Engel sistemi başarıyla kapatıldı!`});
      };
    };
    if (interaction.options.getSubcommand() == `cu-31`) {
      if (interaction.options.getString(`seç`) == `Aç`) {
        await db.set(`cu31_${interaction.guild.id}`, `açık`);
        return interaction.followUp({content: `${client.config.s.ticks.green} CU-31 sistemi başarıyla açıldı!`});
      };
      if (interaction.options.getString(`seç`) == `Kapat`) {
        await db.set(`cu31_${interaction.guild.id}`, `kapalı`);
        return interaction.followUp({content: `${client.config.s.ticks.green} CU-31 sistemi başarıyla kapatıldı!`});
      };
    };
    if (interaction.options.getSubcommand() == `ğ-vb-engel`) {
      if (interaction.options.getString(`seç`) == `Aç`) {
        await db.set(`gvbengel_${interaction.guild.id}`, `açık`);
        return interaction.followUp({content: `${client.config.s.ticks.green} Ğ-vb-Engel sistemi başarıyla açıldı!`});
      };
      if (interaction.options.getString(`seç`) == `Kapat`) {
        await db.set(`gvbengel_${interaction.guild.id}`, `kapalı`);
        return interaction.followUp({content: `${client.config.s.ticks.green} Ğ-vb-Engel sistemi başarıyla kapatıldı!`});
      };
    };
    if (interaction.options.getSubcommand() == `küfür-engel`) {
      if (interaction.options.getString(`seç`) == `Aç`) {
        await db.set(`kufurengel_${interaction.guild.id}`, `açık`);
        return interaction.followUp({content: `${client.config.s.ticks.green} Küfür-Engel sistemi başarıyla açıldı!`});
      };
      if (interaction.options.getString(`seç`) == `Kapat`) {
        await db.set(`kufurengel_${interaction.guild.id}`, `kapalı`);
        return interaction.followUp({content: `${client.config.s.ticks.green} Küfür-Engel sistemi başarıyla kapatıldı!`});
      };
    };
    if (interaction.options.getSubcommand() == `reklam-koruma`) {
      if (interaction.options.getString(`seç`) == `Aç`) {
        await db.set(`reklamkoruma_${interaction.guild.id}`, `açık`);
        return interaction.followUp({content: `${client.config.s.ticks.green} Reklam-Koruma sistemi başarıyla açıldı!`});
      };
      if (interaction.options.getString(`seç`) == `Kapat`) {
        await db.set(`reklamkoruma_${interaction.guild.id}`, `kapalı`);
        return interaction.followUp({content: `${client.config.s.ticks.green} Reklam-Koruma sistemi başarıyla kapatıldı!`});
      };
    };
    if (interaction.options.getSubcommand() == `selamlama`) {
      if (interaction.options.getString(`seç`) == `Aç`) {
        await db.set(`selamlama_${interaction.guild.id}`, `açık`);
        return interaction.followUp({content: `${client.config.s.ticks.green} Selamlama sistemi başarıyla açıldı!`});
      };
      if (interaction.options.getString(`seç`) == `Kapat`) {
        await db.set(`selamlama_${interaction.guild.id}`, `kapalı`);
        return interaction.followUp({content: `${client.config.s.ticks.green} Selamlama sistemi başarıyla kapatıldı!`});
      };
    };
  },
};
