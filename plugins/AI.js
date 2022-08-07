const {tiny} = require('../lib')
module.exports = {
	name: "ai",
	category: "Fun",
	desc: "AI Chatbot",
    isOwner:true,
    async mbb({ msg,conn},{q,prefix}) {
        await conn.sendMessage(msg.from, {
            text: tiny("Chatbot Mode"),
            footer: tiny("Turn on/off chatbot"),
            buttons: [
              {
                buttonId: `${prefix}setvar AI:false`,
                buttonText: { displayText: tiny("turn off") },
                type: 1,
              },{
                buttonId: `${prefix}setvar AI:true`,
                buttonText: { displayText: tiny("turn on") },
                type: 1,
              }
            ],
            headerType: 1,
          })
	}
};
