const { Tiktok } = require('xfarr-api')
const { tiktok } = require('../lib/scrape')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  try{if (!args[0]) throw `_${nolink}_\n\nExample:\n${usedPrefix + command} https://vm.tiktok.com/ZGJBtcsDq/`
  if (!args[0].match(/tiktok/gi)) throw `_Invalid URL_`
  await m.reply(wait)
  try {
  var anu = await Tiktok(args[0])
  var { medias } = anu
  let cap = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${medias[1].url}`)).data}`
  await conn.sendMedia(m.chat, medias[1].url, null, {caption: cap, mentions: [m.sender]})
  } catch {
    try {
    var anuu = await tiktok(args[0])
    var { nowm } = anuu
    let cap = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)).data}`
    conn.sendMedia(m.chat, nowm, 0, {caption: cap, mentions: [m.sender]})
  } catch {
    throw ('') 
   }
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
handler.help = ['ᴛɪᴋᴛᴏᴋ'].map(v => v + ' <ᴜʀʟ>')
handler.tags = ['downloader', 'premium']
handler.command = /^(tiktok)$/i

handler.premium = true

module.exports = handler

