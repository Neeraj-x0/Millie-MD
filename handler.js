let { Presence } = require('@adiwajshing/baileys')
let { performance } = require('perf_hooks')
const simple = require('./lib/simple')
const util = require('util')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))



const more = String.fromCharCode(8206)
global.readMore = more.repeat(4001)

module.exports = {
    async handler(chatUpdate) {
        if (global.db.data == null) await loadDatabase()
        this.msgqueque = this.msgqueque || []
        if (!chatUpdate) return
        let m = chatUpdate.messages[chatUpdate.messages.length - 1]
        let d = new Date(new Date + 3600000)
        
        const holiday = new Date('December 31, 2022 23:59:59')
        const now = new Date().getTime()
        const Difference = holiday - now
        const sonicx = Math.floor(Difference / (1000 * 60 * 60 * 24));
        const sonicx1 = Math.floor(Difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const sonicx2 = Math.floor(Difference % (1000 * 60 * 60) / (1000 * 60))
        const sonicx3 = Math.floor(Difference % (1000 * 60) / 1000)
        const sonicx4 = new Date('March 9, 2022 23:59:59')
        const sonicx5 = new Date().getTime()
        const sonicx6 = sonicx4 - sonicx5
        const sonicx7 = Math.floor(sonicx6 / (1000 * 60 * 60 * 24));
        const sonicx8 = Math.floor(sonicx6 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const sonicx9 = Math.floor(sonicx6 % (1000 * 60 * 60) / (1000 * 60))
        const sonicxx = Math.floor(sonicx6 % (1000 * 60) / 1000)
        global.ulangTahun = `Not Enough ${sonicx7} Day ${sonicx8} O'clock ${sonicx9} Minute ${sonicxx} Seconds Again`
        global.tahunBaru = `Not Enough ${sonicx} Day ${sonicx1} O'clock ${sonicx2} Minute ${sonicx3} Seconds Again`
      
        let locale = 'id'
        let old = performance.now()
        let neww = performance.now()
        global.speed = neww - old + ' ms'
        global.delay = time => new Promise(res => setTimeout(res, time))
        global.week = d.toLocaleDateString(locale, { weekday: 'long' })
        global.date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
        global.weton = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][Math.floor(d / 84600000) % 7]
        global.dateIndia = Intl.DateTimeFormat("en-US", "Asia/Delhi");
        global.user = Object.keys(global.db.data.users).length
        global.users = Object.values(global.db.data.users).filter(user => user.registered == true).length
        let _uptime = process.uptime() * 1000
        global.uptime = clockString(_uptime)
        global.sock = conn
        global.namabot = conn.user.name
        global.urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;

        let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
        let nek = ne.split('\n')
        let neko = pickRandom(nek)

        global.img = neko // pickRandom(global.waifu)
        global.fla = pickRandom(global.flaaa)
        global.thumbr1 = pickRandom(neko)
        global.thumbr2 = pickRandom(neko)
        global.thumbx = pickRandom(global.tmbnld)
        global.thumbd = pickRandom(global.tmbnld)
        global.thumbt = pickRandom(global.tmbnld)
        global.thumbb = pickRandom(neko)

//================VERIFICATIONS==================//
        global.docverify =  {quoted:{
            key : {fromMe: false,
                   participant : '0@s.whatsapp.net'
                                },
               message: {
                            documentMessage: {
                            title: 'ᴍɪʟʟɪᴇ-ᴍᴅ', 
                            jpegThumbnail: thumburl
                                  }
                                }
                            }}

        
        global.gcverify = {quoted:{
            "key": {
                "fromMe": false,
                "participant": "0@s.whatsapp.net",
                "remoteJid": "0@s.whatsapp.net"
            },
            "message": {
                "groupInviteMessage": {
                    "groupJid": "120363040549014341@g.us",
                    "inviteCode": "BcOf8vB5KAlFQhb3c5d06b",
                    "groupName": "ᴍɪʟʟɪᴇ-ᴍᴅ", 
                    "caption": "ɴᴇᴇʀᴀᴊ-x0", 
                    'jpegThumbnail': thumburl
                }
            }
                            }}   
        
        global.locverify = {quoted:{
            key : {fromMe: false,
                   participant : '0@s.whatsapp.net'
                                },
               message: {
                            locationMessage: {
                            name: 'ᴍɪʟʟɪᴇ-ᴍᴅ',
                            jpegThumbnail: thumburl
                                  }
                                }
                            }}

        global.vidverify = {quoted:{
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net` 
                       },
            message: { 
                        "videoMessage": { 
                        "title":"ᴍɪʟʟɪᴇ-ᴍᴅ",
                        "h": `ɴᴇᴇʀᴀᴊ-x0`,
                        'seconds': '404', 
                        'caption': 'ᴍɪʟʟɪᴇ-ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ',
                        'jpegThumbnail': thumburl
                               }
                              }
                            }} 
                            
        global.vnverify = {quoted:{
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`
                       },
            message: { 
               "audioMessage": {
                        "mimetype":"audio/ogg; codecs=opus",
                        "seconds": "404",
                        "ptt": "true"
                               }
                             } 
                            }}
        
        global.productverify ={quoted :  {
            key:{
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})
            },
            message: {
                "productMessage": {
                    "product": {
                        "productImage":{
                            "mimetype": "image/jpeg",
                            "jpegThumbnail": thumburl
                        },
                        "title": "ᴍɪʟʟɪᴇ-ᴍᴅ",
                        "description": "ɴᴇᴇʀᴀᴊ-x0",
                        "currencyCode": "USD",
                        "priceAmount1000": "404000000",
                        "retailerId": "ᴍɪʟʟɪᴇ-ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ",
                        "productImageCount": 404
                    },
                    "businessOwnerJid": `0@s.whatsapp.net`
            }
            }
    }}
       
       global.troliverify = {quoted :
        {
            key : {
                                  participant : '0@s.whatsapp.net'
                                },
               message: {
                            orderMessage: {
                                    itemCount : 404,
                                    itemCoun : 404,
                                    surface : 404,
                                    message: 'ᴍɪʟʟɪᴇ-ᴍᴅ',
                                    orderTitle: 'ɴᴇᴇʀᴀᴊ-x0B',
                                    thumbnail: thumburl, 
                                    sellerJid: '0@s.whatsapp.net'
                  
                                  }
                                }
                              }}

                              

        let jax = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        let jbx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        let jcx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        let jdx = 'application/pdf'
        let jex = 'text/rtf'

        global.td = pickRandom([jax, jbx, jcx, jdx, jex])
        
        //global.nd = pickRandom(['𝐓𝐄𝐀𝐌-𝐄𝐋𝐄𝐂𝐓𝐑𝐀', '𝗧𝗘𝗔𝗠-𝗘𝗟𝗘𝗖𝗧𝗥𝗔', '𝘛𝘌𝘈𝘔-𝘌𝘓𝘌𝘊𝘛𝘙𝘈 ', '𝙏𝙀𝘼𝙈-𝙀𝙇𝙀𝘾𝙏𝙍𝘼', '𝚃𝙴𝙰𝙼-𝙴𝙻𝙴𝙲𝚃𝚁𝙰', 'ƬΣΛM-ΣᄂΣᄃƬЯΛ', 'тєαм-єℓє¢тяα', '†ÈÄM-ÈLÈÇ†RÄ', 'ᴛᴇᴀᴍ-ᴇʟᴇᴄᴛʀᴀ', '𝓣𝓔𝓐𝓜-𝓔𝓛𝓔𝓒𝓣𝓡𝓐', '𝓉𝑒𝒶𝐌-乇ᒪ𝒆℃Ŧ𝓻𝐀𝕝', '𝒯𝐸𝒜𝑀-𝐸𝐿𝐸𝒞𝒯𝑅𝒜 ', '𝒯𝐸𝒜𝑀-𝐸𝐿𝐸𝒞𝒯𝑅𝒜', '𝕋𝔼𝔸𝕄-𝔼𝕃𝔼ℂ𝕋ℝ𝔸', '🅃🄴🄰🄼-🄴🄻🄴🄲🅃🅁🄰', 'ₜₑₐₘ₋ₑₗₑCₜᵣₐ', 'ȶɛǟʍ-ɛʟɛƈȶʀǟ'])
        global.time = require('moment-timezone').tz('Asia/Kolkata').format('HH:mm:ss')

        
      
        if (!m) return

        try {
            m = simple.smsg(this, m) || m
            if (!m) return
          //      console.log(m)
            m.exp = 0
            m.limit = false
            try {
                let user = global.db.data.users[m.sender]
                if (typeof user !== 'object') global.db.data.users[m.sender] = {}
                if (user) {
                    if (!isNumber(user.healt)) user.healt = 0
                    if (!isNumber(user.level)) user.level = 0
                    if (!isNumber(user.exp)) user.exp = 0
                    if (!isNumber(user.title)) user.title = ''
                    if (!isNumber(user.limit)) user.limit = 20
                    if (!isNumber(user.lastclaim)) user.lastclaim = 0
                    if (!isNumber(user.lastjoin)) user.lastjoin = 0
                    if (!isNumber(user.money)) user.money = 0

                    if (!isNumber(user.diamond)) user.diamond = 0
                    if (!isNumber(user.iron)) user.iron = 0

                    if (!isNumber(user.common)) user.common = 0
                    if (!isNumber(user.uncommon)) user.uncommon = 0
                    if (!isNumber(user.mythic)) user.mythic = 0
                    if (!isNumber(user.legendary)) user.legendary = 0
                    if (!isNumber(user.pet)) user.pet = 0

                    if (!isNumber(user.potion)) user.potion = 0
                    if (!isNumber(user.sampah)) user.sampah = 0
                    if (!isNumber(user.armor)) user.armor = 0

                    if (!isNumber(user.kucing)) user.kucing = 0
                    if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
                    if (!isNumber(user.kuda)) user.kuda = 0
                    if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
                    if (!isNumber(user.rubah)) user.rubah = 0
                    if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
                    if (!isNumber(user.anjing)) user.anjing = 0
                    if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0

                    if (!isNumber(user.anakkucing)) user.anakkucing = 0
                    if (!isNumber(user.anakkuda)) user.anakkuda = 0
                    if (!isNumber(user.anakrubah)) user.anakrubah = 0
                    if (!isNumber(user.anakanjing)) user.anakanjing = 0
                    if (!isNumber(user.makananpet)) user.makananpet = 0

                    if (!isNumber(user.antispam)) user.antispam = 0
                    if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0

                    if (!isNumber(user.kayu)) user.kayu = 0
                    if (!isNumber(user.batu)) user.batu = 0
                    if (!isNumber(user.string)) user.string = 0
                    if (!isNumber(user.sword)) user.sword = 0
                    if (!isNumber(user.sworddurability)) user.sworddurability = 0
                    if (!isNumber(user.pickaxe)) user.pickaxe = 0
                    if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
                    if (!isNumber(user.fishingrod)) user.fishingrod = 0
                    if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0

                    if (!isNumber(user.paus)) user.paus = 0
                    if (!isNumber(user.kepiting)) user.kepiting = 0
                    if (!isNumber(user.gurita)) user.gurita = 0
                    if (!isNumber(user.cumi)) user.cumi = 0
                    if (!isNumber(user.buntal)) user.buntal = 0
                    if (!isNumber(user.dory)) user.dory = 0
                    if (!isNumber(user.lumba)) user.lumba = 0
                    if (!isNumber(user.lobster)) user.lobster = 0
                    if (!isNumber(user.hiu)) user.hiu = 0
                    if (!isNumber(user.udang)) user.udang = 0
                    if (!isNumber(user.ikan)) user.ikan = 0
                    if (!isNumber(user.orca)) user.orca = 0

                    if (!isNumber(user.lastadventure)) user.lastadventure = 0
                    if (!isNumber(user.lastfishing)) user.lastfishing = 0
                    if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
                    if (!isNumber(user.lastduel)) user.lastduel = 0
                    if (!isNumber(user.lastmining)) user.lastmining = 0
                    if (!isNumber(user.lasthunt)) user.lasthunt = 0
                    if (!isNumber(user.lastweekly)) user.lastweekly = 0
                    if (!isNumber(user.lastmonthly)) user.lastmontly = 0
                    if (!('registered' in user)) user.registered = false
                    if (!('language' in user)) user.language = 'en'
                    if (!user.registered) {
                        if (!('name' in user)) user.name = this.getName(m.sender)
                        if (!isNumber(user.age)) user.age = -1
                        if (!isNumber(user.regTime)) user.regTime = -1
                    }
                    if (!isNumber(user.warn)) user.warn = 0
                    if (!isNumber(user.afk)) user.afk = -1
                    if (!('afkReason' in user)) user.afkReason = ''
                    if (!('autolevelup' in user)) user.autolevelup = false
                    if (!('banned' in user)) user.banned = false
                    if (!('level' in user)) user.level = 0
                    if (!('owner' in user)) user.owner = false
                    if (!isNumber(user.ownerTime)) user.ownerTime = 0
                    if (!('moderator' in user)) user.moderator = false
                    if (!isNumber(user.moderatorTime)) user.moderatorTime = 0
                    if (!('premium' in user)) user.premium = false
                    if (!isNumber(user.premiumTime)) user.premiumTime = 0
                    if (!user.role) user.role = 'Bronze'
                    if (!('sw' in user)) user.sw = false
                    if (!('pasangan' in user)) user.pasangan = ''
                    if (!('autodownload' in user)) user.autodownload = true
                    if (!('simi' in user)) user.simi = false
                } else global.db.data.users[m.sender] = {
                    healt: 100,
                    level: 0,
                    title: '',
                    exp: 0,
                    limit: 20,
                    lastclaim: 0,
                    lastjoin: 0,
                    money: 0,
                    diamond: 0,
                    iron: 0,
                    common: 0,
                    uncommon: 0,
                    mythic: 0,
                    legendary: 0,
                    pet: 0,
                    potion: 0,
                    sampah: 0,
                    armor: 0,
                    kucing: 0,
                    as: 0,
                    paus: 0,
                    kepiting: 0,
                    gurita: 0,
                    cumi: 0,
                    buntal: 0,
                    dory: 0,
                    lumba: 0,
                    lobster: 0,
                    hiu: 0,
                    udang: 0,
                    ikan: 0,
                    orca: 0,
                    kucinglastclaim: 0,
                    kuda: 0,
                    kudalastclaim: 0,
                    rubah: 0,
                    rubahlastclaim: 0,
                    anjing: 0,
                    anjinglastclaim: 0,
                    afkReason: '',
                    anakkucing: 0,
                    anakkuda: 0,
                    anakrubah: 0,
                    anakanjing: 0,
                    makananpet: 0,
                    antispam: 0,
                    antispamlastclaim: 0,
                    kayu: 0,
                    batu: 0,
                    string: 0,
                    sword: 0,
                    sworddurability: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,
                    lastadventure: 0,
                    lastfishing: 0,
                    lastdungeon: 0,
                    lastduel: 0,
                    lastmining: 0,
                    lasthunt: 0,
                    lastweekly: 0,
                    lastmonthly: 0,
                    registered: false,
                    language: 'en',
                    name: this.getName(m.sender),
                    age: -1,
                    regTime: -1,
                    warn: 0,
                    afk: -1,
                    afkReason: '',
                    autolevelup: false,
                    banned: false,
                    level: 0,
                    owner: false, 
                    ownerTime: 0,
                    moderator: false, 
                    moderatorTime: 0,
                    premium: false,
                    premiumTime: 0,
                    role: 'Bronze',
                    sw: false,
                    pasangan: '',
                    autodownload: true,
                    simi: false,
                }
                let chat = global.db.data.chats[m.chat]
                if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
                if (chat) {
                    if (!('isBanned' in chat)) chat.isBanned = false
                    if (!('welcome' in chat)) chat.welcome = true
                    if (!('detect' in chat)) chat.detect = true
                    if (!('sWelcome' in chat)) chat.sWelcome = ''
                    if (!('sBye' in chat)) chat.sBye = ''
                    if (!('sPromote' in chat)) chat.sPromote = ''
                    if (!('sDemote' in chat)) chat.sDemote = ''
                    if (!('descUpdate' in chat)) chat.descUpdate = true
                    if (!('delete' in chat)) chat.delete = true
                    if (!('antiBadword' in chat)) chat.antiBadword = true
                    if (!('rpg' in chat)) chat.rpg = true
                    if (!('nsfw' in chat)) chat.nsfw = true
                    if (!('stiker' in chat)) chat.stiker = false
                    if (!('antiBadword' in chat)) chat.antiBadword = true
                    if (!('antiLink' in chat)) chat.antiLink = false
                    if (!('antiVrtext' in chat)) chat.antivirtext = true
                    if (!('antiToxic' in chat)) chat.antitoxic = true
                    if (!('antidelete' in chat)) chat.antidelete = true
                    if (!isNumber(chat.expired)) chat.expired = 0
                    if (!('viewonce' in chat)) chat.viewonce = true
                    if (!('autoread' in chat)) chat.autoread = false
                    if (!('autodelvn' in chat)) chat.autodelvn = false
                    if (!isNumber(chat.autodelvnTime)) chat.autodelvnTime = (new Date() * 1) + 3600000 * 1
                    if (!('clear' in chat)) chat.clear = false
                    if (!isNumber(chat.clearTime)) chat.clearTime = (new Date() * 1) + 3600000 * 1
                    if (!('autodownload' in chat)) chat.autodownload = true
                    if (!('getmsg' in chat)) chat.getmsg = true
                    if (!('simi' in chat)) chat.simi = false
                } else global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: true,
                    detect: true,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    descUpdate: true,
                    delete: true,
                    rpg: true,
                    nsfw: true,
                    stiker: false,
                    antiBadword: true,
                    antiLink: false,
                    antiVirtext: true,
                    antiToxic: true,
                    antidelete: true,
                    expired: 0,
                    viewonce: true,
                    autoread: false,
                    autodelvn: false,
                    autodelvnTime: (new Date() * 1) + 3600000 * 1,
                    clear: false,
                    clearTime: (new Date() * 1) + 3600000 * 1,
                    autodownload: true,
                    getmsg: true,
                    simi: false,
                }
                let settings = global.db.data.settings[this.user.jid]
                if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
                if (settings) {
                    if (!'anon' in settings) settings.anon = true
                    if (!'anticall' in settings) settings.anticall = true
                    if (!'antispam' in settings) settings.antispam = true
                    if (!'antitroli' in settings) settings.antitroli = true
                    if (!'backup' in settings) settings.backup = false
                    if (!isNumber(settings.backupDB)) settings.backupDB = 0
                    if (!'developerMode' in settings) settings.developerMode = global.devx
                    if (!'groupOnly' in settings) settings.groupOnly = false
                    if (!'jadibot' in settings) settings.groupOnly = false
                    if (!'mature' in settings) settings.mature = true
                    if (!isNumber(settings.status)) settings.status = 0
                    if (!'statusUpdate' in settings) settings.statusUpdate = false
                    if (!'antivirus' in settings) settings.antivirus = false
                    if (!'publicjoin' in settings) settings.publicjoin = false
                    if (!'autogetmsg' in settings) settings.autogetmsg = true
                    if (!('tosw' in settings)) settings.tosw = global.owner[0] + '@s.whatsapp.net'
                } else global.db.data.settings[this.user.jid] = {
                    anon: true,
                    anticall: true,
                    antispam: true,
                    antitroli: true,
                    backup: false,
                    backupDB: 0,
                    developerMode: global.devx, 
                    groupOnly: false,
                    jadibot: false,
                    mature: true, 
                    status: 0,
                    statusUpdate: false,
                    antivirus: false,
                    publicjoin: false,
                    autogetmsg: true,
                    tosw: global.owner[0] + '@s.whatsapp.net',
                }
            } catch (e) {
                console.error(e)
            }
            global.lang = global.db.data.users[m.sender].language
            if (opts['nyimak']) return
            if (!m.fromMe && opts['self']) return
            if (opts['pconly'] && m.chat.endsWith('s.whatsapp.net')) return
            if (opts['gconly'] && !m.chat.endsWith('g.us')) return
            if (opts['swonly'] && m.chat !== 'status@broadcast') return
            if (typeof m.text !== 'string') m.text = ''
            if (opts['queque'] && m.text) {
                this.msgqueque.push(m.id || m.key.id)
                await delay(this.msgqueque.length * 1000)
            }
            for (let name in global.plugins) {
                let plugin = global.plugins[name]
                if (!plugin) continue
                if (plugin.disabled) continue
                if (!plugin.all) continue
                if (typeof plugin.all !== 'function') continue
                try {
                    await plugin.all.call(this, m, chatUpdate)
                } catch (e) {
                    if (typeof e === 'string') continue
                    console.error(e)
                }
            }
            if (m.isBaileys) return
            m.exp += Math.ceil(Math.random() * 10)

            let usedPrefix
            let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

            let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            let isOwner = isROwner || m.fromMe
            let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            let groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
            let participants = (m.isGroup ? groupMetadata.participants : []) || []
            let user = (m.isGroup ? participants.find(u => this.decodeJid(u.id) === m.sender) : {}) || {} // User Data
            let bot = (m.isGroup ? participants.find(u => this.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
            let isAdmin = user && user?.admin || false // Is User Admin?
            let isBotAdmin = bot && bot?.admin || false // Are you Admin?
            for (let name in global.plugins) {
                let plugin = global.plugins[name]
                if (!plugin) continue
                if (plugin.disabled) continue
                if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) {
                    //global.dfail('restrict', m, this)
                    continue
                }
                const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
                let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
                let match = (_prefix instanceof RegExp ? // RegExp Mode?
                    [[_prefix.exec(m.text), _prefix]] :
                    Array.isArray(_prefix) ? // Array?
                        _prefix.map(p => {
                            let re = p instanceof RegExp ? // RegExp in Array?
                                p :
                                new RegExp(str2Regex(p))
                            return [re.exec(m.text), re]
                        }) :
                        typeof _prefix === 'string' ? // String?
                            [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                            [[[], new RegExp]]
                ).find(p => p[1])
                if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                })) continue
                if (typeof plugin !== 'function') continue
                if ((usedPrefix = (match[0] || '')[0])) {
                    let noPrefix = m.text.replace(usedPrefix, '')
                    let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                    args = args || []
                    let _args = noPrefix.trim().split` `.slice(1)
                    let text = _args.join` `
                    command = (command || '').toLowerCase()
                    let fail = plugin.fail || global.dfail // When failed
                    let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                        plugin.command.test(command) :
                        Array.isArray(plugin.command) ? // Array?
                            plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                                cmd.test(command) :
                                cmd === command
                            ) :
                            typeof plugin.command === 'string' ? // String?
                                plugin.command === command :
                                false

                    if (!isAccept) continue
                    m.plugin = name
                    if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                        let chat = global.db.data.chats[m.chat]
                        let user = global.db.data.users[m.sender]
                        if (name != 'unbanchat.js' && chat && chat?.isBanned) return // Except this
                        if (name != 'unbanuser.js' && user && user?.banned) return
                    }
                    if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                        fail('owner', m, this)
                        continue
                    }
                    if (plugin.rowner && !isROwner) { // Real Owner
                        fail('rowner', m, this)
                        continue
                    }
                    if (plugin.owner && !isOwner) { // Owner UserJid
                        fail('owner', m, this)
                        continue
                    }
                    if (plugin.mods && !isMods) { // Moderator
                        fail('mods', m, this)
                        continue
                    }
                    if (plugin.premium && !isPrems) { // Premium
                        fail('premium', m, this)
                        continue
                    }
                    if (plugin.group && !m.isGroup) { // Group Only
                        fail('group', m, this)
                        continue
                    } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                        fail('botAdmin', m, this)
                        continue
                    } else if (plugin.admin && !isAdmin) { // User Admin
                        fail('admin', m, this)
                        continue
                    }
                    if (plugin.private && m.isGroup) { // Private Chat Only
                        fail('private', m, this)
                        continue
                    }
                    if (plugin.register == true && _user.registered == false) { // Need register?
                        fail('unreg', m, this)
                        continue
                    }
                    m.isCommand = true
                    let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                    if (xp > 200) conn.reply(m.chat,'squeak -_-') // Hehehe
                    else m.exp += xp
                    if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                        let cap = `Your limit is up, please buy via ${usedPrefix}buy or ${usedPrefix}buyall Be a premium user so that your limit is unlimited, if interested please type ${usedPrefix}premium`
                        let caption = await this.trans(lang, cap).catch(async _ => await this.trans2(lang, cap))
                        this.sendB(m.chat, caption, wm, null, [[`Buy`, `#buy1`], [`Buyall`, `#buyall`], [`Up To Premium`, `#uptopremiu`]], m)
                        // this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, m)
                        continue // Limit habis
                    }
                    if (plugin.level > _user.level) {
                        let cap = `Level ${plugin.level} required to use this command. Your level ${_user.level}, raise your level by typing ${usedPrefix}levelup or click the button below!` 
                        let caption = await this.trans(lang, cap).catch(async _ => await this.trans2(lang, cap))
                        this.sendB(m.chat, caption, wm, null, [[`Levelup`, `${usedPrefix}levelup`]], m)
                        // this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
                        continue // If the level has not been reached
                    }
                    let extra = {
                        match,
                        usedPrefix,
                        noPrefix,
                        _args,
                        args,
                        command,
                        text,
                        conn: this,
                        participants,
                        groupMetadata,
                        user,
                        bot,
                        isROwner,
                        isOwner,
                        isAdmin,
                        isBotAdmin,
                        isPrems,
                        chatUpdate,
                    }
                    try {
                        await plugin.call(this, m, extra)
                        if (!isPrems) m.limit = m.limit || plugin.limit || false
                      } catch (e) {
                        // Error occured
                        m.error = e
                        console.error(e)
                        if (e) {
                            let text = util.format(e)
                            for (let key of Object.values(global.APIKeys))
                                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                            let teks = await conn.trans(lang, text).catch(async _ => await conn.trans2(lang, text))
                            conn.reply(m.chat,teks, m.chat)
                        }
                    } finally {
                        // conn.reply(m.chat,util.format(_user))
                        if (typeof plugin.after === 'function') {
                            try {
                                await plugin.after.call(this, m, extra)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                        let lang = db.data.users[m.sender].language 
                        let lim = await this.trans(lang, 'Limit used').catch(async _ => await this.trans2(lang, 'Limit used'))
                        if (m.limit) conn.reply(m.chat,+ m.limit + ' ' + lim)
                    }
                    break
                }
            }
        } catch (e) {
            console.error(e)
        } finally {
            if (opts['typing']) conn.sendPresenceUpdate('composing', m.chat) 
            //console.log(global.db.data.users[m.sender])
            let user, stats = global.db.data.stats
            if (m) {
                if (m.sender && (user = global.db.data.users[m.sender])) {
                    user.exp += m.exp
                    user.limit -= m.limit * 1
                }

                let stat
                if (m.plugin) {
                    let now = + new Date
                    if (m.plugin in stats) {
                        stat = stats[m.plugin]
                        if (!isNumber(stat.total)) stat.total = 1
                        if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
                        if (!isNumber(stat.last)) stat.last = now
                        if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
                    } else stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                    stat.total += 1
                    stat.last = now
                    if (m.error == null) {
                        stat.success += 1
                        stat.lastSuccess = now
                    }
                }
            }
            try {
                require('./lib/print')(m, this)
            } catch (e) {
                //console.log(m, m.quoted, e)
            }
            if (opts['autoread']) await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })
            let quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (opts['queque'] && m.text && quequeIndex !== -1) this.msgqueque.splice(quequeIndex, 1)
        }
        
    },
    async participantsUpdate({ id, participants, action }) {
        let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
        string = "" + groupMetadata.desc ;
        description = string.toString();
       
        if (opts['self']) return

        // if (id in conn.chats) return // First login will spam
        if (global.isInit) return
        let chat = global.db.data.chats[id] || {}
        let text = ''
        switch (action) {
            case 'add':
            case 'remove':
                if (chat.welcome) {
                    
                    for (let user of participants) {
                        let pp = 'https://avatars.githubusercontent.com/u/101651973?v=4'
                        let gif = await fetch("https://telegra.ph/file/f0e789ae41d1be65bae76.mp4")
                        let mem = participants.length
                        try {
                            pp = await this.profilePictureUrl(user, 'image')
                        } catch (e) {
 
                        } finally {
                            text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', description) :
                                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user',await conn.getName(user))
                                img = thumburl
                                
                                this.sendTBI2(id, text, wm,img,"Source Code",git,`Menu`, `.menu`,action === 'add' ? 'ᴡᴇʟᴄᴏᴍᴇ' : 'ɢᴏᴏᴅʙʏᴇ', wm,{ mentions: [user]})
                           }
                   }
               }
               break             
            case 'promote':
                text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
            case 'demote':
                if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
                text = text.replace('@user', '@' + participants[0].split('@')[0])
                if (chat.detect) this.sendMessage(id, text, {
                    contextInfo: {
                        mentionedJid: this.parseMention(text)
                    }
                })
                break
        }
    },
    async delete({ remoteJid, fromMe, id, participant }) {
        if (fromMe) return
        let chats = Object.entries(conn.chats).find(([user, data]) => data.messages && data.messages[id])
        if (!chats) return
        let msg = JSON.parse(chats[1].messages[id])
        let chat = global.db.data.chats[msg.key.remoteJid] || {}
        if (chat.delete) return
        let caption = `
        @${participant.split`@`[0]} has deleted the message
        To turn off this feature, type #disable delete
`
        this.sendB(msg.key.remoteJid, caption, wm, null, [[`Turn on Anti-Delete`, `.enable delete`]], 
            msg, 
            {
            mentions: [participant]
        })
        this.copyNForward(msg.key.remoteJid, msg).catch(e => console.log("Syncing With Cloud"))
    }
}

