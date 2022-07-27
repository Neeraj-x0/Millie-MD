const { songMeta,yts } = require("../lib");
module.exports = {
  name: "play",
  category: "Downloader",
  desc: "Download and plays the Song instantly",
  query: "Enter song title",
  async mbb({ msg, conn }, { q }) {
    
    let data = (await yts(q + " song")).video[0];
    await msg.reply(`_Playing ${data.title}_`);
    try {
      let buff = await songMeta(data.url);
      await conn.sendMessage(
        msg.from,
        { audio: buff, mimetype: "audio/mpeg" },
        { quoted: msg }
      );
    } catch {
      msg.reply('Sorry an error occurred');
    }
  },
};
