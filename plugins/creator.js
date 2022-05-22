

let handler = async(m, { conn }) => {
  let sound = [fs.readFileSync('./media/audio/1.mpeg'),
               fs.readFileSync('./media/audio/2.ogg'),
               fs.readFileSync('./media/audio/3.mpeg'),
               fs.readFileSync('./media/audio/4.mpeg'),
               fs.readFileSync('./media/audio/5.mpeg'),
               fs.readFileSync('./media/audio/6.mpeg'),
               fs.readFileSync('./media/audio/7.mpeg'),
               fs.readFileSync('./media/audio/8.mpeg'),
               fs.readFileSync('./media/audio/9.mpeg'),
               fs.readFileSync('./media/audio/10.mpeg'),
               fs.readFileSync('./media/audio/11.mpeg'),
               fs.readFileSync('./media/audio/12.mpeg'),
               fs.readFileSync('./media/audio/13.mpeg'),
               fs.readFileSync('./media/audio/14.mpeg')]
  let audio = pickRandom(sound)
  let msg = "🎈ɴᴏ ᴄᴀʟʟs ᴏɴʟʏ ᴍᴇssᴀɢᴇ"
  let name= m.sender
  let mail = 'krishnaneeraj775@gmail.com'
  let verfication = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: 'status@broadcast' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
   try {
await conn.sendContactArray(m.chat, [
    [`${owner[0]}`, `ɴᴇᴇʀᴀᴊ`,`Just a Chad with a curios Mind`,msg,mail]
],verfication) 
await conn.sendFile(m.chat,audio, 'file.mp4', '', m, 1, { mimetype: 'audio/mp4' },verfication)
   } catch {
 }
}
handler.help = ['ᴏᴡɴᴇʀ']
handler.tags = ['info']
handler.command = /^(owner)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

