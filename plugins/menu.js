const { version } = require('yargs')

let handler = async (m, { usedPrefix }) => {
await conn.sendPresenceUpdate('recording',m.chat)
const os = require('os')
    let context = `
╔══════════════════════
║
╠❐ 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : 𝐌𝐢𝐥𝐥𝐢𝐞
║
╠❐ 𝐋𝐈𝐁𝐑𝐀𝐑𝐘   : 𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃
║
╠❐ 𝐔𝐏𝐓𝐈𝐌𝐄    : ${uptime}
║
╠❐ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍   : 2.0.2(ʙᴇᴛᴀ)
║
╠❐ 𝐒𝐓𝐀𝐓𝐔𝐒    : 𝐀𝐋𝐈𝐕𝐄
║
╠❐ 𝐓𝐎𝐓𝐀𝐋 𝐔𝐒𝐄𝐑𝐒 : ${user}
║
╠❐ 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑𝐄𝐃 : ${users+5}
║
╠❐ 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: ${os.type()}
║
╚════════════════════════`
await conn.sendTBI2(m.chat, context.trim(), wm,thumburl,`sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ `, `https://github.com/Neeraj-x0/Millie-MD`, null,null, `ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs`, `${ usedPrefix}lst`,m)
}
handler.help = ['ᴍᴇɴᴜ']
handler.tags = ['main']
handler.command = /^(menu|help|list)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
