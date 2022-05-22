const { youtubeSearch } = require('@bochilteam/scraper')
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  try{if (!text) throw `Enter Query\nExample: *${usedPrefix}${command} dj i hope you're happy*`
  
  let results = await youtubeSearch(text)
  let thumb = results.video[0].thumbnail
  let anu = thumb+'.png'
  let { video, channel } = results 
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `    
󠄌󠄔󠄛󠄛󠄋󠄢߷ *Title:* ${v.title}
󠄌󠄔󠄛󠄛󠄋󠄢߷ *Duration:* ${v.durationH}
󠄌󠄔󠄛󠄛󠄋󠄢߷ *Uploaded:* ${v.publishedTime}
󠄌󠄔󠄛󠄛󠄋󠄢߷ *Viewers:* ${v.viewH} 
󠄌󠄔󠄛󠄛󠄋󠄢߷ *Link:* ${v.url}
`
      case 'channel': return `
߷ *Channel:* ${v.channelName}
󠄌󠄔󠄛󠄛󠄋󠄢߷ *Subscriber:* ${v.subscriberH} 
߷ *Total Video:* ${v.videoCount} video
󠄌󠄔󠄛󠄛󠄋󠄢߷ *Link:* ${v.url}
`
    }
  }).filter(v => v).join('\n==========================')
  try {
  conn.sendMedia(m.chat, anu, m, {caption: `🔎 *YouTube Search*\n`+teks, jpegThumbnail: await(await fetch(anu)).buffer()})
  } catch {
    throw teks
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
handler.help = ['ytsearch <ǫᴜᴇʀʏ>']
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i

module.exports = handler
