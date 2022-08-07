const {ghstalk} = require('../lib')
module.exports = {
	name: "ghstalk",
	category: "Stalk",
	desc: "Github Stalk",
    query:"_Enter Username_",
	async mbb({ msg,conn},{q}) {
        ghstalk(q).then((data)=>{
            conn.sendMessage(msg.from,{image:{url:data.avatar_url},caption:`Name : ${data.name}\n\nUsername : ${data.login}\n\nBio :${data.bio}\n\nPublic Repos :  ${data.public_repos}\n\nFollowers : ${data.followers}\n\nFollowing : ${data.following}\n\nUrl : ${data.html_url}`})
          }).catch((e)=>{
            msg.reply(`_status : ${e.response.status}\n\nmessage :${e.response.statusText}_`)
          })
	}
}
