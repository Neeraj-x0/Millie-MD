let levelling = require('../lib/levelling')
let handler = m => m
handler.before = async function (m) {
        let user = global.db.data.users[m.sender]
        let users = Object.entries(global.db.data.users).map(([key, value]) => {
                return { ...value, jid: key }
        })
        let pp = 'https://telegra.ph/file/e891ab641d5d71c70d938.png'
        let who = m.sender
        let name = conn.getName(who)
        let discriminator = who.substring(9, 13)
        let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
        let usersLevel = sortedLevel.map(enumGetKey)
        let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
        try {
                pp = await conn.profilePictureUrl(who, 'image')
        } catch (e) {

        } finally {

                if (!user.autolevelup) return !0
                let before = user.level * 1
                while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

                if (before !== user.level) {
                await this.sendBL(m.chat, `╭─── Level Up 」\n│•
 Name: *${name}*\n│•
 Tag: *@${who.split(`@`)[0]}*\n│•
 Previous level: *${before}*\n│•
 Level now: *${user.level}*\n\n\n_The more you interact with *bot* the easier level up!_`.trim(), wm, pp, [[`Level Up`, `.levelup`], [`Claim`, `.claim`]], m, {mentions: [who]})                            
       }
    }
}
module.exports = handler

function sort(property, ascending = true) {
        if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
        else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
        if (property) return (a, i, b) => {
                return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
        }
        else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
        return a.jid
}
