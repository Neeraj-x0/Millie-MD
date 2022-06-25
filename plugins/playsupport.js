let fetch = require('node-fetch')
const { servers, yta } = require('../lib/y2mate')
const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let handler = async (m, { usedPrefix,command,conn, text, args, isPrems, isOwner }) => {
  try{
  if (!args[0].match(/(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)\/(watch|shorts)|(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)/gi)) throw ra
  let limit 
  if((isOwner || isPrems)) limit = 250
  else limit = 100
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  try {
  var audi = await youtubedl(args[0])
  var { thumbnail, audio, title } = audi
  var det = audi.audio['320kbps']
  var { quality, fileSizeH, fileSize } = det
  var url = await det.download()
   
await conn.sendFile(m.chat, url, 0, {mimetype: 'audio/mpeg' ,fileName: `${title.trim()}.mp3`,
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `${args[0]}`,
    mediaType: 2,
    description: deslink, 
    title: title,
    body: `𝚉𝙾𝙼𝙱𝙸𝙴`, // `${fileSizeH}`,
    thumbnail: await(await fetch(thumbnail)).buffer(), 
   }}
  }) 
  } catch {
  try {
  var audi = await youtubedlv2(args[0])
  var { thumbnail, audio, title } = audi
  var det = audi.audio['320kbps']
  var { quality, fileSizeH, fileSize } = det
  var url = await det.download()
 
 await conn.sendMedia(m.chat, url, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `${args[0]}`,
    mediaType: 2,
    description: deslink, 
    title: title,
    body: `𝚉𝙾𝙼𝙱𝙸𝙴`, //`${fileSizeH}`,
    thumbnail: await(await fetch(thumbnail)).buffer(),
   }}
  }) 
  } catch {
  try {
  var audi = await youtubedlv3(args[0])
  var { thumbnail, audio, title } = audi
  var det = audi.audio['320kbps']
  var { quality, fileSizeH, fileSize } = det
  var url = await det.download()
  let isLimit = (isPrems || isOwner ? limit : limit) * 1024 < fileSize
  if(!isLimit) await conn.sendMedia(m.chat, url, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `${args[0]}`,
    mediaType: 2,
    description: deslink, 
    title: title,
    body: `𝚉𝙾𝙼𝙱𝙸𝙴`, //`${fileSizeH}`,
    thumbnail: await(await fetch(thumbnail)).buffer(),
   }}
  }) 
  } catch {
  try {
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, filesize } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? limit : limit) * 1024 < filesize
  if(!isLimit) await conn.sendMedia(m.chat, dl_link, null, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `${args[0]}`,
    mediaType: 2,
    description: deslink, 
    title: title,
    body: `𝚉𝙾𝙼𝙱𝙸𝙴`, //`${filesizeF}`,
    thumbnail: await(await fetch(thumb)).buffer(), 
   }}
  })
  } catch {
    throw eror 
        }
      }
    }
  }
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

handler.command = /^(psp)$/i


module.exports = handler 
