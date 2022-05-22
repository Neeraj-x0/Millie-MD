let handler = async (m, { conn,usedPrefix,command, args }) => {
  try{let chats
  if (/group|gc/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
  else if (/chat|private|pc/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid.endsWith('.net') && !v.pin).map(v => v.jid)
  else if (/all/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid && !v.pin).map(v => v.jid)
  else chats = [m.chat]
  let isDelete = /^(delete)/i.test(command)
  let isClear = /^(clear)/i.test(command)
  conn.reply(m.chat,`me${isDelete ? 'delete' : isClear ? 'clean up' : 'mute'} ${chats.length} chat ${args[0] ? args[0] : ''}`)
  for (let id of chats) {
    if (isDelete || isClear) await conn.modifyChat(id, (isDelete ? 'delete' : 'clear'), {
      includeStarred: false
    }).catch(console.log)
    else await conn.modifyChat(id, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
  }
  conn.reply(m.chat,`_*Finished*_`)
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
handler.help = [
  'clearchat',
  'clearchat chat',
  'clearchat group',
  'clearchat all',
  'deletechat',
  'deletechat chat',
  'deletechat group',
  'deletechat all',
  'mutechat',
  'mutechat chat',
  'mutechat group',
  'mutechat all'
]
handler.tags = ['owner']
handler.command = /^(clear|delete|mute)chat$/i
handler.owner = true

module.exports = handler
