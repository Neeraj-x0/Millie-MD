let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await conn.reply(m.chat,'Resetting the Bot...\nPlease wait about 1 minute')
    await global.db.write()
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}
handler.help = ['resett' + (process.send ? '' : ' (Not working)')]
handler.tags = ['owner']
handler.command = /^resett$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

