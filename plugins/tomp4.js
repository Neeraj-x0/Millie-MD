let { webp2mp4 } = require('../lib/webp2mp4')

let handler = async (m, { conn, usedPrefix, command }) => {
  try{if (!m.quoted) throw `Reply sticker with command *${usedPrefix + command}*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `Reply sticker with command *${usedPrefix + command}*`
  if (/to(mp4|vid(eo)?)$/i.test(command)) {
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2mp4(media)
  }
  conn.sendMedia(m.chat, out, m, { caption: wm})
    }
  if (/togif$/i.test(command)) {
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2mp4(media)
  }
  conn.sendMedia(m.chat, out, m, { gifPlayback: true, caption: wm})
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
handler.help = ['ᴠɪᴅᴇᴏ', 'ɢɪғ'].map(v=> v + " <ʀᴇᴘʟʏ>")
handler.tags = ['tools']
handler.command = /^(mp4|gif|vid(eo)?)$/i

module.exports = handler
