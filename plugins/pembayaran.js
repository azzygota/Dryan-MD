let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╔════════════════════
║ *PEMBAYARAN*
╠════════════════════
║╭───❉ *VIA* ❉─────
║│
║│➸ *OVO*: -
║│➸ *DANA*: 089513081052
║│➸ *PULSA*:089513081052
║│➸ *GOPAY*: -
║│
║╰──────────────────
║ Silahkan Ketik *UP*
╠════════════════════
║       
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║        
╠════════════════════
║ _*POWERED BY 𝐷𝑟𝑦𝑎𝑛-𝑀𝐷*_
╚════════════════════
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 𝐷𝑟𝑦𝑎𝑛 𝑆𝐻𝑂𝑃 𝑇𝑒𝑟𝑝𝑒𝑟𝑐𝑎𝑦𝑎 🔥*', 'status@broadcast')
}
handler.customPrefix = /^(PEMBAYARAN)$/i
handler.command = new RegExp

module.exports = handler
 