let handler = async (m, {usedPrefix,command, conn }) => {
  const {delay} = require('@adiwajshing/baileys')
    if (global.conn.user.jid == conn.user.jid) {
    await conn.reply(m.chat,'_Restarting the Bot..._')
      await delay(100)
      process.send('reset')
  } else throw '_Try again Later_'
}

handler.help = ['ʀᴇsᴛᴀʀᴛ']
handler.tags = ['host']
handler.command = /^(res(tart)?)$/i

handler.rowner = true

module.exports = handler
