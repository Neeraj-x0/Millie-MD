let handler = async (m, { usedPrefix,command,text }) => {
try{
    let fetch = require('node-fetch')
    let sonic = await fetch(`http://api.brainshop.ai/get?bid=164728&key=MKPsfkgXLZPGrWoH&uid=teamcloseup&msg=${text}`)
    let json = await sonic.json()
    let {cnt}=json
    let res 
    try { res = await tts(cnt, 'en') }
    catch {
      res = await tts(cnt)
    } finally {
    conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
    }
    //conn.reply(m.chat,cnt)

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
handler.help = ['ai <message>']
handler.command =  /^(ai|chat)$/i
handler.sudo = true

module.exports = handler


function tts(text, lang = 'en') {
    let gtts = require('node-gtts')
    let fs = require('fs')
    let path = require('path')
    console.log(lang, text)
    return new Promise((resolve, reject) => {
      try {
        let tts = gtts(lang)
        let filePath = path.join(__dirname, '../tmp', (1 * new Date) + '.wav')
        tts.save(filePath, text, () => {
          resolve(fs.readFileSync(filePath))
          fs.unlinkSync(filePath)
        })
      } catch (e) { reject(e) }
    })
  }