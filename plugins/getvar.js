const{getvar} = require('../lib')
module.exports = {
	name: "getvar",
	category: "owner",
	desc: "Sends the var",
    query:'getvar SUDO',
    isOwner : true,
	async mbb({ msg,conn },{q}) {
        let resp = await getvar(q)
conn.sendMessage(msg.from,{text:resp})      
	}
}