const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper');
const { igdl } = require('../lib/scrape')
let handler = async (m, { conn, args, usedPrefix,text, command }) => {

 try{
let link = text ? text : m.quoted && m.quoted.text
let matches = link.match(urlRegex);
let teks = matches[0]

   if (!teks) throw `_${nolink}_\n\nExample:\n${usedPrefix + command} https://www.instagram.com/p/CH1A1c9J5pY/?utm_medium=copy_link`
 if (teks.startsWith('https://instagram.com/stories')) throw `it looks like you are using the story link, to download Instagram Story please use the command below\n\n*${usedPrefix}instagramstory <username>*`
 if (!teks.match(/(https|http):\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `wrong url, this command to download post/reel/tv`
   await conn.reply(m.chat,'Downloading media from Instagram')
   try {
   var a = await instagramdl(teks)
   for(let { thumbnail, url } of a)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: wm})
  } catch {
   try {
   var b = await instagramdlv2(teks)
   for(let { thumbnail, url } of b)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: wm})
  } catch {
   try {
   var c = await instagramdlv3(teks)
   for(let { thumbnail, url } of c)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: wm})
  } catch {
   try {
   var d = await instagramdlv4(teks)
   for(let { thumbnail, url } of d)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: wm})
  } catch {
   try {
   var e = igdl(teks)
   for (let { url, preview } of e) 
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(preview)).buffer(), caption: wm})
  } catch {
   throw eror 
     }
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
handler.help = ['ɪɴsᴛᴀɢʀᴀᴍ'].map(v => v + ' <ᴜʀʟ>')
handler.tags = ['downloader']
handler.command = ['ig','insta','instagram']



module.exports = handler

