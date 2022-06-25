let handler = async (m, { usedPrefix}) => {
let credit = `
\t\t\t\t\t\t\t*THANKS TO*

*TOXIC ALIEN:*
      &
  *KHADHER*
`
 conn.sendTBI(m.chat, credit, wm, 'https://telegra.ph/file/5a7adde75e966077a7692.jpg', `SOURCE CODE`, `https://github.com`, null, null, 'Menu', `${usedPrefix}menu`, null, null, null, null, m) 
}
handler.help = ['credits']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to)$/i

module.exports = handler
