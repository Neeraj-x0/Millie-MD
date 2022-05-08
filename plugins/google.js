let fetch = require('node-fetch')
let googleIt = require('google-it')
let handler = async (m, { conn, command, usedPrefix, args }) => {
  try{let full = /f$/i.test(command)
  let text = args.join` `
  if (!text) throw `uhm.. what are you looking for?\n\nExample:\n${usedPrefix + command} Whatsapp Web API`
  let url = 'https://google.com/search?q=' + encodeURIComponent(text)
  let search = await googleIt({ query: text })
  let msg = search.map(({ title, link, snippet }) => {
    return `*${title}*\n_${link}_\n_${snippet}_`
  }).join`\n\n=========================\n\n`
  try {
    await conn.sendMedia(m.chat, 'https://telegra.ph/file/92a008f4c1a2bfb1671e5.mp4', m, {caption: '*Google Search*\n\n*Source:* ' + url + '\n\n' + msg, gifPlayback: true, jpegThumbnail: await(await fetch('https://telegra.ph/file/62da3c5e3f4319d949705.jpg')).buffer()})
   } catch {
    throw msg
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
handler.help = ['ɢᴏᴏɢʟᴇ'].map(v => v + ' <ǫᴜᴇʀʏ>')
handler.tags = ['internet']
handler.command = /^g(ooglef?)?$/i

module.exports = handler

