let handler  = async (m, { conn }) => {
conn.reply(m.chat, 'Please Wait Processing Session', m)
conn.sendMedia(m.chat, 'session.data.json', m, {fileName: 'session.data.json'})
}
handler.help = ['ɢᴇᴛsᴇssɪᴏɴ']
handler.tags = ['host']
handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i

handler.rowner = true

module.exports = handler
