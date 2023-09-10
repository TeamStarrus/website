// Kullanıcı Girişi
const {Client, Collection} = require(`discord.js`), client = new Client({intents: 32767}), {s} = require(`./config.json`); client.config = {s}; client.login(client.config.s.token);

// Komut İşleyicisi
client.aliases = new Collection(); client.slashcmds = new Collection(); client.prefixcmds = new Collection(); for (let handler of [`event`, `prefixcmd`, `slashcmd`]) require(`./handlers/${handler}`)(client); const token = client.config.s.token, clientId = client.config.s.clientId, {REST} = require(`@discordjs/rest`), {Routes} = require(`discord-api-types/v10`), rest = new REST({version: `10`}).setToken(token), fs = require(`fs`), commands = [], commandFiles = fs.readdirSync(`./slashcmds`).map(folder => fs.readdirSync(`./slashcmds/${folder}`).filter(file => file.endsWith(`.js`)).map(file => `./slashcmds/${folder}/${file}`)).flat(); for (const file of commandFiles) {const command = require(`${file}`); if (Object.keys(command).length == 0) continue; commands.push(command.data.toJSON()); client.slashcmds.set(command.data.name, command)}; (async () => {try {console.log(`[/] Eğik çizgi komutları yeniden başlatılıyor.`); await rest.put(Routes.applicationCommands(clientId), {body: commands}); console.log(`[/] Eğik çizgi komutları yeniden başlatıldı.`)} catch (err) {console.log(err)}})();

// Bottan Bahsedilince Gönderilecek Mesaj
client.on(`messageCreate`, async message => {
  if (message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
    const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require(`discord.js`);
    let row = new ActionRowBuilder()
    .addComponents(new ButtonBuilder()
      .setStyle(ButtonStyle.Link)
      .setLabel(`Destek sunucusuna katıl!`)
      .setURL(`https://discord.gg/${client.config.s.guildInvite}`)
    );
    message.reply({content: `${client.user.username} mesaj komutları yerine uygulama komutlarını kullanmaktadır. Komutlara **/** yazarak ulaşabilirsiniz. Eğer komutları göremiyorsanız destek sunucumuza katılarak yardım isteyebilirsiniz.`, components: [row], allowedMentions: {repliedUser: false}});
  };
});

// Sistemler (slashcmds/utility/ayarlar.js) (slashcmds/utility/sistemler.js)

// Büyük Harf ile Yazılmış Mesajları Engelleme Sistemi
client.on(`messageCreate`, async (message, member, guild) => {
  if (!message.guild) return;
  const db = require(`quick.db`), i = await db.get(`buyukharfengel_${guild.id}`); if (i == `açık`) {
    if (message.content.length > 6) {
      let caps = message.content.toUpperCase();
      if (message.content == caps) {
        if (!message.member.permissions.has(`MANAGE_GUILD`)) {
          if (!message.mentions.users.first()) {
            message.delete({timeout: 100});
            message.channel.send(`Hey, ${message.author}! Daha sakin konuş!`)
            .then(sent => {setTimeout(function() {sent.delete()}, 3000)}).catch(err => {});
          };
        };
      };
    };
  };
});

// CU-31 Sistemi (sadece eğlence amaçlı)
client.on(`messageCreate`, async (message, member, guild) => {
  if (!message.guild) return;
  const db = require(`quick.db`), i = await db.get(`cu31_${guild.id}`); if (i == `açık`) {
    if (message.content == `cu` || message.content == `cU` || message.content == `Cu` || message.content == `CU` || message.content == `31`) {
      var emojis = [`😀`, `😁`, `😂`, `🤣`, `😃`, `😄`, `😅`, `😆`, `😉`, `😊`, `😋`, `😎`, `😍`, `😘`, `🥰`, `😗`, `😙`, `😚`, `☺`, `🙂`, `🤗`, `🤩`, `🤔`, `🤨`, `😐`, `😑`, `😶`, `🙄`, `😏`, `😣`, `😥`, `😮`, `🤐`, `😯`, `😪`, `😫`, `🥱`, `😴`, `😌`, `😛`, `😜`, `😝`, `🤤`, `😒`, `😓`, `😔`, `😕`, `🙃`, `🤑`, `😲`, `☹`, `🙁`, `😖`, `😞`, `😟`, `😤`, `😢`, `😭`, `😧`, `😧`, `😨`, `😩`, `🤯`, `😬`, `😰`, `😱`, `🥵`, `🥶`, `😳`, `🤪`, `😵`, `🥴`, `😠`, `😡`, `🤬`, `😷`, `🤒`, `🤕`, `🤢`, `🤮`, `🤧`, `😇`, `🥳`, `🥺`, `🤠`, `🤡`, `🤥`, `🤫`, `🤭`, `🧐`, `🤓`, `😈`, `👿`],
      emoji = emojis[Math.floor(Math.random() * emojis.length)];
      return message.react(emoji).catch(err => {});
    };
  };
});

