let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
_Harga Diamonds Free Fire_
			 ๐ท๐๐ฆ๐๐-๐๐ท
			
โฆฟ 70 Diamonds = IDR 10.000

โฆฟ 100 Diamonds = IDR 15.000

โฆฟ 140 Diamonds = IDR 20.000

โฆฟ 210 Diamonds = IDR 30.000 

โฆฟ 355 Diamonds = IDR 50.000

โฆฟ 500 Diamonds = IDR 70.000

โฆฟ 720 Diamonds = IDR 100.000

โฆฟ 1000 Diamonds = IDR 140.000

โฆฟ 1080 Diamonds = IDR 150.000

โฆฟ 1440 Diamonds = IDR 200.000

โฆฟ 2005 Diamonds = IDR 270.000

โฆฟ 4005 Diamonds = IDR 535.000

โฆฟ M.MINGGUAN = IDR 30.000
โฆฟ M.BULANAN = IDR 118.000

Contoh Pembelian
355DM 263727482

Cara Pembelian
Ketik *NEXT*

Note : Pastikan ID Mu Benar Karena 
Diamond Tidak Masuk Bukan 
Tanggung Jawab Kami

โโโโโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโโโโ
             T E R P E R C A Y A
                	       *ยฉ๐ท๐๐ฆ๐๐*
             
             แดแดษดแดแดแดแด แดแดสsแดษด
         wa.me/6289513081052
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*๐ฅ ๐ท๐๐ฆ๐๐ ๐๐ป๐๐ ๐๐๐๐๐๐๐๐๐ฆ๐ ๐ฅ*', 'status@broadcast')
}
handler.customPrefix = /^(LIST TOP UP)$/i
handler.command = new RegExp

module.exports = handler
