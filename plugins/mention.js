let handler = m => m
handler.all = async function (m, { conn}) {
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
               fs.readFileSync('./media/audio/14.mpeg'),
               fs.readFileSync('./media/audio/15.ogg'),
               fs.readFileSync('./media/audio/16.mpeg'),
               fs.readFileSync('./media/audio/17.mpeg'),
               fs.readFileSync('./media/audio/18.mpeg'),
               fs.readFileSync('./media/audio/19.mpeg'),
               fs.readFileSync('./media/audio/20.mpeg'),
               fs.readFileSync('./media/audio/21.mpeg'),
               fs.readFileSync('./media/audio/22.mpeg'),
               fs.readFileSync('./media/audio/23.mpeg'),
               fs.readFileSync('./media/audio/24.mpeg'),
               fs.readFileSync('./media/audio/25.mpeg'),
               fs.readFileSync('./media/audio/26.mpeg'),
               fs.readFileSync('./media/audio/27.mpeg'),
               fs.readFileSync('./media/audio/28.mpeg'),
               fs.readFileSync('./media/audio/29.mpeg'),
               fs.readFileSync('./media/audio/30.mpeg'),
               fs.readFileSync('./media/audio/31.mpeg'),
               fs.readFileSync('./media/audio/32.mpeg'),
               fs.readFileSync('./media/audio/33.mpeg'),
               fs.readFileSync('./media/audio/34.mpeg'),
               fs.readFileSync('./media/audio/35.mpeg'),
               fs.readFileSync('./media/audio/36.mpeg'),
               fs.readFileSync('./media/audio/37.mpeg'),
               fs.readFileSync('./media/audio/38.mpeg'),
               fs.readFileSync('./media/audio/39.mpeg'),
               fs.readFileSync('./media/audio/40.mpeg'),
               fs.readFileSync('./media/audio/41.mpeg'),
               fs.readFileSync('./media/audio/42.mpeg')]
  let audio = pickRandom(sound)

  for (let i of global.owner)
    if (m.text.includes('@'+i)){
        await this.sendFile(m.chat,audio, 'file.mp4', '', m, 1, { mimetype: 'audio/mp4' })
    }

}
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
