let handler = async (m, { conn, command, usedPrefix, text }) => {
let canvas = require("discord-canvas")
  try{let fetch = require('node-fetch')
  let _uptime = process.uptime() * 1000
  let a = require('moment-timezone').tz('Asia/Kolkata').format('HH:mm:ss') 
  let d = new Date(new Date + 3600000)
  let locale = 'in'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  let runtime = clockString(_uptime)
  let usergakdaftar = Object.keys(global.db.data.users).length
  let userdaftar = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let infonyacok = `
╭─── ${conn.user.name} 」
│• Library : *Baileys-MD*
│• Language : *Javascript*
│• Database : *SQL*
│• Version : *${version}*
│• Developer : *${wm}*
│• Runtime : *${runtime}*
│• Prefix : *Multi Prefix 「 ${usedPrefix} 」*
│• Mode : *${global.opts['self'] ? 'Self' : 'Public'}*
│• User : *${usergakdaftar}*
│• Registered : *${userdaftar}*

`.trim()
var as = `Date :${date}\nTime : ${a} (WIB)`
 //conn.sendTIL(m.chat, infonyacok, as, fla + `${command}`, `Source Code`, ``, null, null, `Menu`, `${usedPrefix}menu`, null, null, null, null, m, 
   conn.sendBI(m.chat, infonyacok, as, fla + `${command}`, [[`SC Bot`, `${usedPrefix}sc`], [`Menu`, `${usedPrefix}menu`]], m,        
           )

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
handler.help = ['ɪɴғᴏ']
handler.tags = ['info']
handler.command = /^(info(bot)?)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

