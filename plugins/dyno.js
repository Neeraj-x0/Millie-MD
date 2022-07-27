const{dyno,secondsToDHMS} = require('../lib')
module.exports = {
	name: "dyno",
	category: "owner",
	desc: "shows the dyno usage",
    isOwner : true,
	async mbb({ msg,conn }) {
        let resp = await dyno();
        if(resp.startsWith('HEROKU'))  return msg.reply(resp)
        const total_quota = Math.floor(resp.account_quota);
        const quota_used = Math.floor(resp.quota_used);
        const remaining = total_quota - quota_used;
        const quota = `Total Quota : ${secondsToDHMS(total_quota)}
      Used  Quota : ${secondsToDHMS(quota_used)}
      Remaning    : ${secondsToDHMS(remaining)}`;
conn.sendMessage(msg.from,{text:quota})      
	}
};
