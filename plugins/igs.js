const { igstory, igstory2 } = require('../lib/scrape')
const { instagramStory, instagramStoryv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  try{  if (!args[0]) throw `Enter Username?\n\nExample:\n\n${usedPrefix + command} neer_j_`
    if (args[0].startsWith('http') || args[0].startsWith('@')) throw `username salah\n\nExample: *${usedPrefix}${command} rasel.ganz*`
    try {
    await conn.reply(m.chat,wait)
    //const res = await fetch(API('hardianto', '/api/download/igstory', { username: args[0] }, 'apikey'))
    const res = await fetch(`https://hardianto.xyz/api/download/igstory?username=${args[0]}&apikey=hardianto`)
    var anu = await res.json()
    var anuku = anu.medias
    for (let { url, preview } of anuku) 
    conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(preview)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
    } catch {
        try {
    const res2 = await scrape.igstory(args[0]).catch(async _=> await yzu.igstory(args[0]))
    for ( const { downloadUrl, url, preview, type, fileType } of res2 )
    conn.sendMedia(m.chat, url, null, { mentions: [m.sender], jpegThumbnail: await(await fetch(preview)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
    } catch {
        throw `No media found!`
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
handler.help = ['ɪɴsᴛᴀɢʀᴀᴍsᴛᴏʀʏ'].map(v => v + ' <ᴜsᴇʀɴᴀᴍᴇ>')
handler.tags = ['downloader']
handler.command = /^((igs|instagrams)(tory)?(dl)?(downloa?d(er)?)?)$/i



module.exports = handler
    

