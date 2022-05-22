
/*let handler = async (m,{usedPrefix,command}) => {
try {
const simpleGit = require('simple-git');
const git = simpleGit();

await git.init()
await git.fetch();
    var commits = await git.log('master..origin/master');
    if (commits.total === 0) {
        await conn.reply(m.chat,"*Your bot is completely up-to-date!*")
    } else {
        var changes = 'Updates Available';
        commits['all'].map(
            (commit) => {
                changes += '🎈 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
            }
        );
        
        await   conn.sendMessage(m.chat, changes + '```')
    }
}catch(e){
    conn.reply(m.chat,`Update Error`)
    conn.reply('120363022211098165@g.us',`𝗨𝗵𝗼𝗵! 𝗮𝗻 𝗲𝗿𝗿𝗼𝗿 𝗢𝗰𝗰𝘂𝗿𝗲𝗱 
  
  𝗘𝗿𝗿𝗼𝗿 : ${util.format(e)}
  
    𝗖𝗼𝗺𝗺𝗮𝗻𝗱 : ${usedPrefix+command}
    
    𝗣𝗼𝘀𝘀𝗶𝗯𝗹𝗲 𝗥𝗲𝗮𝘀𝗼𝗻𝘀 :
       • 𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗨𝘀𝗮𝗴𝗲 𝗢𝗳 𝗖𝗼𝗺𝗺𝗮𝗻𝗱
       • 𝗦𝗲𝗿𝘃𝗲𝗿 𝗘𝗿𝗿𝗼𝗿
       • 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 𝗘𝗿𝗿𝗼𝗿𝘀
       • 𝗘𝗿𝗿𝗼𝗿 𝗮𝘁 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿𝘀 𝗘𝗻𝗱
       • 𝗗𝗮𝘁𝗮 𝗡𝗲𝘁𝘄𝗼𝗿𝗸 𝗜𝘀𝘀𝘂𝗲𝘀 `, null, {})
  }}


handler.help = ['update']
handler.tags = ['owner']
handler.command = /^(update)$/i

module.exports = handler
*/