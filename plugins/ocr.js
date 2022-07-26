const {ocr} = require('../lib')
module.exports = {
  name: "ocr",
  category: "Tools",
  desc: "Image to Text",
  isQuoted:true,
  wait: true,
  isMedia: {
    isQImage : true
  },
  async mbb({ msg }) {
    let buffer = await msg.quoted.download()
    ocr(buffer,msg)
    

  }}
