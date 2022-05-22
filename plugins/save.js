let handler = async(m, { text, conn, usedPrefix, command }) => {
 try{ if (/saveme|sv(me|gua|g?w|aku)$/i.test(command)) {
     conn.sendContact(m.chat, `${m.sender.split('@')[0]}`, `${await conn.getName(m.sender)}`, m)
    }
    let teks = text
  if (/savehe?s?|svshe|savedia|svdia$/i.test(command)) {
     try {
     let who
     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
     else who = m.quoted.sender ? m.quoted.sender : m.sender
     conn.sendContact(m.chat, `${who.split('@')[0]}`, `${await conn.getName(who)}`, m)
    } catch {
      throw `@tag or reply the contact `
      }
    }
  if (/save|sv$/i.test(command)) {
     if(!text) 
          teks = conn.getName(who)
     try {
     let who
     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
     else who = m.quoted.sender ? m.quoted.sender : m.sender
     conn.sendContact(m.chat, `${who.split('@')[0]}`, teks, m) 
  } catch {
     conn.sendContact(m.chat, `${m.sender.split('@')[0]}`, teks, m)
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
handler.help = ['sᴀᴠᴇ <@ᴛᴀɢ/ʀᴇᴘʟʏ>']
handler.tags = ['tools']
handler.command = /^sa?ve?(me|aku|aq|gua|g?w)?(he'?s?|sh?e|dia)?$/i

module.exports = handler
