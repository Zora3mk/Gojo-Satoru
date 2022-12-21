//═══════════════════════════════════════════════════════//
//
//                              Zora-Bot by Zora
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['96171350883']
global.premium = ['96171350883']
global.ownernomer = '96171350883'
global.ownername = 'Zora'
global.botname = 'Zora-Ideal'
global.footer = 'Zora.'
global.myweb = 'https://youtube.com/@VEOEDITING'
global.packname = 'Zora-Ideal'
global.author = 'Zora'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'الميزة ذي للرجالة الادمن، بس تصير رجال تعال جربها 🐦',
    botAdmin: 'لازم اكون ادمن برذر',
    owner: 'الميزة ذي بس لعمك زورا 🐐',
    group: 'الميزة ذي تستعمل بس في القوربات 🙃👍',
    private: 'الميزة ذي تستعملها في البرايفت بس ولا 🙃👍',
    bot: 'الميزة ذي للبوت بس 🙃👍',
    wait: 'انتظر شو حب 👍🙃'
    error: 'خطأ,يمكن لان ال api key خالصة مدته',
    endLimit: 'خلصت المدة',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/zorrrra.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
