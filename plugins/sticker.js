let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
    try {
    var q = m.quoted ? m.quoted : m
    if(!q) throw `Send or reply to media with caption *${usedPrefix}${command}*\nNote: 10 second max video`
    var mime = (q.msg || q).mimetype || ''
    try {
    if (/webp/.test(mime)) {
        var med = await q.download()
        //var med = await webp2png(ras)
        var sel = med
        //conn.sendStimg(m.chat, sel, m, { packname: packname, author: author })
        }
    else if (/image/.test(mime)) {
        var med = await q.download()
        var sel = med
        //conn.sendStimg(m.chat, sel, m, { packname: packname, author: author })
        }
    else if (/video/.test(mime)) {
        var med = await q.download()
        var sel = med
        //conn.sendStimg(m.chat, sel, m, { packname: packname, author: author })
        }
    else if(isUrl) { 
        var url = `${args[0]}`
        var sel = url
        //conn.sendStimg(m.chat, sel, m, { packname: packname, author: author })
        }
    } finally {
        if(sel) conn.sendStimg(m.chat, sel, m, { packname: packname, author: author })
        }
    }catch(e){
        m.reply(`${e}`)
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
handler.help = ['sᴛɪᴄᴋᴇʀ <ʀᴇᴘʟʏ/sᴇɴᴅ ᴍᴇᴅɪᴀ>']
handler.tags = ['sticker']
handler.command = /^(s(tic?k(er)?)?(gif)?(video)?)$/i

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
