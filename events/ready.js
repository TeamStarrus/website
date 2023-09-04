module.exports = {
  run: async (client) => {

  client.user.setPresence({
    activities: [{
      name: `@${client.user.username} • /yardım • /destek`,
      type: `WATCHING`
    }],
    status: `online`
  });

  console.log(`✔️ ${client.user.tag} başarıyla aktif edildi!`);

  },
};

// status: dnd - idle - invisible - online
// activities: competing - listening - playing - streaming - watching
