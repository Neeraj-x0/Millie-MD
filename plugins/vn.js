const { toPTT } = require("../lib");

module.exports = {
  name: "vn",
  alias: ["tovn"],
  category: "converter",
  desc: "Convert to Mp3",
  isQuoted: true,
  wait: true,
  isMedia: {
    isQAudio: true,
    isQVideo: true,
  },
  async mbb({ msg, conn }) {
    const { from } = msg;
    let media = await msg.quoted.download();
    let audio = await toPTT(media, "mp4");
    await conn.sendMessage(from, { audio: audio }, { quoted: msg });
  },
};
