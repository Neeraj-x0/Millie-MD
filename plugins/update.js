const Heroku = require("heroku-client");
let { tiny } = require("../lib");
let config = require("../config");
const heroku = new Heroku({ token: config.HEROKU_API_KEY });
const simpleGit = require("simple-git");
const git = simpleGit();
module.exports = {
  name: "update",
  category: "owner",
  desc: "Check for updates",
  isOwner:true,
  async mbb({ msg, conn }, { q, prefix }) {
    await git.fetch();
    var commits = await git.log([config.BRANCH+ "..origin/" + config.BRANCH]);
    if (q === "now") {
      if (commits.total === 0)
        return await conn.sendMessage(msg.from, {
          text: tiny("You have the latest version installed"),
        });
      var app = await heroku.get("/apps/" + config.HEROKU_APP_NAME);
      await conn.sendMessage(msg.from, { text: "*ᴜᴘᴅᴀᴛɪɴɢ...*" });
      git.fetch("upstream", config.BRANCH);
      git.reset("hard", ["FETCH_HEAD"]);
      var git_url = app.git_url.replace(
        "https://",
        "https://api:" + config.HEROKU_API_KEY + "@"
      );
      try {
        try {
          await git.addRemote("heroku", git_url);
        } catch (e) {
          console.log(e);
        }

        await git.push("heroku", config.BRANCH);

        await conn.sendMessage(msg.from, { text: "*Updated...*" });

        await conn.sendMessage(msg.from, { text: "Restarting..." });
      } catch (e) {
        msg.reply(e);
      }
    }

    if (commits.total === 0) {
      await conn.sendMessage(msg.from, {
        text: tiny("You have the latest version installed"),
      });
    } else {
      var availupdate = "*ᴜᴘᴅᴀᴛᴇs ᴀᴠᴀɪʟᴀʙʟᴇ* \n\n";
      commits["all"].map((commit, num) => {
        availupdate += num + 1 + " ●  " + tiny(commit.message) + "\n";
      });
      return await conn.sendMessage(msg.from, {
        text: availupdate,
        footer: tiny("click here to update"),
        buttons: [
          {
            buttonId: `${prefix}update now`,
            buttonText: { displayText: tiny("update now") },
            type: 1,
          },
        ],
        headerType: 1,
      });
    }
  },
};
