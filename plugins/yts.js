const { ytstemplate} = require("../lib");
module.exports = {
  name: "ytsearch",
  alias: ["yts"],
  category: "Search",
  desc: "Yotube search",
  query: "Give A Search term",
  wait: true,
  async mbb({ msg, conn }, { q, prefix }) {
    let list = await ytstemplate(q, prefix);
    await conn.sendMessage(msg.from, list);
  },
};
