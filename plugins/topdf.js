module.exports = {
  name: "imgtopdf",
  alias: ["pdf", "topdf"],
  category: "converter",
  desc: "Convert Photos To PDF",
  query: `Enter your PDF file name or document name`,
  async mbb({ msg }, { q, map }) {
    if (map.pdf.has(msg.sender))
      return msg.reply( "You are still in the Image to pdf session")
    let pdf = map.pdf;
    pdf.set(msg.sender, { name: q, array: [] });
    await msg.reply(`Please send pictures one by one By replying to the image then type 
*add* to add a picture
When finished, type *done*, 
if you want to cancel type *cancel*`);
  },
};
