let handler = async (m, { conn,usedPrefix,command, text }) => {
    try {let id = m.chat
    conn.math = conn.math ? conn.math : {}
    if (id in conn.math) {
      clearTimeout(conn.math[id][3])
      delete conn.math[id]
      conn.reply(m.chat,'Hmmm...cheat?')
    }
    let val = text
      .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π|pi/gi, 'Math.PI')
      .replace(/e/gi, 'Math.E')
      .replace(/\/+/g, '/')
      .replace(/\++/g, '+')
      .replace(/-+/g, '-')
    let format = val
      .replace(/Math\.PI/g, 'π')
      .replace(/Math\.E/g, 'e')
      .replace(/\//g, '÷')
      .replace(/\*×/g, '×')
    try {
      console.log(val)
      let result = (new Function('return ' + val))()
      if (!result) throw result
      conn.reply(m.chat, `*${format}* = _${result}_`, m)
    } catch (e) {
      if (e == undefined) throw 'What\'s in it?'
      throw 'Incorrect format, only 0-9 and Symbol -, +, *, /, ×, ÷, π, e, (, ) are supported'
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
  handler.help = ['ᴄᴀʟᴄ <ǫᴜᴇsᴛɪᴏɴ>']
  handler.tags = ['tools']
  handler.command = /^(calc(ulat(e|or))?)$/i
  handler.exp = 5
  handler.register = false
  module.exports = handler