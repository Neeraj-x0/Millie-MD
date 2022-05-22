const fetch = require('node-fetch')

let handler = async (m, { command, usedPrefix, text, conn }) => {
   try{ 
     let link = text ? text : m.quoted && m.quoted.text
     let matches = link.match(urlRegex);
     let teks = matches[0]
     let res = await (await fetch(`https://api.xteam.xyz/dl/mediafire?url=${teks}&APIKEY=513996f03bc191e5`)).json()

let {url,title,size} = res.result
let array = url.split('.')
const mime =array.reverse()[0]
    await conn.sendMedia(m.chat, url, 0, {fileName: `${title.trim()}.${mime.trim()}`, mentions: [m.sender]})
    
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
handler.help = ['ᴍᴇᴅɪᴀғɪʀᴇ'].map(v => v + ' <ᴜʀʟ>')
handler.tags = ['downloader']
handler.command = /^(me?d(ia)?f(ire)?)$/i



module.exports = handler
