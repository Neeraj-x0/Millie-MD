let fs = require('fs')
let handler = async (m, { usedPrefix,command,conn, text }) => {
try {
    const json = JSON.parse(fs.readFileSync('./src/tod.json'))
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if (!m.mentionedJid && !m.quoted && !text ) throw 'No Player Specified'
    if (json.includes(conn.getName(who))) throw `${conn.getName(who)} is already added to the list`
    json.push(conn.getName(who))
    fs.writeFileSync('./src/tod.json', JSON.stringify(json))
    conn.reply(m.chat,`${conn.getName(who)} added to truth or dare players`)

    delete require.cache[require.resolve('../config')]
    require('../config')
} catch(e){
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
  }

}
handler.help = ['𝚊𝚍𝚍𝚝𝚘𝚍 [@𝚞𝚜𝚎𝚛]']
handler.tags = ['fun']
handler.command = /^(addtod)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false

module.exports = handler
