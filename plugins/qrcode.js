const{qrcode} = require('../lib')
module.exports = {
	name: "qr",
	category: "converter",
	desc: "converts the string to qr",
	query :'Enter text ',
	async mbb({ msg,conn },{q}) {
let buff = await qrcode(q)
conn.sendMessage(msg.from,{image:buff},{quoted : msg })
	}
};
