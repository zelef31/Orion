/// ⇏ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐜𝐢𝐨𝐧
import { world } from '@minecraft/server'
import { Icon, Name, Tema, TemaL, DO, DN, DE, DR, DCN, DCT, DD, DEM, DT } from '../../confi/xtar.js'
import { PrefixR, SDo, SD, EI, ED, PrefixCN, PrefixCT, PrefixD, PrefixE, PrefixT, PrefixF, PrefixET } from './lib/xtar.js'

/// ⇏ 𝐗𝐭𝐚𝐫𝐢𝐧𝐠
function chat(data) {
    data.cancel = true
    const player = data.sender
        if (player.hasTag('mute')) {
            player.tell(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, tu es muet${Tema}!!!§r`)
        } else if (player.hasTag(`${PrefixET}§cNe pas déranger`)) {
            player.tell(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, tu ne peux pas envoyer de messages tant que le mode ${Tema}Ne pas déranger§r activé${Tema}!!!§r`)
        } else {
            const runing = player.name
            const rank = (String) => { return player.getTags().filter(tag => tag.startsWith(String)).map(tag => tag.substring(String.length)).join(`${SDo}`) ?? DR }
            const color = (String) => { return player.getTags().filter(tag => tag.startsWith(String)).map(tag => tag.substring(String.length)).join(`§r`) ?? DCN }
            const text = (String) => { return player.getTags().filter(tag => tag.startsWith(String)).map(tag => tag.substring(String.length)).join(`§r`) ?? DCT }
            const dim = (String) => { return player.getTags().filter(tag => tag.startsWith(String)).map(tag => tag.substring(String.length)).join(`§r`) ?? DD }
            const emoji = (String) => { return player.getTags().filter(tag => tag.startsWith(String)).map(tag => tag.substring(String.length)).join(`§r`) ?? DEM }
            const name = (String) => { return player.getTags().filter(tag => tag.startsWith(String)).map(tag => tag.substring(String.length)).join(`§r`) ?? runing }
            const R = rank(`${PrefixR}`).length <= 0 ? DR : rank(`${PrefixR}`).replaceAll('+', EI + ED)
            const C = color(`${PrefixCN}`).length <= 0 ? DCN : color(`${PrefixCN}`)
            const T = text(`${PrefixCT}`).length <= 0 ? DCT : text(`${PrefixCT}`)
            const D = dim(`${PrefixD}`).length <= 0 ? DD : dim(`${PrefixD}`)
            const E = emoji(`${PrefixE}`).length <= 0 ? DEM : emoji(`${PrefixE}`)
            const N = name(`${PrefixF}`).length <= 0 ? runing : name(`${PrefixF}`)
            const form = `${D}§l §r${ED}${R}${EI} ${E}${C}${N} §r§l:§r ${T}${data.message.replaceAll('§', '.')}`
            if (player.hasTag(`${PrefixET}§7Hors ligne`)) {
                world.getDimension('overworld').runCommandAsync(`tellraw @a[tag=!"${PrefixET}§cNe pas déranger"] {"rawtext":[{"text":"${form}§r§o§7 {off}"}]}`)
            }
            if (player.hasTag(`${PrefixET}§gInactif`)) {
                world.getDimension('overworld').runCommandAsync(`tellraw @a[tag=!"${PrefixET}§cNe pas déranger"] {"rawtext":[{"text":"${form}§r§o§7 {zzz}"}]}`)
            }
            if (!player.hasTag(`${PrefixET}§7Hors ligne`)) {
                if (!player.hasTag(`${PrefixET}§gInactif`)) {
                    world.getDimension('overworld').runCommandAsync(`tellraw @a[tag=!"${PrefixET}§cNe pas déranger"] {"rawtext":[{"text":"${form}"}]}`) 
                }
            }
        }
    
}
function getDim() {
    const Replace = Array.from(world.getPlayers(), All => All)
    Replace.forEach(player => { if (player.hasTag(`${PrefixD}${DO}`) && player.dimension.id != 'minecraft:overworld') player.removeTag(`${PrefixD}${DO}`) })
    Replace.forEach(player => { if (player.hasTag(`${PrefixD}${DN}`) && player.dimension.id != 'minecraft:nether') player.removeTag(`${PrefixD}${DN}`) })
    Replace.forEach(player => { if (player.hasTag(`${PrefixD}${DE}`) && player.dimension.id != 'minecraft:the_end') player.removeTag(`${PrefixD}${DE}`) })
    Replace.forEach(player => {
    switch (player.dimension.id) { 
        case 'minecraft:overworld': player.addTag(`${PrefixD}${DO}`) 
        break 
        case 'minecraft:nether': player.addTag(`${PrefixD}${DN}`) 
        break 
        case 'minecraft:the_end': player.addTag(`${PrefixD}${DE}`) 
        break
        }
    })
}
function getNK(player) {
    try {
        let inter = player.getTags()
        let pushd = []
        for (let i = 0; i <= inter.length - 1; i++) {
            if (inter[i].startsWith(PrefixR)) {
                pushd.push(inter[i].replace(PrefixR, '').replaceAll('+', '§r§7❘§r') + '§r')
            }
        }
        if (pushd.length == 0) {
            return DR
        }
        else {
            return pushd.join(`${SD}`)
        }
    }
    catch (error) {
    }
}
function getNC(player) {
    try {
        const inter = player.getTags()
        const pushd = []
        for (let i = 0; i <= inter.length - 1; i++) {
            if (inter[i].startsWith(PrefixCN)) {
                pushd.push(inter[i].replace(PrefixCN, '') + '')
            }
        }
        if (pushd.length == 0) {
            return DCN
        }
        else {
            return pushd.join("§r")
        }
    }
    catch (error) {
    }
}
function getEmoji(player) {
    try {
        const inter = player.getTags()
        const pushd = []
        for (let i = 0; i <= inter.length - 1; i++) {
            if (inter[i].startsWith(PrefixE)) {
                pushd.push(inter[i].replace(PrefixE, '') + '')
            }
        }
        if (pushd.length == 0) {
            return DEM
        }
        else {
            return pushd.join("§r")
        }
    }
    catch (error) {
    }
}
function getTeams(player) {
    try {
        const inter = player.getTags()
        const pushd = []
        for (let i = 0; i <= inter.length - 1; i++) {
            if (inter[i].startsWith(PrefixT)) {
                pushd.push(inter[i].replace(PrefixT, '') + '')
            }
        }
        if (pushd.length == 0) {
            return DT
        }
        else {
            return pushd.join("§r")
        }
    }
    catch (error) {
    }
}
function getFake(player) {
    var DUser = player.name
    try {
        const inter = player.getTags()
        const pushd = []
        for (let i = 0; i <= inter.length - 1; i++) {
            if (inter[i].startsWith(PrefixF)) {
                pushd.push(inter[i].replace(PrefixF, '') + '')
            }
        }
        if (pushd.length == 0) {
            return DUser
        }
        else {
            return pushd.join("§r")
        }
    }
    catch (error) {
    }
}
function getEstados(player) {
    var DEstado = `§aOnline§r`
    try {
        const inter = player.getTags()
        const pushd = []
        for (let i = 0; i <= inter.length - 1; i++) {
            if (inter[i].startsWith(PrefixET)) {
                pushd.push(inter[i].replace(PrefixET, '') + '')
            }
        }
        if (pushd.length == 0) {
            return DEstado
        }
        else {
            return pushd.join("§r")
        }
    }
    catch (error) {
    }
}

/// ⇏ 𝐄𝐱𝐩𝐨𝐫𝐭𝐚𝐜𝐢𝐨𝐧
export { chat, getDim, getNK, getNC, getEmoji, getTeams, getFake, getEstados }