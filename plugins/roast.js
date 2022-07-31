let { fetchJson, pickRandom } = require("../lib");
module.exports = {
  name: "roast",
  desc: "Roasts the Person you mentioned",
  async mbb({ msg, conn }) {
    let data = await fetchJson(
      "https://gist.github.com/Neeraj-x0/cea4ade556486993a62244b98864e79d/raw"
    );
    let roast = pickRandom(data);
    conn.sendMessage(msg.from, { text: roast, mentions: msg.mentions });
  },
};