// Ğ vb. Komik Olmayan Sözcükleri Engelleme Sistemi
client.on(`messageCreate`, async (message, member, guild) => {
  if (!message.guild) return;
  const db = require(`quick.db`), i = await db.get(`gvbengel_${guild.id}`); if (i == `açık`) {
    const list = [`napim`, `napım`, `Napim`, `Napım`, `napm`, `Napm`, `npim`, `Npim`, `npım`, `Npım`, `NAPİM`, `NAPIM`, `NAPM`, `NPİM`, `NPIM`, `bane`, `Bane`, `bena`, `Bena`, `BANE`, `BENA`, `Ğ`, `ğ`];
    if (list.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.permissions.has(`MANAGE_GUILD`)) {
        message.delete({timeout: 100});
        message.channel.send(`Hey, ${message.author}! Bu komik değil!`)
        .then(sent => {setTimeout(function () {sent.delete()}, 3000)}).catch(err => {});
      };
    };
  };
});

// Kötü Söz veya Küfür Engelleme Sistemi
client.on(`messageCreate`, async (message, member, guild) => {
  if (!message.guild) return;
  const db = require(`quick.db`), i = await db.get(`kufurengel_${guild.id}`); if (i == `açık`) {
    const list = [``]; // Sistem henüz tamamlanmadı.
    if (list.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.permissions.has(`MANAGE_GUILD`)) {
        message.delete({timeout: 100});
        message.channel.send(`Hey, ${message.author}! Daha sakin konuş!`)
        .then(sent => {setTimeout(function () {sent.delete()}, 3000)}).catch(err => {});
      };
    };
  };
});

// Sunucuyu Reklamlardan Koruma Sistemi
client.on(`messageCreate`, async (message, member, guild) => {
  if (!message.guild) return;
  const db = require(`quick.db`), i = await db.get(`reklamkoruma_${guild.id}`); if (i == `açık`) {
    let uyarisayisi = await db.get(`reklamuyari_${message.author.id}`), member = message.member;
    const ads = [`discord.gg`,`discord.com/invite`,`discord.gift`,`discord.com/gifts`,`discord.com/billing/promotions`];
    if (ads.some(word => message.content.toLowerCase().includes(word))) {
      if (!member.permissions.has(`MANAGE_GUILD`)) {
        message.delete({timeout: 100});
        db.add(`reklamuyari_${message.author.id}`, 1);
        if (uyarisayisi == null) {
          message.delete({timeout: 100});
          message.channel.send(`${message.author} Reklam yapmaya devam edersen sunucudan atılacaksın. (1/3)`)
          .then(sent => {setTimeout(function () {sent.delete()}, 3000)}).catch(err => {});
        };
        if (uyarisayisi == 1) {
          message.delete({timeout: 100});
          message.channel.send(`${message.author} Reklam yapmaya devam edersen sunucudan atılacaksın. (2/3)`)
          .then(sent => {setTimeout(function () {sent.delete()}, 3000)}).catch(err => {});
        };
        if (uyarisayisi == 2) {
          message.delete({timeout: 100});
          await message.channel.send(`${message.author.tag} adlı üye 3 reklam uyarısı aldığı için sunucudan atıldı!`)
          .then(sent => {setTimeout(function () {sent.delete()}, 3000)}).catch(err => {});
          member.kick({reason: `Sunucu içerisinde 3 kere reklam paylaştı.`});
        };
        if (uyarisayisi == 3) {
          message.delete({timeout: 100});
          await message.channel.send(`${message.author.tag} adlı üye reklam yapmaya devam ettiği için sunucudan engellendi!`)
          .then(sent => {setTimeout(function () {sent.delete()}, 3000)}).catch(err => {});
          db.delete(`reklamuyari_${message.author.id}`);
          member.ban({reason: `Sunucudan atıldıktan sonra reklam yapmaya devam etti.`});
        };
      };
    };
  };
});

// Selamlama (SA-AS) Sistemi
client.on(`messageCreate`, async (message, member, guild) => {
  if (!message.guild) return;
  const db = require(`quick.db`), i = await db.get(`selamlama_${guild.id}`); if (i == `açık`) {
    if (message.content == `sa` || message.content == `sA` || message.content == `Sa` || message.content == `SA` || message.content == `selam` || message.content == `Selam` || message.content == `selamünaleyküm` || message.content == `Selamünaleyküm` || message.content == `selamunaleyküm` || message.content == `Selamunaleyküm` || message.content == `selamunaleykum` || message.content == `Selamunaleykum` || message.content == `selamün aleyküm` || message.content == `Selamün aleyküm` || message.content == `selamun aleyküm` || message.content == `Selamun aleyküm` || message.content == `selamun aleykum` || message.content == `Selamun aleykum`)
    return message.reply({content: `Aleykümselam ${message.author}, hoş geldin! Nasılsın?`, allowedMentions: {repliedUser: false}});
  };
});
