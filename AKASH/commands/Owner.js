module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
  description: "Owner information command with unique stylish box",
  commandCategory: "Information",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const ownerInfo = 
`╭────────────────────────╮
│        👑 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 👑       │
├────────────────────────┤
│ 👤 𝗡𝗮𝗺𝗲       : 𝙈𝙤𝙝𝙖𝙢𝙢𝙖𝙙 𝘼𝙠𝙖𝙨𝙝
│ 🧸 𝗡𝗶𝗰𝗸       : 𝘼𝙠𝙖𝙨𝙝
│ 🎂 𝗔𝗴𝗲        : 18+
│ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝙎𝙞𝙣𝙜𝙡𝙚
│ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : Student
│ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝙸𝚗𝚝𝚎𝚛 2𝚗𝚍 𝚈𝚎𝚊𝚛
│ 🏡 𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻 : 𝐃𝐡𝐚𝐤𝐚 - 𝐆𝐚𝐳𝐢𝐩𝐮𝐫
├────────────────────────┤
│       🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦 🔗       │
├────────────────────────┤
│ 📘 Facebook  : fb.com/arakashiam
│ 💬 Messenger: m.me/arakashiam
│ 📞 WhatsApp  : wa.me/01933165880
╰────────────────────────╯`;

  return api.sendMessage(ownerInfo, event.threadID, event.messageID);
};
