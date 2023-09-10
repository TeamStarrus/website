module.exports = {
  run: async (client, message) => {

  if (message.author.bot || !message.guild || !message.content.startsWith(client.config.s.prefix)) return;
  const args = message.content.slice(client.config.s.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  let command = client.prefixcmds.get(cmd);
  if (!command) command = client.prefixcmds.get(client.aliases.get(cmd));
  if (!command) return;

  command.run(client, message, args);

  },
};
