const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~QIp11ILL#x_dgJl0yWH3sRnLFT3L7l5qOQZ4LzKR9HSnF38YGJuQ"
global.botname = process.env.BOTNAME || "IMA_X_MD_V2"
global.ownernumber = process.env.OWNERNUMBER || "94711683227"
global.ownername = process.env.OWNERNAME || "IMALSHA"
global.websitex = process.env.WEBSITEX || "https://kavi-x-bot-login.up.railway.app/"
global.wagc = process.env.WAGC || "https://chat.whatsapp.com/CG9f0paHJzwDImXiydfuht"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.packname = process.env.PACKNAME || "KAVI-X MD"
global.author = process.env.AUTHOR || "Cyber Kavi"
global.creator = process.env.CREATOR || "94702128378@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.mongoDB = process.env.MONGODB_URI || "mongodb+srv://imalsharandip330:Imalsha123@#...@imalsha.5dts1eq.mongodb.net/?retryWrites=true&w=majority&appName=Imalsha"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
