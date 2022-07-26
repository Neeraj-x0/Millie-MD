module.exports = {
	name: "once",
    alias:['vv'],
	category: "Tools",
	desc: "Forwards The View once messsage",
    isQuoted:true,
	async mbb({ msg ,conn}) {
        const { quoted, from, type } = msg;
        const content = JSON.stringify(quoted)
        if (!(type === "extendedTextMessage" && content.includes("view_once"))) return msg.reply('Not a view once')
        let buff = await quoted.download() 
        conn.sendFile(from, buff,'', "", msg,{quoted:msg})
    }
};
