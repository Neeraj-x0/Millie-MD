const { yts, tiny, isUrl, songMeta } = require("../lib");
const config = require("../config");
module.exports = {
  name: "song",
  category: "Downloader",
  desc: "Download Songs",
  query: "Enter song title",
  async mbb({ msg, conn }, { q, prefix }) {
    if (isUrl(q)) {
      await conn.sendMessage(
        msg.from,
        { audio: await songMeta(q), mimetype: "audio/mpeg" },
        { quoted: msg }
      );
    } else {  
      let data = (await yts(q)).video[0];
      let { authorName, title, url, thumbnail, duration, view, publishedTime } =
        data;
      const buttons = [
        {
          buttonId: prefix + "yta " + url,
          buttonText: { displayText: "🎧 ᴀᴜᴅɪᴏ 🎧" },
        },
        {
          buttonId: prefix + "ytv " + url,
          buttonText: { displayText: "📽 ᴠɪᴅᴇᴏ 📽" },
        },
      ];

      const buttonMessage = {
        image: { url: thumbnail },
        caption: tiny(`● *Title:* ${title}
  ● *Duration:* ${duration}
  ● *Viewers:* ${view}
  ● *Uploaded:* ${publishedTime}
  ● *Channel:* ${authorName}
  `),
        footer: config.bot_name,
        buttons: buttons,
        headerType: 4,
      };
      await conn.sendMessage(msg.from, buttonMessage)
    }
    
    }
  }
