let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let paus =global.DATABASE.data.users[m.sender].paus 
let kepiting = global.DATABASE.data.users[m.sender].kepiting 
let gurita = global.DATABASE.data.users[m.sender].gurita 
let cumi = global.DATABASE.data.users[m.sender].cumi 
let buntal = global.DATABASE.data.users[m.sender].buntal 
let dory = global.DATABASE.data.users[m.sender].dory 
let lumba = global.DATABASE.data.users[m.sender].lumba 
let lobster = global.DATABASE.data.users[m.sender].lobster 
let hiu = global.DATABASE.data.users[m.sender].hiu 
let udang = global.DATABASE.data.users[m.sender].udang 
let ikan = global.DATABASE.data.users[m.sender].ikan 
let orca = global.DATABASE.data.users[m.sender].orca
let name = m.fromMe ? conn.user : conn.contacts[m.sender]

let zer =`

 [  KOLAM  *${name.vnmae || name.notify || name.name}*  ]

*β‘οΈ   οΈ π¦ = [ ${kepiting} ] Ekor Kepiting*
*β‘οΈ   οΈ π¦ = [ ${lobster} ] Ekor Lobster*
*β‘οΈ   οΈ π¦ = [ ${udang} ] Ekor Udang*
*β‘οΈ   οΈ π¦ = [ ${cumi} ] Ekor Cumi*
*β‘οΈ   οΈ π = [ ${gurita} ] Ekor Gurita*
*β‘οΈ   οΈ π‘ = [ ${buntal} ] Ekor Buntal*
*β‘οΈ   οΈ π  = [ ${dory} ] Ekor Dory*
*β‘οΈ   οΈ π = [ ${orca} ] Ekor Orca*
*β‘οΈ   οΈ π¬ = [ ${lumba} ] Ekor Lumba* 
*β‘οΈ   οΈ π³ = [ ${paus} ] Ekor Paus*
*β‘οΈ   οΈ π¦ = [ ${hiu} ] Ekor Hiu*

_π·ππ¦ππ-ππ·_ Β©2023
 `.trim()
     conn.reply(m.chat, zer, m)

 listMsg = {
 buttonText: 'MULAI',
 footerText: '*π·ππ¦ππ-ππ· Β© 2023*',
 description: `Emm y udah lah mending main game aja`,
 sections: [
                     {
                      "title": `Cari βΊοΈ`,
 rows: [
                           {
                              "title": "βΊοΈ\n\nIya bg gw emang πΆ, maaf bg lain kali gw sewa ko",
                              "rowId": ""
                           },
                           {
                              "title": "βΊοΈ\n\nIya bg gw emang π·, maaf bg lain kali gw sewa ko",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
} 
handler.help = ['kolam']
handler.customPrefix = ['kolam']
handler.command = new RegExp
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

