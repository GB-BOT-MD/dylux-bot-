import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['59896172320', 'GABRIEL', true],
  ['59896449730'],
  ['59894243071']
]

global.mods = ['']
global.prems = ['59896172320', '59896449730', '59894243071']
global.botNumber = ['']
global.APIs = {
  nrtm: 'https:                    
  fgmods: '//fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = {
  'https:                                
}

global.packname = '//api.fgmods.xyz': 'fg_9XdnzCdQ'
}

global.packname = 'GABRIEL┃ᴮᴼᵀ'
global.author = '@GABRIEL'
global.botName = 'GABRIEL'
global.fgig = ''
global.fgsc = 'https://github.com/GB-BOT-MD/dylux-bot-.git'
global.fgyt = ''
global.fgpyp = ''
global.fglog = ''

global.id_canal = ''
global.fgcanal = ''
global.bgp = 'https:                                                     
global.bgp2 = '//chat.whatsapp.com/Ey48fxC1yva2r9Ix0wQbvn?mode=ac_t'
global.bgp2 = 'https://chat.whatsapp.com/F4T2BWm7zoeJrsENa4CTqm?mode=ac_t'
global.bgp3 = ''

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'
global.multiplier = 69
global.maxwarn = '2'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
