module.exports.config = {
  name: "adminmention",
  version: "1.3.0",
  hasPermssion: 0,
  credits: "MOHAMMAD AKASH",
  description: "Bot will reply angrily when someone tags any of the admins",
  commandCategory: "Other",
  usages: "@",
  cooldowns: 1
};

// Angry-style replies (৫০+)
const REPLIES = [
  "কি রে! আবার বসকে মেনশন করছিস? 😡",
  "রাগ হচ্ছে তোর এতো সাহস দেখে! 😤",
  "বস এখন রেগে আগুন, তোর জন্য অপেক্ষা করছে 🔥",
  "মেনশন দিছস আর তুই ভাবছোস chill? 😠",
  "আরেকবার মেনশন করলে বস সরাসরি ব্লক দিবে! ⚡",
  "তুই কি ভাবছোস বস তোর জন্য time waste করবে? 😾",
  "এত সাহস! আবার বসকে disturb করছিস? 😤",
  "মেনশন দিয়া লাভ নাই, বস তো এখন রেগে আছে 😡",
  "রাগে বস বলছে—\"এই আবালটা আবার কে?\" 😠",
  "তুই যদি এবারও মেনশন দিস, তোরে ইনবক্সে মারামারি দেখাবে 😤",
  "বসের রাগ control করার power নেই এখন! 😡🔥",
  "তোর সাহস দেখে বসের মাথা explode হতে পারে 💥😠",
  "আরেকবার disturb করলে বস সরাসরি Ignore করবে 😤",
  "এই সাহস তো limits cross করছে 😾",
  "বস এখন thinking mode-এ, তোর জন্য গালি ready 😡",
  "মেনশন দিলে লাভ নাই, শুধু ঝগড়া বাড়বে 😤",
  "তোর attention খোরি behavior এখন boss কে irritate করছে 😠",
  "কি রে! আবার কে disturb করল বসকে? 😡",
  "বস এখন rage mode-এ, তুই safe না 😤",
  "মেসেজ রাখো না, না হলে boss চিৎকার করবে 😡📣",
  "তুই কি ভাবছোস এভাবে মেনশন করলে মজা পাবে? 😾",
  "বস তো এখন angry, তোর জন্য অপেক্ষা করছে 🔥",
  "মেনশন মারছিস আর Boss chill করছে না 😠",
  "তুই যদি আবার disturb করিস, তোর block time শুরু 😤",
  "বসের patience শেষ, আরেকবার মেনশন দিস না 😡",
  "এইতো দেখি, আবার সাহস দেখাচ্ছিস 😠",
  "বস এখন ready to yell, silent থাকো 😤",
  "মেনশন দিস, আর Boss inner fire ignite 😡🔥",
  "তুই সাহসী, কিন্তু Boss বেশি রাগী 😠",
  "আরেকবার disturbance মানে full attention মারামারি 😤",
  "বস এখন thinking, তুই quiet থাক 😡",
  "এইতো দেখি আবার attention খোর behavior 😠",
  "বস ready to reply angrily 😤",
  "তুই কি জানিস Boss এখন mood full angry 😡",
  "মেনশন করলে Boss face explode 😠💥",
  "তুই সাহস দেখাস, Boss এখন furious 😤",
  "আরেকবার disturb করলে Inbox Fire 😡🔥",
  "Boss এখন thinking, তুই panic mode-এ 😠",
  "মেসেজ রাখলে Boss direct reply marbe 😤",
  "তুই আবার attention চাইছিস, Boss furious 😡",
  "এইতো দেখি, আবার disturbance 😠",
  "Boss এখন rage full, stay away 😤",
  "তুই কি ভাবছোস Boss calm থাকবে? 😡",
  "আরেকবার মেনশন মানে inbox chaos 😠",
  "Boss এখন angry, তুই safe না 😤",
  "মেসেজ দিলে Boss explosion 😡💥",
  "তুই আবার disturb করছিস? 😠 Boss furious!",
  "Boss এখন thinking mode, tori life danger 😤",
  "মেনশন করলে Boss Fire ignite 😡🔥",
  "তুই attention খোর, Boss furious 😠",
  "আরেকবার disturbance মানে Inbox Heat 😤",
  "Boss ready, তুই panic 😡",
  "তুই কি জানিস Boss anger limit cross 😠",
  "মেনশন দিলে Boss explode 😤",
  "তুই আবার disturb করলে Boss furious 😡🔥",
  "Boss এখন thinking, তুই beware 😠"
];

module.exports.handleEvent = function({ api, event }) {
  const adminIDs = ["100078049308655", "61552132761819", "61562187727716"].map(String);

  // Prevent bot from replying to admins themselves
  if (adminIDs.includes(String(event.senderID))) return;

  const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
  const isMentioningAdmin = adminIDs.some(id => mentionedIDs.includes(id));

  if (isMentioningAdmin) {
    const randomReply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    return api.sendMessage(randomReply, event.threadID, event.messageID);
  }
};

module.exports.run = async function() {};
