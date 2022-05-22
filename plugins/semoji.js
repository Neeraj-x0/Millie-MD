const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
let handler = async(m, { conn, usedPrefix, command, args, text, }) => {
    try{if(!text) throw `Example : *${usedPrefix + command} 😳*`
    let ras = `Hi @${m.sender.split('@')[0]}`
    let sel = `There are several types of emoji, what kind of emoji do you want? Choose Below Yes Sis!\nPlease Note You Can Only Have 1 Emoji And Use Emoji!`
    let rs = `Choose Here`
const sections = [ {
	title: `Please Select the Emoji Type List Below!`,
	rows: [
	{title: `Emoji Apple`, rowId: `#emoji apple ${args[0]}`, description: ``},
        {title: `Emoji Facebook`, rowId: `#emoji facebook ${args[0]}`, description: ``},
	{title: `Emoji Google`, rowId: `#emoji google ${args[0]}`, description: ``},
	{title: `Emoji Htc`, rowId: `#emoji htc ${args[0]}`, description: ``},
	{title: `Emoji Instagram`, rowId: `#emoji instagram ${args[0]}`, description: ``},
	{title: `Emoji Microsoft`, rowId: `#emoji microsoft ${args[0]}`, description: ``},
	{title: `Emoji Mozilla`, rowId: `#emoji mozilla ${args[0]}`, description: ``},
	{title: `Emoji Openmoji`, rowId: `#emoji openmoji ${args[0]}`, description: ``},
	{title: `Emoji Pixel`, rowId: `#emoji pixel ${args[0]}`, description: ``},
	{title: `Emoji Samsung`, rowId: `#emoji samsung ${args[0]}`, description: ``},
	{title: `Emoji Twitter`, rowId: `#emoji twitter ${args[0]}`, description: ``},
	{title: `Emoji WhatsApp`, rowId: `#emoji whatsapp ${args[0]}`, description: ``},
               ]
    } ]

const listMessage = {
  text: sel,
  mentions: [m.sender],
  footer: wm,
  title: ras,
  buttonText: rs,
  sections
}

    if(!args[1]) await conn.sendMessage(m.chat, listMessage, troliverify)

    let er = `Example:
*${usedPrefix}emo app ❤️*
*${usedPrefix}emo go ❤️*

╭─── *Opsi* 」
│• ap = apple
│• fa = facebook
│• go = google
│• ht = htc
│• ig = instagram 
│• mi = microsoft
│• mo = mozilla
│• op = openmoji
│• pi = pixel
│• sa = samsung
│• tw = twitter
│• wh = whatsapp


Can only 1 emoji, pay attention to spaces, don't spam!
`
  if(!args[0]) throw er
  //if (!args[1]) throw er
  let template = (args[0] || '').toLowerCase()
  if (/emo/i.test(command)) {
    try {
      switch (template) {
        case 'apple':
        case 'ip':
        case 'ap':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[0].url, m, { packname: packname, author: author })
            })
          break
        case 'facebook':
        case 'fb':
        case 'fa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[6].url, m, { packname: packname, author: author })
            })
          break
        case 'google':
        case 'go':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[1].url, m, { packname: packname, author: author })
            })
          break
        case 'htc':
        case 'ht':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[12].url, m, { packname: packname, author: author })
            })
          break
        case 'Ig':
        case 'instagram':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[11].url, m, { packname: packname, author: author })
            })
          break
        case 'microsoft':
        case 'mc':
        case 'mi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[3].url, m, { packname: packname, author: author })
            })
          break
        case 'mozilla':
        case 'moz':
        case 'mo':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[13].url, m, { packname: packname, author: author })
            })
          break
        case 'openmoji':
        case 'omoji':
        case 'op':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[8].url, m, { packname: packname, author: author })
            })
          break
        case 'pixel':
        case 'pi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[7].url, m, { packname: packname, author: author })
            })
          break
        case 'samsung':
        case 'ss':
        case 'sa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[2].url, m, { packname: packname, author: author })
            })
          break
        case 'twitter':
        case 'tw':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[5].url, m, { packname: packname, author: author })
            })
          break
        case 'whatsapp':
        case 'wa':
        case 'wh':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[4].url, m, { packname: packname, author: author })
            })
          break
      }
    } catch (e) {
      throw er
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
handler.help = ['ᴇᴍᴏᴊɪ'].map(v => v + ' <ᴇᴍᴏᴊɪ>')
handler.tags = ['sticker']
handler.command = /^(emo(ji)?)$/i

module.exports = handler
