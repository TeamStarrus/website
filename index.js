const {Client, Collection} = require(`discord.js`),
client = new Client({intents: 32767});
client.login(client.settings.config.token);

client.aliases = new Collection();
client.slashcmds = new Collection();
client.prefixcmds = new Collection();

const {config} = require(`./settings.json`); client.settings = {config};

for (let handler of [`event`, `prefixcmd`, `slashcmd`]) require(`./handlers/${handler}`)(client);

const fs = require(`fs`),
token = client.settings.config.token,
clientId = client.settings.config.clientId,
{REST} = require(`@discordjs/rest`),
{Routes} = require(`discord-api-types/v10`),
rest = new REST({version: `10`}).setToken(token),
commands = [], commandFiles = fs.readdirSync(`./slashcmds`).map(folder => fs.readdirSync(`./slashcmds/${folder}`).filter(file => file.endsWith(`.js`)).map(file => `./slashcmds/${folder}/${file}`)).flat();


for (const file of commandFiles) {
  const command = require(`${file}`);
  if (Object.keys(command).length == 0) continue;
  commands.push(command.data.toJSON());
  client.slashcmds.set(command.data.name, command);
};

(async () => {
  try {
    console.log(`[/] Eğik çizgi komutları yeniden başlatılıyor.`);
    await rest.put(Routes.applicationCommands(clientId), {body: commands});
    console.log(`[/] Eğik çizgi komutları yeniden başlatıldı.`);
  } catch (err) {
    console.log(err);
  };
})();

// BOTTAN BAHSEDİLİNCE
client.on(`messageCreate`, async message => {
  if (message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
    const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require(`discord.js`);
    let row = new ActionRowBuilder()
    .addComponents(new ButtonBuilder()
      .setStyle(ButtonStyle.Link)
      .setLabel(`Destek sunucusuna katıl!`)
      .setURL(`https://discord.com/invite/${client.settings.config.server}`)
    );
    message.reply({content: `${client.user.username} mesaj komutları yerine uygulama komutlarını kullanmaktadır. Komutlara / yazarak ulaşabilirsiniz. Eğer komutları göremiyorsanız aşağıdaki butondan destek sunucumuza katılarak yardım isteyebilirsiniz.`, components: [row], allowedMentions: {repliedUser: false}});
  };
});

// SİSTEMLER (slashcmds/utility/ayarlar.js) (slashcmds/utility/sistemler.js)

// Büyük-Harf-Engel Sistemi
client.on(`messageCreate`, async (message, member, guild) => {
  if (!message.guild) return;
  const db = require(`quick.db`), i = await db.get(`buyukharfengel_${guild.id}`); if (i == `açık`) {
    if (message.content.length > 6) {
      let caps = message.content.toUpperCase();
      if (message.content == caps) {
        if (!message.member.permissions.has(`MANAGE_GUILD`)) {
          if (!message.mentions.users.first()) {
            message.delete({timeout: 100});
            message.channel.send(`${message.author} Bu sunucuda büyük harf kullanamazsın!`)
            .then(sent => {setTimeout(function () {sent.delete()}, 3000)}).catch(err => {});
          };
        };
      };
    };
  };
});

// CU-31 Sistemi
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

// Ğ-vb-Engel Sistemi
client.on(`messageCreate`, async (message, member, guild) => {
  if (!message.guild) return;
  const db = require(`quick.db`), i = await db.get(`gvbengel_${guild.id}`); if (i == `açık`) {
    const list = [`napim`, `napım`, `Napim`, `Napım`, `napm`, `Napm`, `npim`, `Npim`, `npım`, `Npım`, `NAPİM`, `NAPIM`, `NAPM`, `NPİM`, `NPIM`, `bane`, `Bane`, `bena`, `Bena`, `BANE`, `BENA`, `Ğ`, `ğ`];
    if (list.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.permissions.has(`MANAGE_GUILD`)) {
        message.delete({timeout: 100});
        message.channel.send(`${message.author} Bu sunucuda böyle kelimeleri kullanamazsın!`)
        .then(sent => {setTimeout(function () {sent.delete()}, 3000)}).catch(err => {});
      };
    };
  };
});

// Küfür-Engel Sistemi
client.on(`messageCreate`, async (message, member, guild) => {
  if (!message.guild) return;
  const db = require(`quick.db`), i = await db.get(`kufurengel_${guild.id}`); if (i == `açık`) {
    const list = [`aq`, `aw`, `amk`, `am`, `amınakoyım`, `aminakoyım`, `amınakoyim`, `aminakoyim`, `amına`, `amina`, `koyım`, `koyim`, `koyayım`, `koyayim`, `çük`, `sik`, `penis`, `yarra`, `yarak`, `yarrak`, `dick`, `fuck`];
    if (list.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.permissions.has(`MANAGE_GUILD`)) {
        message.delete({timeout: 100});
        message.channel.send(`${message.author} Bu sunucuda kötü kelime kullanamazsın!`)
        .then(sent => {setTimeout(function () {sent.delete()}, 3000)}).catch(err => {});
      };
    };
  };
});

// Reklam-Koruma Sistemi
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
          member.kick({reason: `Sunucu içerisinde 3 kere Discord bağlantısı paylaşma.`});
        };
        if (uyarisayisi == 3) {
          message.delete({timeout: 100});
          await message.channel.send(`${message.author.tag} adlı üye reklam yapmaya devam ettiği için sunucudan engellendi!`)
          .then(sent => {setTimeout(function () {sent.delete()}, 3000)}).catch(err => {});
          db.delete(`reklamuyari_${message.author.id}`);
          member.ban({reason: `Sunucudan atıldıktan sonra reklam yapmaya devam etme.`});
        };
      };
    };
  };
});

// Selamlama Sistemi
client.on(`messageCreate`, async (message, member, guild) => {
  if (!message.guild) return;
  const db = require(`quick.db`), i = await db.get(`selamlama_${guild.id}`); if (i == `açık`) {
    if (message.content == `sa` || message.content == `sA` || message.content == `Sa` || message.content == `SA` || message.content == `selam` || message.content == `Selam` || message.content == `selamünaleyküm` || message.content == `Selamünaleyküm` || message.content == `selamunaleyküm` || message.content == `Selamunaleyküm` || message.content == `selamunaleykum` || message.content == `Selamunaleykum` || message.content == `selamün aleyküm` || message.content == `Selamün aleyküm` || message.content == `selamun aleyküm` || message.content == `Selamun aleyküm` || message.content == `selamun aleykum` || message.content == `Selamun aleykum`)
    return message.reply({content: `Aleykümselam ${message.author}, hoş geldin! Nasılsın?`, allowedMentions: {repliedUser: false}});
  };
});
