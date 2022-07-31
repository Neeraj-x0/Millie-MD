const { fetchJson } = require("../lib");
module.exports = {
  name: "quote",
  desc: "Random Quotes",
  async mbb({ msg, conn }) {
    const json = await fetchJson("https://api.quotable.io/random");
    console.log(json)
    await conn.sendMessage(msg.from, {
        text:
          "```"+json.content + "```\n\n" + "*✒️ Author* ```" + json.author + "```\n",
      });
  },
};
