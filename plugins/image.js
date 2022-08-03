
const {gimage} = require('../lib')
module.exports = {
	name: "img",
	category: "Search",
	desc: "Google Image search",
    query:"Enter Search Term,number",
	async mbb({ msg,conn},{q}) {
        let [query,amount] = q.split(',')
        let result = await gimage(query,amount)
        conn.sendMessage(msg.from,{text:`_Downloading ${amount||5} images for ${query}_`})
        for (let i of result){
            conn.sendMessage(msg.from,{image:{url:i}})
        }
	}
}
