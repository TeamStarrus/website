const {readdirSync} = require(`fs`), ascii = require(`ascii-table`);
let table = new ascii(`Mesaj Komutları`); table.setHeading(`Mesaj Komutu`, `Durum`);

module.exports = (client) => {

  readdirSync(`./prefixcmds`).forEach(dir => {
    const commands = readdirSync(`./prefixcmds/${dir}/`).filter(file => file.endsWith(`.js`));

    for (let file of commands) {
      let pull = require(`../prefixcmds/${dir}/${file}`);

      pull.name = file.replace(`.js`, ``);
      pull.category = dir;

      client.prefixcmds.set(pull.name, pull);
      table.addRow(file, `✅`);
        
      if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    };
  });

  console.log(table.toString());

};
