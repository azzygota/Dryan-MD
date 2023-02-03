
//────────────────────────────────────────────────────────────────────────────────────────                                                                                                                                                                                                                                                                */
global.DeveloperMode = 'true' //true Or false
global.linkGC = ['https://chat.whatsapp.com/CRWogYlwSNrCWCIoBhfLyJ']
global.channelYT = ['https://youtube.com/@dryan24'] 
global.owner = ['6289513082052']// Put your number here
global.mods = [ '6289513082052' ] // Want some help?
global.prems = [ '6289513081052' ] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  lolhuman : "https://api.lolhuman.xyz"
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
  'https://api.lolhuman.xyz' : 'zulfikarbot'
}

// Sticker WM
global.packname = '𝑆𝑡𝑖𝑐𝑘𝑒𝑟 𝐵𝑦 𝐷𝑟𝑦𝑎𝑛-𝑀𝐷'
global.author = '𝐷𝑟𝑦𝑎𝑛乡' 

global.multiplier = 72366367263636 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
