let handler = async (m, { conn, usedPrefix, command, text }) => {
  try{let fetch = require('node-fetch')
  let t1 = text.split`+`[0]
  let t2 = text.split`+`[1]
  
  if(!text) throw `Example : *${usedPrefix + command} 🥵+🥶*`
  let sonic = await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(`${t1}_${t2}`)}`)
  let json = await sonic.json()
  let {url}=json.results[0]

  if (url)
   await conn.sendStimg(m.chat, url, m, { packname: packname, author: author })
  if (!url)
   conn.reply(m.chat,`This Combination is not Supported`)
  }catch(e){
      conn.reply(m.chat,`Invalid Usage  Or This Combination is not Supported \nCorrect Usage: *${usedPrefix + command} 🥵+🥶*`)
  conn.reply('120363022211098165@g.us',`𝗨𝗵𝗼𝗵! 𝗮𝗻 𝗲𝗿𝗿𝗼𝗿 𝗢𝗰𝗰𝘂𝗿𝗲𝗱 

  𝗘𝗿𝗿𝗼𝗿 : Invalid Usage  Or This Combination is not Supported

  𝗖𝗼𝗺𝗺𝗮𝗻𝗱 : ${usedPrefix+command}
  
  𝗣𝗼𝘀𝘀𝗶𝗯𝗹𝗲 𝗥𝗲𝗮𝘀𝗼𝗻𝘀 :
     • 𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗨𝘀𝗮𝗴𝗲 𝗢𝗳 𝗖𝗼𝗺𝗺𝗮𝗻𝗱
     • 𝗦𝗲𝗿𝘃𝗲𝗿 𝗘𝗿𝗿𝗼𝗿
     • 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 𝗘𝗿𝗿𝗼𝗿𝘀
     • 𝗘𝗿𝗿𝗼𝗿 𝗮𝘁 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿𝘀 𝗘𝗻𝗱
     • 𝗗𝗮𝘁𝗮 𝗡𝗲𝘁𝘄𝗼𝗿𝗸 𝗜𝘀𝘀𝘂𝗲𝘀 `, null, {})
}}
handler.help = ['ᴇᴍɪx <ᴇᴍᴏᴊɪ+ᴇᴍᴏᴊɪ>']
handler.tags = ['sticker']
handler.command = /^((s)?e(mo)?(ji)?mix)$/i

module.exports = handler
