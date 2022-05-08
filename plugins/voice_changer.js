
let handler = async (m, {conn,command, usedPrefix }) => {
    const { exec } = require("child_process")
    const getRandom = (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`
    }
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    try{
    let set
    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
    if (/earrape/.test(command)) set = '-af volume=12'
    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
    if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
    if (/audio/.test(mime)) {
    m.reply(wait)
    let media = await conn.downloadAndSaveMediaMessage(quoted)
    let ran = getRandom('.mp3')
    exec(`ffmpeg -i ${media} ${set} ${ran}`, (err) => {
    fs.unlinkSync(media)
    if (err) return reply(err)
    let buff = fs.readFileSync(ran)
    conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
    fs.unlinkSync(ran)
    })
    } else throw `Reply to the audio you want to change with caption *${prefix + command}*`
    } catch(e){
        //m.reply(e)
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
handler.help = ['bass','blown','deep','earrape','fast','fat','nightcore','reverse','robot','slow','smooth','squirrel']
handler.tags = ['audio']
handler.command = /^(blown|bass|deep|earrape|fast|fat|nightcore|reverse|robot|slow|smooth|squirrel)$/i

module.exports = handler

