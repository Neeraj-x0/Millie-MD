const {short} = require('../lib')
module.exports = {
    name: "short",
	alias: ["bitly"],
	category: "Tools",
	desc: "Shortens The URl",
    query:"Give A url",
    isUrl: true,
    async mbb({msg,conn },{q}) {    
        let shorturl = await short(q)
           await  msg.reply(shorturl.link)
    }
}
