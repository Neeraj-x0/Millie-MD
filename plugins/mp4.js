const{webp2mp4}=require('../lib')
module.exports = {
	name: "mp4",
	category: "converter",
	desc: "Changes sticker to Video",
    isQuoted: true,
  isMedia: {
    isQSticker: true,
  },
	async mbb({ msg,conn }) {
let buff = await msg.quoted.download()
let out = await webp2mp4(buff)
await conn.sendMessage(msg.from,{video :{url:out}})
	}
};
