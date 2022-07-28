const {Status} = require('../lib')
module.exports = {
    name: "rstatus",
	category: "Downloader",
	desc: "Random WhatsApp Status",
    wait: true,
    async mbb({msg,conn }) {    
        let url = await Status()
        let list = url.result
        let index = Math.floor(Math.random() * list.length)
        let furl = list[index]
       let buff = await conn.getBuffer(furl.url)
          await  conn.sendFile(msg.from, buff,'',furl.caption, msg,{quoted:msg})
    }
}
