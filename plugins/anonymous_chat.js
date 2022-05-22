
async function handler(m, { command, usedPrefix }) {
 try {   
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) {
                await this.sendB(m.chat, '_You are not in anonymous chat_', 'Want to find a cheating partner?', null, [['Start', `${usedPrefix}start`]], m)
                throw false
            }
            this.sendB(m.chat, '_You left the Anonymous chat room_', 'Want to play Anonymous again?', null, [['Yes', `${usedPrefix}start`], ['No', `${usedPrefix}say Ok thank you for using Anonymous Chat Bot, if you want to play again you can click the *Yes* button above!`]], m)
            let other = room.other(m.sender)
            if (other) await this.sendB(other, '_Partner left Chat_', 'Want to find a chat again?', null, [['Start Again', `${usedPrefix}start`]], m)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                await this.sendB(m.chat, '_You are still in anonymous chat_', 'Want to leave ?', null, [['Leave', `${usedPrefix}leave`]], m)
                throw false
            }
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.sendB(room.a, '_Partner found!_', 'Please chat🤗', null, [['Halo', '👋']], m)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendB(room.b, '_Partner Found!_', 'Please chat🤗', null, [['Hai', '👋']], m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendB(m.chat, '_Waiting for partners..._', 'If you are bored waiting, Click below to exit!', null, [['Leave', `${usedPrefix}leave`]], m)
            }
            break
        }
    }

} catch(e){
    m.reply(`${e}`)
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
handler.help = ['𝚂𝚃𝙰𝚁𝚃' ,'𝙻𝙴𝙰𝚅𝙴']
handler.tags = ['anonymous']
handler.command = ['start', 'leave']//, 'next', 'skip']

handler.private = true

module.exports = handler
