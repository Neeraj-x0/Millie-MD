/*let fetch = require('node-fetch')
  let handler = async(m, { conn,usedPrefix,command, text }) => {
   try{ const more = String.fromCharCode(8206)
    const readMore = more.repeat(4001)

    var [effect, query] = text.split `,`
  
    let { effects } = await (await (fetch(API('xteam', '/textpro')))).json()
    if (!effect) throw `Usage : ${usedPrefix}textpro <effect>,<text>\n\n${readMore} *Effect List*\n\n┌──────────────\n├◑  *` + effects.sort().join('*\n├◑ *')
    effect = effect.toLowerCase()
    if (!effect in effects) throw `Effect *${effect}* not found`
    let url = `https://api.xteam.xyz/textpro/${effect}?text=${query}&APIKEY=benniismaelapikey`
   
    await conn.sendFile(m.chat, url, 'file.jpg',null, m, 0, { thumbnail: Buffer.alloc(0) })
  }catch(e){
    conn.reply(m.chat,`_Failed to generate.Try another effect_`)
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
  handler.help = ['ᴛᴇxᴛᴘʀᴏ'].map(v => v + ' <ᴇғғᴇᴄᴛ> <ᴛᴇxᴛ> [ᴛᴇxᴛ2]')
  handler.tags = ['tools']
  handler.command = /^(textpro)$/i
  handler.sudo = true
  
  module.exports = handler
  */