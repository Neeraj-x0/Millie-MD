const {
  ancient,
  arcane,
  avengers,
  balloon,
  balloon2,
  beach,
  bearlogo,
  berry,
  blackpink,
  blackpink1,
  blackpink2,
  blackpink3,
  blood,
  bokeh,
  bread,
  camerica,
  camerica2,
  chocolate,
  christmas,
  christmas2,
  christmas3,
  christmas4,
  christmas5,
  circuit,
  deepsea,
  deluxe,
  deluxe2,
  demon,
  denim,
  devil,
  diamonds,
  equalizer,
  fabric,
  fade,
  fire,
  flagamerica,
  giraffe,
  glass,
  glass2,
  glitch,
  glitch2,
  glossy,
  glue,
  golden,
  gradient,
  gradient2,
  graffiti,
  graffiti2,
  halloween,
  harrypotter,
  holograph,
  l1917,
  layered,
  leaves,
  love,
  love2,
  love3,
  luxury,
  luxury2,
  magma,
  marvel,
  marvel2,
  matrix,
  metal,
  metal2,
  metal3,
  metal4,
  metal5,
  metal6,
  metal7,
  metal8,
  metal9,
  minion,
  neon,
  neon2,
  neon3,
  neon4,
  neon5,
  neon6,
  newyear,
  orange,
  papercut,
  papercut2,
  phub,
  pottery,
  quote,
  r2,
  rainbow,
  retro,
  retro2,
  sand,
  sand2,
  sand3,
  sand4,
  scifi,
  scifi2,
  scifi3,
  skeleton,
  sketch,
  sky,
  sky2,
  sliced,
  space,
  space2,
  sparkle,
  spooky,
  spooky2,
  spooky3,
  steel,
  stone,
  stone2,
  stone3,
  stone4,
  strawberry,
  summer,
  summer2,
  thor,
  thunder,
  title,
  toxic,
  transformers,
  typography,
  underwater,
  vintage,
  watercolor,
  waterpipe,
  whitegold,
  wicker,
  window,
  winter,
} = require("@neeraj-x0/textpro");
const { serif_BI } = require("../lib");
module.exports = {
  name: "textpro",
  alias: [
    "ancient",
    "arcane",
    "avengers",
    "balloon",
    "balloon2",
    "beach",
    "bearlogo",
    "berry",
    "blackpink",
    "blackpink1",
    "blackpink2",
    "blackpink3",
    "blood",
    "bokeh",
    "bread",
    "camerica",
    "camerica2",
    "chocolate",
    "christmas",
    "christmas2",
    "christmas3",
    "christmas4",
    "christmas5",
    "circuit",
    "deepsea",
    "deluxe",
    "deluxe2",
    "demon",
    "denim",
    "devil",
    "diamonds",
    "equalizer",
    "fabric",
    "fade",
    "fire",
    "flagamerica",
    "giraffe",
    "glass",
    "glass2",
    "glitch",
    "glitch2",
    "glossy",
    "glue",
    "golden",
    "gradient",
    "gradient2",
    "graffiti",
    "graffiti2",
    "halloween",
    "harrypotter",
    "holograph",
    "l1917",
    "layered",
    "leaves",
    "love",
    "love2",
    "love3",
    "luxury",
    "luxury2",
    "magma",
    "marvel",
    "marvel2",
    "matrix",
    "metal",
    "metal2",
    "metal3",
    "metal4",
    "metal5",
    "metal6",
    "metal7",
    "metal8",
    "metal9",
    "minion",
    "neon",
    "neon2",
    "neon3",
    "neon4",
    "neon5",
    "neon6",
    "newyear",
    "orange",
    "papercut",
    "papercut2",
    "phub",
    "pottery",
    "quote",
    "r2",
    "rainbow",
    "retro",
    "retro2",
    "sand",
    "sand2",
    "sand3",
    "sand4",
    "scifi",
    "scifi2",
    "scifi3",
    "skeleton",
    "sketch",
    "sky",
    "sky2",
    "sliced",
    "space",
    "space2",
    "sparkle",
    "spooky",
    "spooky2",
    "spooky3",
    "steel",
    "stone",
    "stone2",
    "stone3",
    "stone4",
    "strawberry",
    "summer",
    "summer2",
    "thor",
    "thunder",
    "title",
    "toxic",
    "transformers",
    "typography",
    "underwater",
    "vintage",
    "watercolor",
    "waterpipe",
    "whitegold",
    "wicker",
    "window",
    "winter",
  ],
  category: "Downloader",
  desc: "Text to Photo",
  async mbb({ msg, conn }, { q, command }) {
    console.log(command);
    switch (command) {
      case "textpro": {
        let str = "Textpro Menu\n\n";
        this.alias.map((effect, num) => {
          str += `${num + 1} ${effect}\n`;
        });
        conn.sendMessage(msg.from, { text: serif_BI(str) });
      }
      case "ancient":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await ancient(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "arcane":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await arcane(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "avengers":
        {
          if (!q) return msg.reply("Enter Text");
          let [t1, t2] = q.split(",");
          if (!t1 && !t2) return msg.reply(command + " text1,text2");
          let data = await avengers(t1, t2);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "balloon":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await balloon(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "balloon2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await balloon2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "beach":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await beach(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "bearlogo":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await bearlogo(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "berry":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await berry(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "blackpink":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await blackpink(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "blackpink1":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await blackpink1(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "blackpink2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await blackpink2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "blackpink3":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await blackpink3(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "blood":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await blood(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "bokeh":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await bokeh(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "bread":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await bread(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "camerica":
        {
          if (!q) return msg.reply("Enter Text");
          let [t1, t2] = q.split(",");
          if (!t1 && !t2) return msg.reply(command + " text1,text2");
          let data = await camerica(text, text1);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "camerica2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await camerica2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "chocolate":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await chocolate(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "christmas":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await christmas(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "christmas2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await christmas2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "christmas3":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await christmas3(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "christmas4":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await christmas4(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "christmas5":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await christmas5(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "circuit":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await circuit(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "deepsea":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await deepsea(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "deluxe":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await deluxe(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "deluxe2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await deluxe2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "demon":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await demon(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "denim":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await denim(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "devil":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await devil(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "diamonds":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await diamonds(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "equalizer":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await equalizer(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "fabric":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await fabric(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "fade":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await fade(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "fire":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await fire(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "flagamerica":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await flagamerica(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "giraffe":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await giraffe(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "glass":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await glass(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "glass2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await glass2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "glitch":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await glitch(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "glitch2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await glitch2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "glossy":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await glossy(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "glue":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await glue(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "golden":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await golden(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "gradient":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await gradient(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "gradient2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await gradient2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "graffiti":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await graffiti(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "graffiti2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await graffiti2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "halloween":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await halloween(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "harrypotter":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await harrypotter(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "holograph":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await holograph(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "l1917":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await l1917(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "layered":
        {
          if (!q) return msg.reply("Enter Text");
          let [t1, t2] = q.split(",");
          if (!t1 && !t2) return msg.reply(command + " text1,text2");
          let data = await layered(t1, t2);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "leaves":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await leaves(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "love":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await love(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "love2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await love2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "love3":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await love3(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "luxury":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await luxury(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "luxury2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await luxury2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "magma":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await magma(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "marvel":
        {
          if (!q) return msg.reply("Enter Text");
          let [t1, t2] = q.split(",");
          if (!t1 && !t2) return msg.reply(command + " text1,text2");
          let data = await marvel(t1, t2);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "marvel2":
        {
          if (!q) return msg.reply("Enter Text");
          let [t1, t2] = q.split(",");
          if (!t1 && !t2) return msg.reply(command + " text1,text2");
          let data = await marvel2(t1, t2);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "matrix":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await matrix(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "metal":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await metal(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "metal2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await metal2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "metal3":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await metal3(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "metal4":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await metal4(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "metal5":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await metal5(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "metal6":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await metal6(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "metal7":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await metal7(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "metal8":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await metal8(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "metal9":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await metal9(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "minion":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await minion(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "neon":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await neon(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "neon2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await neon2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "neon3":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await neon3(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "neon4":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await neon4(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "neon5":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await neon5(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "neon6":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await neon6(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "newyear":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await newyear(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "orange":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await orange(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "papercut":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await papercut(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "papercut2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await papercut2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "phub":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await phub(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "pottery":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await pottery(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "quote":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await quote(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "r2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await r2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "rainbow":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await rainbow(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "retro":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await retro(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "retro2":
        {
          if (!q) return msg.reply("Enter Text");
          let [t1, t2, t3] = q.split(",");
          if (!t1 && !t2) return msg.reply(command + " text1,text2,text3");
          let data = await retro2(t1, t2, t3);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "sand":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await sand(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "sand2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await sand2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "sand3":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await sand3(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "sand4":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await sand4(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "scifi":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await scifi(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "scifi2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await scifi2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "scifi3":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await scifi3(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "skeleton":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await skeleton(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "sketch":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await sketch(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "sky":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await sky(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "sky2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await sky2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "sliced":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await sliced(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "space":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await space(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "space2":
        {
          if (!q) return msg.reply("Enter Text");
          let [t1, t2] = q.split(",");
          if (!t1 && !t2) return msg.reply(command + " text1,text2");
          let data = await space2(t1, t2);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "sparkle":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await sparkle(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "spooky":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await spooky(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "spooky2":
        {
          if (!q) return msg.reply("Enter Text");
          let [t1, t2] = q.split(",");
          if (!t1 && !t2) return msg.reply(command + " text1,text2");
          let data = await spooky2(t1, t2);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "spooky3":
        {
          if (!q) return msg.reply("Enter Text");
          let [t1, t2] = q.split(",");
          if (!t1 && !t2) return msg.reply(command + " text1,text2");
          let data = await spooky3(t1, t2);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "steel":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await steel(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "stone":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await stone(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "stone2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await stone2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "stone3":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await stone3(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "stone4":
        {
          if (!q) return msg.reply("Enter Text");
          let [t1, t2] = q.split(",");
          if (!t1 && !t2) return msg.reply(command + " text1,text2");
          let data = await stone4(t1, t2);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "strawberry":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await strawberry(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "summer":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await summer(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "summer2":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await summer2(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "thor":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await thor(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "thunder":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await thunder(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "title":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await title(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "toxic":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await toxic(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "transformers":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await transformers(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "typography":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await typography(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "underwater":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await underwater(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "vintage":
        {
          if (!q) return msg.reply("Enter Text");
          let [t1, t2] = q.split(",");
          if (!t1 && !t2) return msg.reply(command + " text1,text2");
          let data = await vintage(t1, t2);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "watercolor":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await watercolor(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "waterpipe":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await waterpipe(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "whitegold":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await whitegold(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "wicker":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await wicker(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "window":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await window(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
      case "winter":
        {
          if (!q) return msg.reply("Enter Text");
          let data = await winter(q);
          await conn.sendMessage(msg.from, { image: { url: data.url } });
        }
        break;
    }
  },
};
