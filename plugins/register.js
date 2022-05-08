const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
 try{ let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `You are already registered\nWant to re-register? ${usedPrefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Example:\n*${usedPrefix + command} Electra.1*`
  let name = text.split('.')[0]
  let age = text.split('.')[1]
  if (!name) throw 'Name cannot be empty (Alphanumeric)'
  if (!age) throw 'Age cannot be empty (Number)'
  age = parseInt(age)
  if (age > 70) throw 'Age too old'
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (age < 5) throw 'Babies can type according to the bjir format, but I don\'t know if it\'s too small now it\'s epic² for sure the child is hungry :v'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  user.sn = sn
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  conn.sendTBI2(m.chat, `
*Registration Successful*

• Name   : ${name}
• Age   : ${age} Years
• Status : Registered √
• Present : ${prems.includes(m.sender.split`@`[0]) ? '✅ Please Chat Owner for Claiming XP' : '❌ Not a premium user'}
`.trim(), wm,pp,null,null,`Profile`,`${usedPrefix}profile`, `Show SN`,`${ usedPrefix}.sn`,m)
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
handler.help = ['ʀᴇɢɪsᴛᴇʀ'].map(v => v + '<ɴᴀᴍᴇ>.<ᴀɢᴇ>')
handler.tags = ['xp']

handler.command = /^(reg(is(ter)?)?)$/i

module.exports = handler
