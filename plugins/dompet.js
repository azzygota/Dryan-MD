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
    let str = `╭─❏ Dompet Kamu
├ *👤Nama:* ${username}
├ *💵 Uang:* Rp.${money}
├ *📊 Xp:* ${exp}
├ *♻️ Limit:* ${limit}
├ *♥️ Nyawa (Health):* ${healt}
├ *💠 Level :* ${level}
├ *🍬 Role:* ${role}
╰───>  𝐷𝑟𝑦𝑎𝑛-𝑀𝐷 © 2022
`.trim()
    let mentionedJid = [who]
    m.reply(str)
  }
}
handler.help = ['dompet']
handler.tags = ['xp']
handler.command = /^dompet|bank|uang|exp$/i
module.exports = handler