/// ⇏ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐜𝐢𝐨𝐧
import { world } from '@minecraft/server'
import { Icon, Name, Prefix, Tema, TemaL } from '../../confi/xtar.js'
import { Economylog, Economyreg } from '../util/xtar.js'

/// ⇏ 𝐗𝐭𝐚𝐫𝐢𝐧𝐠
function commands(msg) {
    let sender = msg.sender
    let msgs = msg.message.slice(Prefix.length).trim().split(' ')
    let commands = msgs.shift().toLowerCase()
    let arg = msgs.join('_').toLowerCase()
    let player = sender.name
    msg.cancel = true

    switch (commands) {
        case 'mod':
            if (player.hasTag('admin')) {
                if (arg[0] === 'on') {
                    Economyreg(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player}§r, Activation confirmée${Tema}.`, player)
                    player.runCommandAsync(`playsound beacon.power "${player}"`)
                } else {
                    Economyreg(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player}§r, veuillez utiliser un argument valide comme par exemple ${Tema}${Prefix} help§r pour recevoir la liste des commandes${Tema}.`, player)
                    player.runCommandAsync(`playsound note.pling "${player}"`)
                }
            } else {     
                Economyreg(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player}§r, vous ne pouvez pas accéder à cette commande${Tema}.`, player)
                player.runCommandAsync(`playsound note.pling "${player}"`)
            }
    }
}

/// ⇏ 𝐄𝐱𝐩𝐨𝐫𝐭𝐚𝐜𝐢𝐨𝐧
export { commands }