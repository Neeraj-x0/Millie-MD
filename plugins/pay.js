let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
  try{try {
  let fail = `Use this command to give XP to another user\n\nexample:\n${usedPrefix + command} @918113921898 10\nor reply to     message with the command:\n${usedPrefix + command} 10`
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  else who = m.chat
  if (!who) {
    conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['918113921898@s.whatsapp.net'] } })
    throw false
  }
  if (typeof global.db.data.users[who] == "undefined") {
    global.db.data.users[who] = {
      exp: 0,
      limit: 10,
      lastclaim: 0,
      registered: false,
      name: conn.getName(m.sender),
      age: -1,
      regTime: -1,
      afk: -1,
      afkReason: '',
      banned: false,
      level: 0,
      call: 0,
      role: 'Warrior V',
      autolevelup: false,
      pc: 0,
    }
  }
  let txt = text.replace('@' + who.split(`@`)[0], '').trim()
  if (!txt) {
    conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['918113921898@s.whatsapp.net'] } })
    throw false
  }
  if (isNaN(txt)) throw 'only Numbers'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw 'minimum 1'
  let users = global.db.data.users
  if (exp > users[m.sender].exp) throw 'Exp is not enough to transfer, there is a tax too'
  users[m.sender].exp -= exp
  users[who].exp += xp
  await conn.fakeReply(m.chat, `Transfer success *${xp}* XP`, who, m.text)
  await conn.sendB(who, `@${m.sender.split(`@`)[0]} has given you XP as much as ${xp} XP, please check your balance by typing *${usedPrefix}balance* or click the button below!`, wm, null, [[`Balance`, `${usedPrefix}balance`]], m, {mentions: [m.sender]})
  } catch {
    throw `@tag or reply to give XP`
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
handler.help = ['pay @user <jumlah>']
handler.tags = ['xp']
handler.command = /^paye?x?p?$/

module.exports = handler