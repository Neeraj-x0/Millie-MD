let handler = async(m, { conn, usedPrefix, command, args }) => {
  try{var fetch = require('node-fetch')
  var axios = require('axios')
  if(!args[0]) throw `${nolink}`
  let capt = wm
  try {
  let full = /f$/i.test(command)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await(await fetch(API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  await conn.sendFile(m.chat, ss, 'ss.png', capt, m, 0, {jpegThumbnail: ss})
  } catch {
  try {
  let ss1 = await(await fetch(`https://mnazria.herokuapp.com/api/screenshotweb?url=${args[0]}`)).buffer()
  await conn.sendFile(m.chat, ss1, 'ss.png', capt, m, 0, { jpegThumbnail: ss1})
  } catch {
  try { 
  let res = await(await fetch(`https://mnazria.herokuapp.com/api/screenshotweb?url=${args[0]}`)).json()
  let ss2 = await(await fetch(res.gambar)).buffer()
  await conn.sendFile(m.chat, ss2, 'ss.png', m, 0, { jpegThumbnail: ss2})
  } catch {
  try { 
  let ss3 = await(await fetch(`https://hardianto.xyz/api/tools/ssweb?url=${args[0]}&apikey=hardianto`)).buffer()
  await conn.sendFile(m.chat, ss3, 'ss.png', m, 0, {jpegThumbnail: ss3})
  } catch {
    let er = await conn.trans(lang, eror).catch(async _ => await conn.trans2(lang, eror))
    return m.reply(er)
         //https://hardianto.xyz/api/tools/ssweb?url=https://xnxx.com&apikey=hardianto
        }
      }
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
handler.help = ['ssᴡᴇʙ']
handler.tags = ['internet']
handler.command = /^ssf?(web)?|scre?e?nshu?o?t$/i

module.exports = handler
