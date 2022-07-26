const{tiny}=require('../lib')
module.exports = {
  name: "ping",
  alias: ["p", "speed"],
  category: "info",
  desc: "Test Ping",
  async mbb({ msg }) {
    const start = new Date().getTime()
		await msg.reply(tiny('testing ping'))
		const end = new Date().getTime()
		return await msg.reply(tiny((end - start)+' *ms*')
		)
  },
};
