module.exports = {
	name: "photo",
	category: "converter",
	desc: "Changes sticker to Photo",
    isQuoted: true,
  isMedia: {
    isQSticker: true,
  },
	async mbb({ msg,conn }) {
let buff = await msg.quoted.download()
await conn.sendMessage(msg.from,{image : buff})
	}
};
