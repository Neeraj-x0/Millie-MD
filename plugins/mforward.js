let handler  = async (m, { conn,usedPrefix,command, text }) => {
try{
  const dev =[
      'https://www.youtube.com/watch?v=7mHVMEtBn-I',
      'https://www.youtube.com/watch?v=0HNEqunpi44',
      'https://www.youtube.com/watch?v=mRD0-GxqHVo',
      'https://www.youtube.com/watch?v=Ky1dduzoEe0',
      'https://www.youtube.com/watch?v=AJtDXIazrMo',
      'https://www.youtube.com/watch?v=ApXoWvfEYVU',
      'https://youtu.be/e6Bh7rnLWWA',
      'https://www.youtube.com/watch?v=g_lAm3Oaz_o',
      'https://www.youtube.com/watch?v=ELMmEa1ALqU',
      'https://www.youtube.com/watch?v=jJPMnTXl63E',
      'https://www.youtube.com/watch?v=CU9gwkZcJgs',
      'https://www.youtube.com/watch?v=65pCjkSpfiQ',
      'https://www.youtube.com/watch?v=W1tzURKYFNs',
      'https://www.youtube.com/watch?v=6LD30ChPsSs',
      'https://www.youtube.com/watch?v=5W1L6bFCvvo',
      'https://www.youtube.com/watch?v=B5spo12pyoQ',
      'https://www.youtube.com/watch?v=xQTO1OW4PXo',
      'https://www.youtube.com/watch?v=pHvrxS9VIPw',
      'https://youtu.be/d9IKg-nizhQ' 
    ]
    var tod = dev[Math.floor(Math.random() * (dev.length))]
  let cc =  m.quoted ? await m.getQuotedObj() : false || m
  let jid = text.split(',')
  const veri = {"key": { "participant": '0@s.whatsapp.net', "remoteJid": '919383400679-1614953337@g.us' }, "message": {"orderMessage": {"itemCount": 2022, "status": 999, "thumbnail": await (await fetch('https://avatars.githubusercontent.com/u/64305844?v=4')).buffer(), "surface": 999, "message": `ＡＬＩＥＮ ＡＬＦＡ`, "orderTitle": 'Alien-Alfa', "sellerJid": '0@s.whatsapp.net'}}}
  for (let id of jid) {
await conn.copyNForward(id, cc, 'conversation',{contextInfo:{externalAdReply: { title: `ɴᴇᴇʀᴀᴊ-x0`, body: `𝙼𝚒𝚕𝚕𝚒𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚋𝚘𝚝`, mediaUrl: tod, mediaType: 2, thumbnail: fs.readFileSync('./media/image/neeraj.jpg')}},mp3:true} ,true)
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
