const { webp2png } = require('../lib/webp2mp4')
const fetch = require("node-fetch");
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    try{if (!args[0]) throw `${nolink}\n\nExample:\n${usedPrefix + command} https://t.me/addstickers/namapack`
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) throw `URL Invalid`
    try {
    let packName = args[0].replace("https://t.me/addstickers/", "")
    let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!gas.ok) throw m.reply(eror)
    let json = await gas.json()
    m.reply(`*Total stickers:* ${json.result.stickers.length}
*Estimated Time To complete:* ${json.result.stickers.length * 2 } seconds`.trim())
    for (let i = 0; i < json.result.stickers.length; i++) {
        let fileId = json.result.stickers[i].thumb.file_id
        let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
        let jisin = await gasIn.json()
        let stiker = await sticker(false, "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path)
        let sel = await webp2png(stiker)
        await conn.sendStimg(m.chat, sel, null, { packname: global.packname, author: global.author})
        await delay(500)
    }
    m.reply('_*Completed*_')
        } catch {
            m.reply(eror)
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
handler.help = ['sᴛɪᴄᴋᴇʀᴛᴇʟᴇ <ᴜʀʟ>']
handler.tags = ['sticker']
handler.command = /^(s(tic?k(er)?)?tele(gram)?|tele(gram)?s(tic?k(er)?)?)$/i

//

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))
