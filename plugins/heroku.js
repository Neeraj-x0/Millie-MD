const {
  dyno,
  setvar,
  secondsToDHMS,
} = require("../lib");

const Heroku = require('heroku-client');
const config = require("../config");
const heroku = new Heroku({
    token: config.HEROKU_API_KEY
})
let baseURI = '/apps/' + config.HEROKU_APP_NAME;

module.exports = {
  name: "heroku",
  alias: [
    "dyno",
    "setvar",
    "delvar",
    "allvar",
    "restart",
    "shutdown",
    "getvar",
  ],
  desc: "Heroku Settings Menu",
  async mbb({ msg, conn }, { q, command }) {
    console.log(command);
    switch (command) {
      case "dyno":
        {
          let resp = await dyno();
          if (resp.code) return msg.reply(resp.msg);
          const total_quota = Math.floor(resp.account_quota);
          const quota_used = Math.floor(resp.quota_used);
          const remaining = total_quota - quota_used;
          const quota = `Total Quota : ${secondsToDHMS(
            total_quota
          )}\nUsed  Quota : ${secondsToDHMS(
            quota_used
          )}\nRemaning    : ${secondsToDHMS(remaining)}`;
          conn.sendMessage(msg.from, { text: quota });
        }
        break;
      case "setvar":
        {
          if (!q) return msg.reply("setvar KEY:value");
          let [key, value] = q.split(":");
          if (!key && !value) return msg.reply("setvar KEY:value");
          await setvar(key, value);
          msg.reply(`${key} : ${value}`);
        }
        break;
      case "delvar": {
        if (!q) return msg.reply("delvar KEY");
		heroku
			.get(baseURI + '/config-vars')
			.then(async (vars) => {
				const key = q.trim().toUpperCase()
				if (vars[key]) {
					await heroku.patch(baseURI + '/config-vars', {
						body: {
							[key]: null,
						},
					})
					return await msg.reply(`_Deleted ${key}_`)
				}
				await msg.reply(`_${key} not found_`)
			})
			.catch(async (error) => {
				await msg.reply(`HEROKU : ${error.body.message}`)
			})}
      break
      case "getvar":
        {
          if (!q) return msg.reply("getvar KEY");
          const key = q.trim().toUpperCase()
		heroku
			.get(baseURI + '/config-vars')
			.then(async (vars) => {
				if (vars[key]) {
					return await msg.reply(
						'_{} : {}_'.replace('{}', key).replace('{}', vars[key])
					)
				}
				await msg.reply(`${key} not found`)
			})
			.catch(async (error) => {
				await msg.reply(`HEROKU : ${error.body.message}`)
			})
        }
        break;
      case "allvar":
        {
          let str = 'Here your all Heroku vars\n\n\n'
		heroku
			.get(baseURI + '/config-vars')
			.then(async (keys) => {
				for (const key in keys) {
					str += `${key} : ${keys[key]}\n\n`
				}
				return await msg.reply(str)
			})
			.catch(async (error) => {
				await msg.reply(`HEROKU : ${error.body.message}`)
			})
        }
        break;
      case "restart":
        {
          await msg.reply(`_Restarting_`)
          await heroku.delete(baseURI + '/dynos').catch(async (error) => {
            await msg.reply(`HEROKU : ${error.body.message}`)
          })
            
        }
        break;
      case "shutdown":
        {
          await heroku
          .get(baseURI + '/formation')
          .then(async (formation) => {
            await msg.reply(`_Shutting down._`)
            await heroku.patch(baseURI + '/formation/' + formation[0].id, {
              body: {
                quantity: 0,
              },
            })
          })
          .catch(async (error) => {
            await msg.reply(`HEROKU : ${error.body.message}`)
          })

        }
        break;
      case "heroku":
        {
          let str = "Heroku Commands\n\n";
          this.alias.map((cmd, num) => {
            str += `${num + 1} ${cmd}\n`;
          });
          conn.sendMessage(msg.from, { text: str });
        }
        break;
    }
  },
};
