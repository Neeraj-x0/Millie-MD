let handler = async (m, { conn, usedPrefix,command, participants }) => {
     try{   let grup = await conn.getName(m.key.remoteJid)
        let mimin = m.isGroup ? NgeriAtmin(participants) : ''
        let txt = `List Group Admin  *${grup}*\n*Total:* ${mimin.length}\n\n`
        for (let min of mimin) {
                txt += `• @${min.split('@')[0]}\n`
        }
        conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
}catch(e){
        conn.reply(m.chat,`${e}`)
        conn.reply('120363022211098165@g.us',`𝗨𝗵𝗼𝗵! 𝗮𝗻 𝗲𝗿𝗿𝗼𝗿 𝗢𝗰𝗰𝘂𝗿𝗲𝗱 
      
        𝗘𝗿𝗿𝗼𝗿 : ${util.format(e)}
      
        𝗖𝗼𝗺𝗺𝗮𝗻𝗱 : ${usedPrefix+command}
        
        𝗣𝗼𝘀𝘀𝗶𝗯𝗹𝗲 𝗥𝗲𝗮𝘀𝗼𝗻𝘀 :
           • 𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗨𝘀𝗮𝗴𝗲 𝗢𝗳 𝗖𝗼𝗺𝗺𝗮𝗻𝗱
           • 𝗦𝗲𝗿𝘃𝗲𝗿 𝗘𝗿𝗿𝗼𝗿
           • 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 𝗘𝗿𝗿𝗼𝗿𝘀
           • 𝗘𝗿𝗿𝗼𝗿 𝗮𝘁 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿𝘀 𝗘𝗻𝗱
           • 𝗗𝗮𝘁𝗮 𝗡𝗲𝘁𝘄𝗼𝗿𝗸 𝗜𝘀𝘀𝘂𝗲𝘀 `, null, {})
      }}
handler.help = ['ʟɪsᴛᴀᴅᴍɪɴ']
handler.tags = ['group']
handler.command = /^(adminlist?|list?admin)$/i

handler.group = true

module.exports = handler


const NgeriAtmin = (participants) => {
        atminn = []
	for (let b of participants) {
		b.admin === "admin" ? atminn.push(b.id) : ''
		b.admin === "superadmin" ? atminn.push(b.id) : ''
	}
	return atminn
}
