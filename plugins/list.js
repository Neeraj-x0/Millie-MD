let { generateWAMessageFromContent, proto } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let { createHash} = require('crypto')
let { perfomance } = require('perf_hooks')
const os = require('os')
let moment = require('moment-timezone')
const { default: Users } = require('node-os-utils/lib/users')
const defaultMenu = {
  before: `╭────────────────╮
          ✪  *ᴍɪʟʟɪᴇ* ✪           
╰────────────────╯
     
`.trimStart(),
header: '┌─〔 %category 〕',
body: '├ %cmd',
footer: '└────\n',
after: ``,
}

let handler = async (m, { conn, usedPrefix: _p,command, args }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
      'main': 'ᴍᴀɪɴ', 
      'anime': 'ᴀɴɪᴍᴇ', 
      'group': 'ɢʀᴏᴜᴘ',
      'anonymous': 'ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛ', 
      'audio': 'ᴠᴏɪᴄᴇ ᴄʜᴀɴɢᴇʀ', 
      'downloader': 'ᴅᴏᴡɴʟᴏᴀᴅᴇʀ',
      'fun': 'ғᴜɴ',
      'game': 'ɢᴀᴍᴇ',
      'xp': 'ᴇxᴘ & ʟɪᴍɪᴛ',
      'info': 'ɪɴғᴏ',
      'internet': 'ɪɴᴛᴇʀɴᴇᴛ',
      'news': 'ɴᴇᴡs', 
      'nulis': 'ᴡʀɪᴛᴇ & ʟᴏɢᴏ',
      'premium': 'ᴘʀᴇᴍɪᴜᴍ', 
      'random': 'ʀᴀɴᴅᴏᴍ',
      'sticker': 'sᴛɪᴄᴋᴇʀ',
      'tools': 'ᴛᴏᴏʟs',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'education') tags = {
    'edukasi': 'Education'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo',
    'maker': 'Foto & Video Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'update') tags = {
    'update': 'Update'
  }
 

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { level, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const w = new Date();
    let week = weekday[w.getDay()];
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let who = m.sender
         
let aoa = `_ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ʟɪsᴛ ᴍᴇɴᴜ, ᴇᴀsɪʟʏ ᴏʀɢᴀɴɪsᴇᴅ ғᴏʀ ʏᴏᴜ_ `.trim()
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })
    if (teks == '404') {
        const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `Oi ${ucapan()}`,
            description: aoa,
            buttonText: 'sᴇʟᴇᴄᴛ ᴍᴇɴᴜ',
            listType: 1,
            footerText:wm,
            mtype: 'listMessage',
            sections: [
              {
                "rows": [
                  {
                    "title": `𝐌𝐈𝐋𝐋𝐈𝐄`,
                    "description": "sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ",
                    "rowId": ".git"
                  },
                  {
                    "title": "𝐒𝐓𝐈𝐂𝐊𝐄𝐑",
                    "description": "",
                    "rowId": ".lst stiker"
                  },
                   {
                    "title": "𝐗𝐏",
                    "description": "",
                    "rowId": ".lst xp"
  
                  },  {
                    "title": "𝐕𝐈𝐃𝐄𝐎 𝐌𝐀𝐊𝐄𝐑",
                    "description": "",
                    "rowId": ".lst videomaker"
  
                  }, { 
                  "title": "𝐀𝐍𝐈𝐌𝐄",
                  "description": "",
                  "rowId": ".lst anime"
                },  {
                    "title": "𝐐𝐎𝐔𝐓𝐄𝐒",
                    "description": "",
                    "rowId": ".lst quote"
                  }, {
                    "title": "𝐆𝐑𝐎𝐔𝐏",
                    "description": "",
                    "rowId": ".lst grup"
                  }, {
                    "title": "𝐏𝐑𝐄𝐌𝐈𝐔𝐌",
                    "description": "",
                    "rowId": ".lst premium"
                  }, {
                    "title": "𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓",
                    "description": "",
                    "rowId": ".lst internet"
                  }, {
                    "title": "𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒",
                    "description": "",
                    "rowId": ".lst anonymous"
                  }, {
                    "title": "𝐌𝐀𝐆𝐈𝐂 𝐒𝐇𝐄𝐋𝐋",
                    "description": "",
                    "rowId": ".lst magicshell"
                  }, {
                    "title": "𝐖𝐑𝐈𝐓𝐄 𝐀𝐍𝐃 𝐋𝐎𝐆𝐎",
                    "description": "",
                    "rowId": ".lst nulis"
                  }, {
                    "title": "𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑",
                    "description": "",
                    "rowId": ".lst downloader"
                  }, {
                    "title": "𝐓𝐎𝐎𝐋𝐒",
                    "description": "",
                    "rowId": ".lst tools"
                  }, {
                    "title": "𝐀𝐔𝐃𝐈𝐎 𝐄𝐃𝐈𝐓𝐎𝐑",
                    "description": "",
                    "rowId": `.lst audio`
                  }, {
                    "title": "𝐅𝐔𝐍",
                    "description": "",
                    "rowId": ".lst fun"
                  },
                  {
                    "title": "𝐆𝐀𝐌𝐄𝐒",
                    "description": "",
                    "rowId": ".lst game"
  
                  }, {
                    "title": "𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄",
                    "description": "",
                    "rowId": ".lst database"
                  },{
                    "title": "𝐎𝐖𝐍𝐄𝐑",
                    "description": "",
                    "rowId": ".lst owner"
                  }, {
                    "title": "𝐀𝐃𝐌𝐈𝐍",
                    "description": "",
                    "rowId": ".lst admin"
                  }
                ]
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}
    ),
    { userJid: m.participant || m.key.remoteJid, quoted: m });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id , mentions:[`${owner[0]}@s.whatsapp.net`] }
    ,m)
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Presented by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? `Ⓛ` : '')
                  .replace(/%isPremium/g, menu.premium ? `Ⓟ` : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      name, weton, week, date, time,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  await conn.sendTBI2(m.chat, text.trim(), wm,thumburl,`sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ `, `https://github.com/Neeraj-x0/Millie-MD`, `ᴏᴡɴᴇʀ`, `${_p}owner`, `ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs`, `.lst all`,m)
 
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
}
}
handler.command = /^(lst)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Kolkata').format('HH')
  res = "ᴅᴏɴ'ᴛ ғᴏʀɢᴇᴛ ᴛᴏ  sʟᴇᴇᴘ ʟᴜᴠ ᴜ<3"
  if (time >= 4) {
    res = "ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ"
  }
  if (time > 10) {
    res = "ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ"
  }
  if (time >= 15) {
    res = "ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ"
  }
  if (time >= 21) {
    res = "ɢᴏᴏᴅ ɴɪɢʜᴛ"
  }
  return res
}
