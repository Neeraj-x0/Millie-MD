const { getRam } = require("../lib");
let config = require('../config')
let {version} = require('../package.json')
const { convertTime } = require("../lib");
const { readdirSync } = require("fs");
const plugin = readdirSync("./plugins").length;
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
const date = new Date();
let owner = config.owner.split(',')
module.exports = {
  name: "help",
  alias: ["h", "cmd", "menu"],
  category: "ignore",
  async mbb({ msg, conn }, { q, map, prefix }) {
    if (q) {
      const data = [];
      const name = q.toLowerCase();
      const { command, prefix } = map;
      const cmd =
        command.get(name) ||
        [...command.values()].find((x) => x.alias.find((x) => x == args[0]));
      if (
        !cmd ||
        (cmd.category === "hidden" && !owner.includes(msg.sender))
      )
        return await msg.reply("Command not found");
      else data.push(`*Name:* ` + cmd.name);
      if (cmd.desc) data.push(`*Description:* ${cmd.desc}`);
      if (cmd.use)
        data.push(
          `*Use:* ${prefix}${cmd.name} ${cmd.use}\n\nNote: [] = optional, | = or, <> = must be filled`
        );

      return await msg.reply(data.join("\n"));
    } else {
      const { command } = map;
      const cmds = command.keys();
      let category = [];
      

      for (let cmd of cmds) {
        
        let info = command.get(cmd);
        if (!cmd) continue;
        if ('ignore'.includes(info.category.toLowerCase()))
          continue;
        cteg = info.category || "No Category";
        if (info.type == "changelog") continue;
        if (cteg == "hidden") continue;
        if (!cteg || cteg === "private") cteg = "owner command";
        if (Object.keys(category).includes(cteg)) category[cteg].push(info);
        else {
          category[cteg] = [];
          category[cteg].push(info);
        }
      }
      let str =
        "```" +
        `╭══════ MILLIE ══════⊷
┃ ╭──────────────
┃ │ Prefix : ${prefix}
┃ │ User : ${msg.pushName}
┃ │ Time : ${date.toLocaleTimeString()}
┃ │ Day : ${date.toLocaleString("en", { weekday: "long" })}
┃ │ Date : ${date.toLocaleDateString("hi")}
┃ │ Version : ${version}
┃ │ Ram : ${getRam()}
┃ │ Plugins : ${plugin}
┃ │ Uptime : ${convertTime(map.uptime.getTime())}
┃ ╰───────────────
╰═════════════════⊷` +
        "```" +
        `

${readMore}
`;
      const keys = Object.keys(category);

      for (const key of keys) {
        str += `╭────❏ *${key.toUpperCase()}*
│\n${category[key]
          .map(
            (cmd, index) =>
              `│ *${
                index + 1
              }.* *${cmd.name.toUpperCase()}*\n│ *${cmd.desc.toLowerCase()}* ${
                cmd.category == "private"
                  ? ""
                  : cmd.use
                  ? cmd.use.replace(">", " 」").replace("<", "「 ")
                  : ""
              }`
          )
          .join("\n│\n")}\n│\n╰─────────────────\n`;
      }

      const { tiny } = require("../lib");

     // await conn.sendMessage(msg.from, { text: tiny(str) });
      await conn.sendMessage(
				msg.from,
				{
					video: { url: config.thumbvideo },
					caption: tiny(str),
					gifPlayback: true,
				},
				{ quoted: msg ,adReply:false }
			);
    }
  },
};
