/*Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu Apalagi Lari Dari Tanggung Jawab

Base Ori : Hw Mods
Base Haikal Hw Mods : Copyan Dari Base Dika

• [ Recode Bye > ZetsuboXygen777]
   # AND↓
   THANKS TO >
  XygenGod777( Watashi / 私 )
  Hw Mods Wa / Haikal (Base)
  Adiwajshing (Baileys)
  whiskeysockets (Baileys)
  Thunder X7 (Inspirate)
  Pak Tzy (Inspirate)
  ♥️ ありがとう
                 >
*/
const fs = require('fs')
const chalk = require('chalk')

global.region = 'kenya' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = ' _𝐊𝐞𝐢𝐭𝐡𝐤𝐞𝐢𝐳𝐳𝐚𝐡_' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['254748387615'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '𝐊𝐄𝐈𝐓𝐇-𝐌𝐃 𝐁𝐔𝐆' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = ' _𝐊𝐞𝐢𝐭𝐡𝐤𝐞𝐢𝐳𝐳𝐚𝐡_' // ubah aja ini nama sticker
global.author = ' _𝐊𝐞𝐢𝐭𝐡𝐤𝐞𝐢𝐳𝐳𝐚𝐡_' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'classicsession' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = false
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
