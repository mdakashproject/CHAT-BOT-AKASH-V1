module.exports.config = {
 name: "rules2",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Shahadat Islam",
 description: "Send group rules",
 commandCategory: "information",
 usages: "rules2",
 cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
 const message = `❐-আসসালামু আলাইকুম,🖤🌺
❐- 𝙶𝚁𝙾𝚄𝙿 এর কিছু 𝚁𝚄𝙻𝙴𝚂 আছে, এগুলো হয়তো অনেকেই জানেন না যারা জানেন না তারা জেনে রাখেন⬅️
<------------------------------------------------->

1. 🙊 ভদ্রতা বজায় রাখো।
2. 😂 মজার আড্ডা, গালি নয়।
3. 📢 স্প্যাম করা নিষিদ্ধ।
4. 📸 প্রাইভেসি রক্ষা করো।
5. 🤖 বটকে অতিরিক্ত টার্গেট করো না।
6. 💡 নতুনদের সাহায্য করো।
7. 🎯 লিঙ্ক শুধুমাত্র যাচাই করা শেয়ার করো।
8. 🏆 মজা করো, সবাইকে আনন্দ দাও।

<------------------------------------------------->
❖ কারও সমস্যা থাকলে সরাসরি 𝙰𝙳𝙼𝙸𝙽𝚂 দের ইনবক্স করুন 💌
❖ রুলস ভাঙলে আগে ওয়ার্নিং, পরে অ্যাকশন 😈

𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽: Mohammad Akash 
𝙵𝙱 𝙻𝙸𝙽𝙺: https://www.facebook.com/arakashiam

_সাথেই থাকুন 🌺─꯭─AI ASISTANT BY AKASH🌸_

💖...........ধন্যবাদ সবাইকে...........💖`;

 return api.sendMessage(message, event.threadID);
};
