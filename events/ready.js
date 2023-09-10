module.exports = {
  run: async (client) => {

  client.user.setPresence({
    activities: [{
      name: `@${client.user.username} • /yardım • /destek`,
      type: `WATCHING` // competing, listening, playing, streaming, watching
    }],
    status: `online` // dnd, idle, invisible, online
  });

  console.log(`✔️ ${client.user.tag} başarıyla aktif edildi!`);

  },
};
