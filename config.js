module.exports = {
  owner: process.env.SUDO || "",
  thumbvideo: process.env.THUMBNAIL_VIDEO || "https://i.imgur.com/2kAp0f0.mp4",
  thumbImg: process.env.THUMBNAIL_IMAGE || "https://i.imgur.com/DfFk2Wx.jpeg",
  ownername: process.env.OWNER_NAME || "Neeraj-x0",
  prefix: process.env.PREFIX || ".",
  logs: ToBool(process.env.LOG_MSG) || true,
  bot_name: process.env.BOT_NAME || "Millie-MD",
  timezone: process.env.TIME_ZONE || "Asia/Kolkata",
  locale: "in",
  Session_Id: process.env.SESSION_ID || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  BRANCH: "master",
};
function ToBool(text, fault = "true") {
  return text === fault ? true : false;
}
