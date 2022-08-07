const config = require('../config');
const { trt } = require('../lib');
module.exports = {
    name: "trt",
    alias:['translate'],
    desc:"Translate",
    category: "Tools",
    query:'Enter text to translate \nExample: text $ language \n language is optional',
    async mbb({ msg, conn },{q}) {
    let [text,lang] = q.split('$')
    lang = q.split('$')[1]||config.LANGUAGE
    trt(text, {from:'auto',to:lang}).then((s)=>{
       return msg.reply(s.text)
      })

    

      }
    }
