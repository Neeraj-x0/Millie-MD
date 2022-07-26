const { convertTime } = require("../lib");

module.exports = {
  name: "runtime",
  category: "info",
  desc: "Bot Runtime",

  async mbb({ msg, conn }, { map }) {
    await msg.reply(convertTime(map.uptime.getTime()), { adReply: true });
  },
};
