const { facebookdl, facebookdlv2, facebookdlv3 } = require('@bochilteam/scraper')
const { Facebook } = require('xfarr-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {if (!args[0]) throw `${nolink}\n\nExample:\n*${usedPrefix + command}* https://fb.watch/aYv0jAffAO/`
  if (!args[0].match(/(https:\/\/.www.facebook.com || fb.watch)/gi)) throw `*Link salah! Perintah ini untuk mengunduh media facebook dengan link*\n\nExample:\n${usedPrefix + command} https://fb.watch/aYv0jAffAO/`
  await conn.reply(m.chat,wait)
  
  try {
      let res = await facebookdlv2(args[0])
      let data = res.result
      let { id, thumbnail } = await res
      let { url, quality } = await data[0]
      let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data
      let sel = `🎬 *Facebook MP4*\n\n📌 *ID:* ${id}\n✨ *Quality:* ${quality}\n🚀 *Link:* ${urlshort}`
      conn.sendFile(m.chat, url, id+'.mp4', sel, 0, 0, {mentions: [m.sender], jpegThumbnail: await await(fetch(thumbnail)).buffer()})
  } catch {
   try {
     let res = await facebookdlv3(args[0])
      let data = res.result
      let { title, thumbnail } = await res
      let { url, quality } = await data[1]
      let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data
      let sell = `🎬 *Facebook MP4*\n\n✨ *Quality:* ${quality}\n🚀 *Link:* ${urlshort}`
      conn.sendFile(m.chat, url, title+'.mp4', sell, 0, 0, {mentions: [m.sender], jpegThumbnail: await await(fetch(thumbnail)).buffer()})
  } catch {
   try {
     let anu = await scrape.facebook2(args[0])
     let { author, title, thumb, link_high, link_normal } = anu.hasil
     let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${link_high}`)).data
     let selll = `🎬 *Facebook MP4*\n\n👤 *Author:* ${author}\n📌 *Title:* ${title}\n🚀 *Link:* ${urlshort}`
     conn.sendFile(m.chat, link_high, title+'.mp4', selll, 0, 0, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumb)).buffer()})
  } catch {
   try {
     let b = await Facebook(args[0])
     let { title, thumbnail, duration, source, medias } = b
     let { url, quality, extension, size, formattedSize  } = medias[0]
     let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data
     let sell = `🎬 *Facebook MP4*\n\n✨ *Quality:* ${quality}\n🎚 *Size:* ${formattedSize}\n🚀 *Link:* ${urlshort}`
     conn.sendMedia(m.chat, url, null, {caption: sell, mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer()})
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
handler.help = ['ғᴀᴄᴇʙᴏᴏᴋ'].map(v => v + ' <ᴜʀʟ>')
handler.tags = ['downloader']
handler.command = /^((fb|facebook)(d(own)?l(oad)?(er)?)?(mp4)?)$/i



module.exports = handler
