const {hmodtemplate} = require('../lib')
module.exports = {
	name: "hmod",
	category: "Search",
	desc: "Do a search in happy Mod",
    query:"Enter Search Term",
	async mbb({ msg,conn},{args}) {
        let template = await hmodtemplate(args)
        if (template=== 404 ) return msg.reply("No result Found")
        await conn.sendMessage(msg.from, template);
	}
};
