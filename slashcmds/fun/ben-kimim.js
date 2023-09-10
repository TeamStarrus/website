const {SlashCommandBuilder} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`ben-kimim`)
    .setDescription(`Yüzlerce hayvan içinden birisini söyler.`),
  run: async (client, interaction) => {
    var list = ["Köpek :dog:", "Kedi :cat:", "Fare :mouse:", "Hamster :hamster:", "Tavşan :rabbit:", "Tilki :fox:", "Ayı :bear:", "Panda :panda_face:", "Kutup Ayısı :polar_bear:", "Koala :koala:", "Kaplan :tiger:", "Aslan :lion:", "İnek :cow:", "Domuz :pig:", "Kurbağa :frog:", "Maymun :monkey:", "Tavuk :chicken:", "Penguen :penguin:", "Kuş :bird:", "Civciv :hatching_chick:", "Ördek :duck:", "Dodo Kuşu :dodo:", "Kartal :eagle:", "Baykuş :owl:", "Yarasa :bat:", "Kurt :wolf:", "Yaban Domuzu :boar:", "At :horse:", "Tek Boynuzlu At :unicorn:", "Arı :bee:", "Böcek :bug:", "Kelebek :butterfly:", "Salyangoz :snail:", "Solucan :worm:", "Uğur Böceği :lady_beetle:", "Karınca :ant:", "Sinek :fly:", "Sivrisinek :mosquito:", "Hamamböceği :cockroach:", "Böcek :bettle:", "Cırcır Böceği :cricket:", "Örümcek :spider:", "Akrep :scorpion:", "Kaplumbağa :turtle:", "Yılan :snake:", "Kertenkele :lizard:", "Tiranozor :t_rex:", "Sauropoda :sauropod:", "Ahtapot :octopus:", "Mürekkep Balığı :squid:", "Karides :shrimp:", "Istakoz :lobster:", "Yengeç :crab:", "Balon Balığı :blowfish:", "Tropikal Balık :tropical_fish:", "Balık :fish:", "Fok Balığı :seal:", "Yunus :dolphin:", "Balina :whale:", "Köpekbalığı :shark:", "Timsah :crocodile:", "Leopar :leopard:", "Zebra :zebra:", "Goril :gorilla:", "Orangutan :orangutan:", ":elephant: Fil", "Mamut :mammoth:", "Bizon :bison:", "Su Aygırı :hippopotamus:", "Gergedan :rhino:", "Tek Hörgüçlü Deve :dromedary_camel:", "Deve :camel:", "Zürafa :giraffe:", "Kanguru :kangaroo:", "Manda :water_buffalo:", "Öküz :ox:", "Yarış Atı :racehorse:", "Koç :ram:", "Koyun :sheep:", ":Lama :llama:", "Keçi :goat:", "Geyik :deer:", "Kaniş :poodle:", "Kara Kedi :black_cat:", "Horoz :rooster:", "Hindi :turkey:", "Tavuskuşu :peacock:", "Papağan :parrot:", "Kuğu :swan:", "Flamingo :flamingo:", "Güvercin :dove:", "Rakun :raccoon:", "Kokarca :skunk:", "Porsuk :badger:", "Kunduz :beaver:", "Su Samuru :otter:", "Tembel Hayvan :sloth:", "Sıçan :rat:", "Sincap :chipmunk:", "Kirpi :hedgehog:", "Ejderha :dragon:"],
    result = list[Math.floor(Math.random() * list.length)];
    if (interaction.member.id == client.config.s.ownerId) {
      await interaction.followUp({content: `Sahibim :crown:`});
    } else {
      await interaction.followUp({content: result});
    };
  },
};
