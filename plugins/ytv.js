let { ytv } = require("../lib");
module.exports = {
  name: "ytv",
  alias: ["ytmp4", "ytvideo"],
  category: "Downloader",
  desc: "Yotube To Mp4",
  query: "Give A url",
  wait: true,
  isUrl: true,
  async mbb({ msg, conn }, { q }) {
    let query = await ytv(q);
    await await conn.sendMessage(
      msg.from,
      {
        video: { url: query.dl_link },
        caption: query.title,
      },
      { quoted: msg }
    );
  },
};
