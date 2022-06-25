global.util = require('util')
global.fs = require('fs')
global.fetch = require('node-fetch')
global.chalk = require('chalk')
global.os = require('os')
global.moment = require('moment-timezone')
global.axios = require('axios')
global.cheerio = require('cheerio')
global.scrape = require('./lib/scrape')
global.xfr = require('xfarr-api')
global.yzu = require('yuzzu-api')
global.dhn = require('dhn-api')
global.hxz = require('hxz-api')
global.bochil = require('@bochilteam/scraper')
global.baileys = require('@adiwajshing/baileys')

global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Moderator
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium users

global.devx = 'false'

global.owner = ["91917560920774"]
global.APIs = { // API Prefix
//======= name: 'https://website' ========//
  nrtm: 'https://nurutomo.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://api.neoxr.eu.org',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.me' 
}
global.APIKeys = { // APIKey Here
//======= 'https://website': 'apikey' =======//
  'https://api.lolhuman.xyz': '7ecba1cc37eca2e93d6a983b',
  'https://hardianto.xyx': 'hardianto',
  'https://api.neoxr.eu.org': 'yourkey',
  'https://api.xteam.xyz': 'benniismaelapikey',
  'https://api.zeks.me': 'apivinz'
}




 
global.ucpn = ''
global.linkgc = 'https://chat.whatsapp.com/HZ4c5yrsd0g8OfELZGySFZ'
global.linkig = 'https://www.instagram.com/khadh3r '
global.linkyt = 'https://www.instagram.com/khadh3r'
global.linkfb = 'https://www.instagram.com/khadh3r'
global.git = 'https://github.com'
global.web1 = 'https://www.instagram.com/khadh3r'
global.url = 'https://chat.whatsapp.com/FhPPp43dYlNLi499ZJuq5X'

//HEROKU  VARS
global.thumburl = process.env.IMAGE || 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fzombie-cartoon_61878-268.jpg%3Fw%3D2000&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fzombie%2F3&docid=L9BoKn95KKcRJM&tbnid=ktwkvuiYSg8V9M&vet=1&source=sh%2Fx%2Fim'
global.packname = process.env.PACKNAME ||'𝚉𝙾𝙼𝙱𝙸𝙴 bot'
global.author = process.env.AUTHOR ||'𝐊𝐇𝐀𝐃𝐇𝐄𝐑'
global.name = 'Millie MULTI-DEVICE'
global.session = process.env.SESSION_ID|| ''
global.wm = process.env.WATERMARK|| 'ＫＨＡＤＨＥＲ'
global.owner_name = process.env.OWNER_NAME || '𝐊𝐇𝐀𝐃𝐇𝐄𝐑'
global.logsmsg = convertToBool(process.env.LOGS)|| false

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}





global.deslink = ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'khadh3r'
global.wait = '_Please Wait_'
global.eror = '_Something went wrong please try again later_'
global.dtu = 'BOT HELP GROUP'
 



global.version = '2.0.1(ʙᴇᴛᴀ)'

global.multiplier = 69 // The higher, The harder levelup
global.nolink = 'No URL Found'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})


