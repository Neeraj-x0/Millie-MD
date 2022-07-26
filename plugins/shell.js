const { exec } = require("child_process");
module.exports = {
  name: "$",
  noPrefix: true,
  category: "owner",
  desc: "Perform Shell Commands",
  isOwner:true,
  wait: true,
  async mbb({ msg }, { q }) {
    exec(q, (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        msg.reply(error);
        return;
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
        msg.reply(stderr);
        return;
      }
      msg.reply(stdout);
    });
  },
};
