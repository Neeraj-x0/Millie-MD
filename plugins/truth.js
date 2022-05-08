let handler = async (m, { conn, usedPrefix, command }) => {
    
    await conn.sendTB2(m.chat, `“${pickRandom(global.truth)}”`, wm,null,null,'NEXT PLAYER', `.tod` , 'PICK DARE',`.dare` )
  }
  handler.help = ['truth']
  handler.tags = ['fun']
  handler.command = /^(truth)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = true
  handler.tod = true
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  module.exports = handler
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  global.truth = [
   "What's the last thing you searched for on your phone ?",
   "What's your most self-destructive behavior? ",
   "Do you practice what you say before making a call? Why?",
   "What would you do if you switched genders for a day?",
   "What is your guilty pleasure?",
   "Is there something that you've dreamed of doing for a long time? Why haven't you done it?",
   "Tell an embarrassing tale about yourself.",
   "What part of your body do you enjoy the most on a women/men?",
   "What do you like most about the person asking you this question?",
   "Worst date you've ever been on?",
   "What is the biggest turn off in a partner?",
   "Name three things you and the question asker appear to have in common.",
   "What would be important for a partner to know about you?",
   "Would you rather be the chaser or the chasee?",
   "What makes someone husband or wife material?",
   "Have you ever lied for truth in Truth or Dare?",
   "What’s the stupidest crush you’ve had?",
   "If you won 1,000,000 dollars in the lottery what would you do with the money?",
   "What is your dream job?",
   "If you could be a boy for the day, would you and why?",
   "If you only had 1 day to live, what would you do?",
   "What super power would you like to have and why?",
   "What is the strangest dream you ever had?",
   "Worst gift you have ever received?",
   "Name one person in the room you would least like to be stuck with on a desert island. Why?",
   "If you could make one person in the room your slave for a day who would it be?",
   "What is the meanest thing you’ve ever done?",
   "Who was your first crush?",
   "Have you ever cheated to win a game?",
   "Have you ever said something out loud that you were thinking without realizing you said it out loud? What was it?",
   "Have you ever kissed a boy?",
   "Worst birthday party gift you ever got?",
   "What was your most embarrassing moment?",
   "Who is the ugliest guy you’ve ever dated?",
   "Have you ever had a crush on your friend’s boyfriend?",
   "Have you ever stolen anything?",
   "Have you ever talked behind the back of someone in the room?",
   "What is one annoying habit of each person in the room?",
   "Have you ever lied to a teacher and what was it about?",
   "Worst grade you ever got on a paper?",
   "Most embarrassing thing anyone has ever said to you?",
   "Have you ever broken anything of someone else’s and not told the person?",
   "If you were on a deserted island what two people would you bring and why?",
   "What is the most embarrassing thing that ever happened to you at the mall?",
   "Who do you have a crush on?",
   "What do you like the most about everyone in the room?",
   "Have you ever fallen asleep in class?",
   "Have you ever played sick because you didn’t want to see a friend?",
   "Do you sneak snacks when your Mom isn’t looking?",
   "Do you sleep with a nightlight?",
   "Did you brush your teeth this morning?",
   "If you were a movie star which one would it be? Act it out.",
   "Are you afraid of the dark?",
   "Do you sleep with a stuffed animal or blankie?",
   "What animal do you want and what would you name it?",
   "What are you going to name your kids when you get married? How many?",
   "What does your Mom do for you that she would do for a little kid? (Cut your meat, tie your shoes, etc.)",
   "Have you ever got the giggles in an inappropriate place? Where and When?",
   "What is the funniest thing that has happened to you at school?",
   "What little kid's shows do you watch that no one knows about?",
   "Have you ever walked in your sleep?",
   "Who was the last note that you got and what did it say? Read it aloud.",
   "Have you ever gotten caught passing notes in class? Did the teacher read it out loud?",
   "Have you ever slipped and fallen at school?",
   "Have you ever held hands with a boy?",
   "What was your last dream about?",
   "If you had $100.00 what would you do with it?",
   "If you could change one thing about yourself what would it be?",
   "What's the dumbest thing you ever said or did around a boy you liked?",
   "If your friends could change one thing about you what do you think it would be?",
   "If you were an animal which one would you be? Why?",
   "If you had to go down the street to the end of the block at midnight would you have to take a friend or could you do it by yourself?",
   "Have you ever played ding-dong-ditch and gotten caught?",
   "Have you ever said something you wish you could take back? What was it?",
   "What are 3 things about you that no one in the room knows?",
   "Would you go to school in a Minnie Mouse costume for $50.00?",
   "Do you still play dress up?",
   "Who is not your friend now that you wish was still your friend?",
   "Do you still play Barbies?",
   "What is your secret wish?",
   "What was the worst day of your life?",
   "What was the best day of your life?",
   "Have you ever started a rumor about someone? What was it?",
   "If you could have bought any special gift for a birthday party what would it be?",
   "Have you ever incorporated food in your lovemaking?",
   "Which one of your friends would you like to have a fling with? ",
   "If you could only have one romantic night every year, what would you do?",
   "What’s an embarrassing way you tried to impress someone you were interested in?",
   "Have you ever written a love letter? ",
   "Have you ever had an affair? ",
   "What would you do if I had an affair with someone you were attracted to?",
   "Have you ever had a relationship you kept secret? Why? ",
  ]
  