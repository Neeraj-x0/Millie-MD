module.exports = {
	name: "vgif",
	category: "converter",
	desc: "Changes Video to Voiced Gif",
    isQuoted: true,
  isMedia: {
    isQVideo: true,
  },
	async mbb({ msg,conn }) {
        let buff = await  msg.quoted.download()
        await conn.sendMessage(
            msg.from,
            {
                video: buff,
                gifPlayback: true,
            },
            { quoted: msg}
        )
	}
};