global.dfail = async (type, m, conn) => {
    let usedPrefix
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
    let lang = db.data.users[m.sender].language 
    let msg = {
        rowner: `This Command Only For @${global.owner[0]}`,
        owner: `This Command Only For @${global.owner[0]}`,
        mods: `This Command is For Moderators Only`,
        moderator: `This Command is For Moderators Only`,
        prems: `This Command is For Premium Users Only`,
        premium: `This Command is For Premium Users Only`,
        group: `This Command Can Only Be Used Within Groups`,
        private: `This Command Can Only Be Used In Private Chats @${conn.user.jid.split('@')[0]}`,
        admin: `This Command Only For Group Admin`,
        botAdmin: `This Command Activates When Bot Becomes Admin`,
        unreg: `Not Registered, Please Register By Typing ${usedPrefix}register name.age`,
        adult: `Adult feature is not active, please contact the owner to activate it`,
        nsfw: `NSFW feature is not active, please contact the owner to activate it`,
        game: `GAME feature is not active, please contact the owner to activate it`,
        rpg: `The RPG feature is not active, please contact the owner to activate it`,
        restrict: `Admin feature is not active, please contact the owner to activate it`,
      }[type]
    if (msg) return conn.reply(m.chat,  msg, m, { mentions: conn.parseMention(msg), jpegThumbnail: await (await fetch(pp)).buffer() })
}

let fs = require('fs')
let chalk = require('chalk')
const { default: fetch } = require('node-fetch')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    delete require.cache[file]
    if (global.reloadHandler) console.log('Sync completed')
})

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h + ' HR ', m + ' MIN ', s + ' SEC'].map(v => v.toString().padStart(2, 0)).join(' ')
    //return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

global.tmbnld = [
    'https://telegra.ph/file/55f2ea0a89d5cb4efbf47.jpg',
]



global.flaaa = [
    'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
    'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
    'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]
