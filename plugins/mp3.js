const { toAudio, mp3Meta, makeid } = require("../lib");
const config = require('../config')
module.exports = {
  name: "mp3",
  alias: ["tomp3", "take"],
  category: "converter",
  desc: "Convert to Mp3",
  isQuoted: true,
  wait: true,
  isMedia: {
    isQAudio: true,
    isQVideo: true,
  },
 
  async mbb({ msg, conn }, { q }) {
    const { quoted, from, type } = msg;
    const content = JSON.stringify(quoted);

    let media = await msg.quoted.download();
    if (!(type === "extendedTextMessage" && content.includes("videoMessage"))) {
      let buff = config.thumbImg;
      let audio = await mp3Meta(media, buff, q || (await makeid()), null);
      await conn.sendMessage(
        from,
        { audio: audio, mimetype: "audio/mpeg", fileName: `Convert By.mp3` },
        { quoted: msg }
      );
    } else {
      let buff = config.thumbImg;
      let hehe = await toAudio(media, "mp4");
      let audio = await mp3Meta(hehe, buff, q || (makeid()), null);
      await conn.sendMessage(
        from,
        { audio: audio, mimetype: "audio/mpeg", fileName: `Convert By.mp3` },
        { quoted: msg }
      );
    }
  },
};
