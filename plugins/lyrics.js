const { lyrics } = require("../lib")
module.exports={
    name: "lyric",
    alias : ['lyrics'],
	category: "Tools",
	desc: "song lyrics",
	query :'Enter song title ',
	async mbb({ msg },{q}) {
        lyrics(q).then((s)=>{
            msg.reply(`Song : ${s.title}\nAuthor : ${s.author}\n\nLyrics : `+s.lyrics)
          })
    }}
