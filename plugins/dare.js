let handler = async (m, { conn, usedPrefix, command }) => {
    await conn.sendTB2(m.chat, `“${pickRandom(global.dare)}”`, wm,null,null, 'NEXT PLAYER', `.tod` , 'PICK TRUTH',`.truth` )
  }
  handler.help = ['dare']
  handler.tags = ['fun']
  handler.command = /^(dare)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = true
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  module.exports = handler
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  global.dare = [
      "Let another player post a status on your social.",
      "Do freestyle rap for 1 minute about the other participants.",
      "Kiss the person to your left.",
      "Do an impression of another player until someone can figure out who it is.",
      "Call your crush.",
      " Dance with no music for 1 minute.",
      "Do a cartwheel.",
      "Let the person on your right draw on your face.",
      "Give your phone to another player who can send one text saying anything they want to one of your contacts.",
      "Act like a chicken until your next turn",
      "Burp the alphabet.",
      "Call a friend, pretend it’s their birthday, and sing “Happy Birthday” to them.",
      "Perform ballet for 1 minute.",
      "End each sentence with the word “not” until your next turn.",
      "Dance like your life depends on it.",
      "Pour ice down your pants.",
      "Spin around 12 times and try to walk straight.",
      "Put on a blindfold and touch the other players’ faces until you can figure out who it is.",
      "Let the other players redo your hairstyle.",
      "Pretend to be a squirrel until your next turn.",
      "Let the player to your right redo your makeup.",
      "Dump a bucket or bottle of water on your head.",
      "Talk without closing your mouth.",
      "You have 5 minutes to write a country song and perform it.",
      "Let someone paint your nails any way they want.",
      "Propose someone other players choose.",
      "Do 5 minutes of stand-up comedy.",
      "Quack like a duck until your next turn.",
      "Let me blindfold you and wait patiently. ",
      "Show us some old intimate photos of yourself that We’ve never seen.",
      "Call an ex and tell them why I am a better partner",
      "Write an explicit letter for the previous player to read later",
      "Close your eyes and open your mouth. ",
      "Invite anyone in the group's choosing to join the call.",
      "Screen share your search history from today.",
      "Show the group an embarrassing photo from your childhood.",
      "Post an embarassing story on your instagram",
      "Whisper someone in the group’s name in a seductive way.",
      "Read lyrics to “Baby” by Justin Bieber to the group in your most seductive voice.",
      "Let the other players go through your phone for one minute.",
      "Let another person draw a tattoo on your back with a permanent marker.",
      "Pretend to be the person on your left for 10 minutes.",
      "Whisper a secret to the person on your right.",
      "Make eye contact with the person to your right.",
      "Attempt to break dance for 30 seconds.",
      "Get within one inch of the other person, look them straight in the eye, and tell them how you feel about them for one minute. Do not touch them.",
      "Let someone write a word on your forehead in permanent marker",
      "Let someone go through your YouTube history and read it out to the group",
      "Take a picture of your ‘O’ face. and send it to other players",
      "Make A Romantic Marriage Proposal To The Person On Your Left",
      "Hug the  person to the right",
      "Make a silly face and take a selfie and send it to others",
      "*Kiss the person to your right on the lips, whomever it may be.* \n\n```Gobble down some mints before you do so. Just a warning.```",
      "You have to be the group’s pet for 30 minutes."


  ]
