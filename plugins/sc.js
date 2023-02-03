let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `chat owner wa.me//6289513081052
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🔥 *SC 𝐷𝑟𝑦𝑎𝑛-𝑀𝐷* 🔥', 'status@broadcast')
}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 20

module.exports = handler
 