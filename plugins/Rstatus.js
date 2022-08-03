const { Status, MillieStatus, tiny, serif_I, St, marvel, gurls } = require("../lib");
module.exports = {
  name: "rstatus",
  category: "Downloader",
  desc: "Random WhatsApp Status",
  async mbb({ msg, conn }, { q, prefix }) {
    if (!q) {
      await conn.sendMessage(msg.from, {
        text: tiny(`Pick any category`),
        buttonText: tiny("View categories"),
        sections: [
          {
            title: serif_I(`Whatsapp Status sender `),
            rows: [
              {
                title: serif_I(`Millie`),
                rowId: `${prefix}rstatus millie`,
              },
              {
                title: serif_I(`marvel`),
                rowId: `${prefix}rstatus marvel`,
              },
              {
                title: serif_I(`Stranger Things`),
                rowId: `${prefix}rstatus st`,
              },
              {
                title: serif_I(`Girls`),
                rowId: `${prefix}rstatus gurls`,
              },
              {
                title: serif_I(`Random`),
                rowId: `${prefix}rstatus default`,
              },
              
            ],
          },
        ],
      });
    } else {
      msg.reply("_Please Wait_");
      switch (q.toLowerCase()) {
        case "millie":
          {
            let url = await MillieStatus();
            conn.sendMessage(msg.from, { video: { url: url } });
          }
          break;
        case "default":
          {
            let url = await Status();
            conn.sendMessage(msg.from, { video: { url: url } });
          }
          break;
          case "marvel":
            {
              let url = await marvel();
              conn.sendMessage(msg.from, { video: { url: url } });
            }
            break;
            case "gurls":
            {
              let url = await gurls();
              conn.sendMessage(msg.from, { video: { url: url } });
            }
            break;
            case "st":
                {
                  let url = await St();
                  conn.sendMessage(msg.from, { video: { url: url } });
                }
                break;
                default:
                {
                    let url = await Status();
                    conn.sendMessage(msg.from, { video: { url: url } });
                }
                break;
      }
    }
  },
};
