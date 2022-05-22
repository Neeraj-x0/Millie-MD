
let handler = m => m
handler.all = async function (m, {isBlocked }) {
    if (isBlocked) return
    let access
    if (m.isGroup) access = global.db.data.chats[m.chat]
    else access = global.db.data.users[m.sender]
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Invitation to join') || m.text.startsWith('Invitation to join') || m.text.startsWith('Open this link')) && !m.isBaileys && !m.isGroup) {
    let teks = `╭─── Invite Group 」
│•
 1 Week   - 20 RS
│•
 2 Week   - 30 RS
│•
 1 Month  - 60 RS
│•
 Lifetime - 100 RS
*_Buy 2 Get 1 premium Membership For Free_*


If interested contact: @${global.owner[0]} for order:)
`
    this.sendB(m.chat, teks, wm, null, [[`Rent & Up To Premium`, `.sewa`]], m, { mentions: this.parseMention(teks) })
    }

/*for (let i of _prefix)
    if (m.text.startsWith(i))
             conn.reply(m.chat, `No Command Found type .menu to see available commands`)*/


}



module.exports = handler


