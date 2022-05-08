let handler = async (m, { conn, text, usedPrefix,command, args }) => {
  try{var time = db.data.users[m.sender].lastjoin + 86400000
  if (new Date - db.data.users[m.sender].lastjoin < 86400000) throw `You've used the daily bot invite limit today\nwait for ${msToTime(time - new Date())} again`
  var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
 
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: m.chat } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, 
  vcard: `BEGIN:VCARD
  VERSION:3.0
  N:;a,;;;
  FN:${name}
  item1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}
  item1.X-ABLabel:Ponsel
  END:VCARD`}}}
  var [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `where's the link?` 
  if (!code) throw `Invalid link!`
  var anubot = owner[0]
  try {
  var res = await conn.groupAcceptInvite(code)
  var b = await conn.groupMetadata(res)
  var d = b.participants.map(v => v.id)
  var e = await d.filter(v => v.endsWith(anubot + '@s.whatsapp.net'))
  if (e.length) await m.reply(`Successfully invited bot to ${await conn.getName(res)}`)
  
let mes = `Hello Everyone👋🏻 
*${conn.user.name}* is a WhatsApp Multi-Device Bot built with Node.js,Invited by @${m.sender.split('@')[0]}`
  await conn.sendB(res, mes, wm, null, [[`Owner`, `.owner`], [`Menu`, `${usedPrefix}menu`]], fkonn, {
        mentions: d
         })
     
  db.data.users[m.sender].lastjoin = new Date * 1
  } catch (e) {
      conn.reply(owner[0]+'@s.whatsapp.net', e)
      throw `Sorry bots can't join the group!`
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
handler.help = ['ᴊᴏɪɴ <ᴄʜᴀᴛ.ᴡʜᴀᴛsᴀᴘᴘ.ᴄᴏᴍ>']
handler.tags = ['main']
handler.command = /^join$/i

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + "day" + hours + " o'clock " + minutes + " minute";
    // +minutes+":"+sec;
}

function msToTime(duration) {
  var seconds = Math.floor((duration / 1000) % 60),
  minutes = Math.floor((duration / (1000 * 60)) % 60),
  hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " o'clock " + minutes + " minute"
}

