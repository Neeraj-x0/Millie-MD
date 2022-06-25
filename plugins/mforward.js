let handler  = async (m, { conn,usedPrefix,command, text }) => {
try{
  const dev =[
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y',
      'https://instagram.com/khadh3r?igshid=YmMyMTA2M2Y' 
    ]
    var tod = dev[Math.floor(Math.random() * (dev.length))]
  let cc =  m.quoted ? await m.getQuotedObj() : false || m
  let jid = text.split(',')
  const veri = {"key": { "participant": '0@s.whatsapp.net', "remoteJid": '917560920774-1614953337@g.us' }, "message": {"orderMessage": {"itemCount": 2022, "status": 999, "thumbnail": await (await fetch('https://camo.githubusercontent.com/407b00b0415660e7da86390c8b2fa8484accff26e1a026a0889139343c736be3/68747470733a2f2f692e696d6775722e636f6d2f5032446e3931552e6a706567')).buffer(), "surface": 999, "message": `ＫＨＡＤＨＥＲ`, "orderTitle": '𝐊𝐇𝐀𝐃𝐇𝐄𝐑', "sellerJid": '0@s.whatsapp.net'}}}
  for (let id of jid) {
await conn.copyNForward(id, cc, 'conversation',{contextInfo:{externalAdReply: { title: `𝐊𝐇𝐀𝐃𝐇𝐄𝐑`, body: `𝚉𝙾𝙼𝙱𝙸𝙴 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚋𝚘𝚝`, mediaUrl: tod, mediaType: 2, thumbnail: fs.readFileSync('./media/image/neeraj.jpg')}},mp3:true} ,true)
}}catch(e){
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
  }
}

handler.tags = ['owner']
handler.command = /^(mf)/i
handler.premium = true

handler.fail = null

module.exports = handler
