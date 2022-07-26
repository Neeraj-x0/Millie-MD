module.exports = {
	name: "restart",
	category: "owner",
	isOwner:true,
	async mbb({ msg }, {q}) {
	await msg.reply('Restarting.....')
        process.send('reset')
	}
};