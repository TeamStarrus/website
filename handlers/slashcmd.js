const {readdirSync} = require(`fs`), ascii = require(`ascii-table`);
let table = new ascii(`Uygulama Komutları`); table.setHeading(`Uygulama Komutu`, `Durum`);

module.exports = (client) => {

  readdirSync(`./slashcmds`).forEach(dir => {
    const commands = readdirSync(`./slashcmds/${dir}/`).filter(file => file.endsWith(`.js`));
    
    for (let file of commands) {
      let pull = require(`../slashcmds/${dir}/${file}`);

      table.addRow(file, `✅`);

      if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    };
  });

  console.log(table.toString());

};
