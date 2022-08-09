const { yts} = require("../lib");
module.exports = {
  name: "ytsearch",
  alias: ["yts"],
  category: "Search",
  desc: "Yotube search",
  query: "Give A Search term",
  async mbb({ msg, conn }, { q, prefix }) {
    yts(q).then(async ({video})=>{
      let str =``
      video.map(({authorName,url,title,durationH,viewH,publishedTime},num)=>{
        str+=`${num+1} ${title}\nViews : ${viewH}\nTime : ${durationH}\nPublished : ${publishedTime}\nChannel : ${authorName}\nURL : ${url} \n\n`  })
        await conn.sendMessage(msg.from, {text:str.trim()});
    })
    
  },
};
