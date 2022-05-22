let handler = async (m, { usedPrefix,command,isOwner, text, isAdmin }) => {
  try{let who
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
    }
    if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    who = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
  } else {
    if (!isOwner) {
      global.dfail('owner', m, conn)
      throw false
    }
    who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
  }
  try {
    if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = false
    else global.db.data.users[who].banned = false
    conn.reply(m.chat,`_${await conn.user.name} Active in  ${await conn.getName(who) == undefined ? 'this' : await conn.getName(who)}.`)
  } catch (e) {
    throw `number does not exist in the database!`
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
handler.help = ['ᴜɴʙᴀɴ']
handler.tags = ['owner', 'group']
handler.command = /^unban(chat)?$/i

module.exports = handler
