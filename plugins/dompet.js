let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, level, lastclaim, registered, regTime, age, money, healt, role } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `β­ββ Dompet Kamu
β *π€Nama:* ${username}
β *π΅ Uang:* Rp.${money}
β *π Xp:* ${exp}
β *β»οΈ Limit:* ${limit}
β *β₯οΈ Nyawa (Health):* ${healt}
β *π  Level :* ${level}
β *π¬ Role:* ${role}
β°βββ>  π·ππ¦ππ-ππ· Β© 2022
`.trim()
    let mentionedJid = [who]
    m.reply(str)
  }
}
handler.help = ['dompet']
handler.tags = ['xp']
handler.command = /^dompet|bank|uang|exp$/i
module.exports = handler