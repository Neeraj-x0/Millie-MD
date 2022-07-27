const { findMusic,tiny } = require("../lib");
const config = require('../config')
module.exports = {
  name: "find",
  category: "Tools",
  desc: "Identifies the replied Music",
  isQuoted: true,
  isMedia: {
    isQAudio: true,
    isQVideo: true,
  },
  async mbb({ msg, conn },{prefix}) {
    let buff = await msg.quoted.download();
    let data = await findMusic(buff);
    if (!data.status) return msg.reply(data);

    let buttonMessage = {
      image: { url: data.thumb },
      caption: tiny(`Title : ${data.title}            
Artist : ${data.artists}           
Album : ${data.album}           
Genre : ${data.genres}           
Release : ${data.release_date}`
      ),
      footer: config.bot_name,
      templateButtons: (templateButtons = [
        {
          index: 1,
          urlButton: {
            displayText: tiny("Play on youtube"),
            url: data.youtube,
          },
        },
        {
          index: 1,
          urlButton: {
            displayText: tiny("Play on spotify"),
            url: data.spotify,
          },
        },
        {
          index: 2,
          quickReplyButton: {
            displayText: "ᴅᴏᴡɴʟᴏᴀᴅ",
            id: prefix+`ytmp3 ${data.youtube}`,
          },
        },
      ]),
    };
    await conn.sendMessage(msg.from, buttonMessage);
  },
};
