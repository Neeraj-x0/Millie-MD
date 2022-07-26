const { mp3Cutter } = require("../lib");

module.exports = {
  name: "trim",
  category: "Tools",
  desc: "trims the audio",
  query: "trim start:end",
  isQuoted: true,
  isMedia: {
    isQAudio: true,
  },
  async mbb({ msg, conn }, { q }) {
    let [start, end] = q.split(":");
    if (!end) return msg.reply("_Invalid syntax_");
    const { quoted, from } = msg;
    let media = await quoted.download();
    let audio = await mp3Cutter(media, start, end);
    await conn.sendMessage(
      from,
      { audio: audio, mimetype: "audio/mpeg", fileName: `Convert By.mp3` },
      { quoted: msg }
    );
  },
};
