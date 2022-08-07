const {wallpaper} = require('../lib')
module.exports = {
	name: "wallpaper",
	category: "Downloader",
	desc: "Downloads Wallaper",
	async mbb({ msg,conn},{q}) {
        wallpaper().then((data)=>{
            conn.sendMessage(msg.from,{image:{url:data}})
          }).catch((e)=>{
            msg.reply(`_status : ${e.response.status}\n\nmessage :${e.response.statusText}_`)
          })
	}
}
