/// ⇏ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐜𝐢𝐨𝐧
import { world, system } from '@minecraft/server'
import { Bienvenida, Icon, IconScoreboard, Lobby, Moneda, Moneda1, Name, Prefix, PrefixH, Tema, TemaL, xpace } from './confi/xtar.js'
import { chat, getDim, getEmoji, getEstados, getFake, getNC, getNK } from './data/chat/xtar.js'
import { commands } from './data/cmd/xtar.js'
import { HOMECMD } from './data/home/xtar.js'
import { chest_1_1, chest_2_2, chest_3_3, chest_4_4, chest_5_5, chest_6_6, chest_7_7 } from './data/ui/shop/xtar.js'
import { adminm, server, \u0077\u0065\u006c\u0063\u006f\u006d\u0065 } from './data/ui/xtar.js'
import { Economylog, getDeathsKills, getScore, MinasADV, MinasReload, ScoreBoard, setIntervalY, setTimeoutY, TitleBar } from './data/util/xtar.js'

/// ⇏ 𝐗𝐭𝐚𝐫𝐢𝐧𝐠
world.events.beforeChat.subscribe(msg => {
    if (msg.message.substr(0, Prefix.length) == Prefix) {
        commands(msg)
    } else if (msg.message.substr(0, PrefixH.length) == PrefixH) {
        HOMECMD(msg)
    } else {
        chat(msg)
    }
})
world.events.entityHit.subscribe(data => {
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.hasTag('lobby')) {
        const player = data.entity
        server(player)
        Economylog(`playsound pop @p`, player)
    }
})
world.events.beforeItemUse.subscribe(ev => {
    const item = ev.item
    const player = ev.source
    if (item.typeId == 'esfys:ui') {
        server(player)
        Economylog(`playsound pop @p`, player)
    }
})
system.run(function tick() {
    system.run(tick)
    getDim()
    getDeathsKills()
    for (const player of world.getPlayers()) {
        player.nameTag = `┏▹ ${getEstados(player)} §r◃┓\n${getEmoji(player)}${getNC(player)} ${getFake(player)}${getEmoji(player)}\n↳${getNK(player)}§r↲`
    }
})
world.events.entityHit.subscribe(data => {
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.hasTag('chest_1')) {
        const player = data.entity
        chest_1_1(player)
        Economylog(`playsound random.break @p`, player)
    }
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.hasTag('chest_2')) {
        const player = data.entity
        chest_2_2(player)
        Economylog(`playsound random.break @p`, player)
    }
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.hasTag('chest_3')) {
        const player = data.entity
        chest_3_3(player)
        Economylog(`playsound random.break @p`, player)
    }
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.hasTag('chest_4')) {
        const player = data.entity
        chest_4_4(player)
        Economylog(`playsound random.break @p`, player)
    }
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.hasTag('chest_5')) {
        const player = data.entity
        chest_5_5(player)
        Economylog(`playsound random.break @p`, player)
    }
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.hasTag('chest_6')) {
        const player = data.entity
        chest_6_6(player)
        Economylog(`playsound random.break @p`, player)
    }
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.hasTag('chest_7')) {
        const player = data.entity
        chest_7_7(player)
        Economylog(`playsound random.break @p`, player)
    }
})
world.events.entityHit.subscribe(data => {
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.typeId == 'minecraft:sheep') {
        const player = data.entity
        if (player.hasTag(`putazo`)) {
            if (!player.hasTag(`putazo_sheep`)) {
                Economylog(`scoreboard players add "${player.name}" putazo_sheep 1`, player)
            }
        }
    }
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.typeId == 'minecraft:cow') {
        const player = data.entity
        if (player.hasTag(`putazo`)) {
            if (!player.hasTag(`putazo_cow`)) {
                Economylog(`scoreboard players add "${player.name}" putazo_cow 1`, player)
            }
        }
    }
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.typeId == 'minecraft:chicken') {
        const player = data.entity
        if (player.hasTag(`putazo`)) {
            if (!player.hasTag(`putazo_chicken`)) {
                Economylog(`scoreboard players add "${player.name}" putazo_chicken 1`, player)
            }
        }
    }
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.typeId == 'minecraft:horse') {
        const player = data.entity
        if (player.hasTag(`putazo`)) {
            if (!player.hasTag(`putazo_horse`)) {
                Economylog(`scoreboard players add "${player.name}" putazo_horse 1`, player)
            }
        }
    }
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.typeId == 'minecraft:zombie') {
        const player = data.entity
        if (player.hasTag(`secu`)) {
            Economylog(`kill @e[r=5,type=minecraft:zombie]`, player)
            Economylog(`kill @e[r=7,type=item]`, player)
            Economylog(`scoreboard players add "${player.name}" secuestrador 1`, player)
        }
    }
    if (data?.entity?.typeId == 'minecraft:player' && data?.hitEntity?.typeId == 'minecraft:spider') {
        const player = data.entity
        if (player.hasTag(`secu`)) {
            Economylog(`kill @e[r=5,type=minecraft:spider]`, player)
            Economylog(`kill @e[r=7,type=item]`, player)
            Economylog(`scoreboard players add "${player.name}" secuestrador 1`, player)
        }
    }
})
system.run(function tick() {
    system.run(tick)
    world.getDimension('overworld').runCommandAsync('setblock 589 -17 5768 redstone_block')
    for (const player of world.getPlayers()) {
        if (player.hasTag(`sobrev`)) { TitleBar(`${Tema}${Icon}> -={Sobrevive}=- <${Icon}`, 30, 3764, 3, 910) }
        TitleBar(`${Tema}${Icon}> -={Estas la zona de cofres}=- <${Icon}`, 50, 571, 265, -236)
        TitleBar(`${Tema}${Icon}> -={Estas en el lobby}=- <${Icon}`, 15, 866, 133, 60)
        world.getDimension('overworld').runCommandAsync(`setworldspawn ${Lobby}`)
        if (player.hasTag(`putazo`)) {
            ScoreBoard(` ${TemaL}${Icon} Putazos ${Icon}\n\n${IconScoreboard}§rOveja ${TemaL}: §r§7${getScore(player, `putazo_sheep`)}/20\n${IconScoreboard}§rVaca ${TemaL}: §r§7${getScore(player, `putazo_cow`)}/20\n${IconScoreboard}§rCaballo ${TemaL}: §r§7${getScore(player, `putazo_horse`)}/20\n${IconScoreboard}§rGallina ${TemaL}: §r§7${getScore(player, `putazo_chicken`)}/20\n\n${IconScoreboard}§rTermina en ${TemaL}: §r§7${getScore(player, `fin_juego`)}:${getScore(player, `fin_juego_s`)}\n     `, player)
        }
        if (!player.hasTag(`oct`)) {
            const arc = `${TemaL}${xpace}${Name}\n\n${IconScoreboard}§rUser${TemaL}: §r${getNC(player)}${getFake(player)}\n${IconScoreboard}§rRank${TemaL}: §r${getNK(player)}\n${IconScoreboard}§rEstado${TemaL}: §r${getEstados(player)}\n\n${IconScoreboard}§rNivelXP${TemaL}: §r§7${getScore(player, `lvlxp`)}\n${IconScoreboard}§rDinero${TemaL}: §r§7${getScore(player, `${Moneda}`)}\n${IconScoreboard}§rBanco${TemaL}: §r§7${getScore(player, `${Moneda1}`)}\n${IconScoreboard}§rAsesinatos${TemaL}: §r§7${getScore(player, `kills`)}\n${IconScoreboard}§rMuertes${TemaL}: §r§7${getScore(player, `deaths`)}\n\n${IconScoreboard}§rTiempo${TemaL}: §r§7${getScore(player, `d`)}d${Tema}, §r§7${getScore(player, `h`)}h${Tema}, §r§7${getScore(player, `m`)}m${Tema}, §r§7${getScore(player, `s`)}s`
            ScoreBoard(arc, player)
        }
        if (player.hasTag(`sobrev`)) {
            ScoreBoard(`  ${TemaL}${Icon} Sobrevive ${Icon}\n\n${IconScoreboard}§rIntenta aguantar a las\nseguidas bandas de\nzombies que se\naparecerán\n\n${IconScoreboard}§rTermina en ${TemaL}: §r§7${getScore(player, `fin_juego`)}:${getScore(player, `fin_juego_s`)}\n     `, player)
        }

        if (player.hasTag(`secu`)) {
            ScoreBoard(`    ${TemaL}${Icon} Secuestrador ${Icon}\n\n     ${IconScoreboard}§rElimina a todos\n     los zombies y\n     arañas posibles\n\n     ${IconScoreboard}§rSecuestrados ${TemaL}: §r§7${getScore(player, `secuestrador`)}\n\n     ${IconScoreboard}§rTermina en ${TemaL}: §r§7${getScore(player, `fin_juego`)}:${getScore(player, `fin_juego_s`)}§s\n\n§r`, player)
        }
        if (!player.hasTag(`putazo`)) {
            if (!player.hasTag(`sobrev`)) {
                if (!player.hasTag(`secu`)) {
                    Economylog(`scoreboard players set "${player.name}" fin_juego 0`, player)
                    Economylog(`scoreboard players set "${player.name}" fin_juego_s 0`, player)
                    Economylog(`scoreboard players set "${player.name}" putazo_comp 0`, player)
                    Economylog(`scoreboard players set "${player.name}" putazo_sheep 0`, player)
                    Economylog(`scoreboard players set "${player.name}" putazo_chicken 0`, player)
                    Economylog(`scoreboard players set "${player.name}" putazo_horse 0`, player)
                    Economylog(`scoreboard players set "${player.name}" putazo_cow 0`, player)

                }
            }
        }
        Economylog(`scoreboard objectives add ${Moneda} dummy`, player)
        Economylog(`scoreboard objectives add ${Moneda1} dummy`, player)
        Economylog(`scoreboard objectives add kills dummy`, player)
        Economylog(`scoreboard objectives add deaths dummy`, player)
        Economylog(`scoreboard objectives add lvlxp dummy`, player)
        Economylog(`scoreboard objectives add ts dummy`, player)
        Economylog(`scoreboard objectives add xts dummy`, player)
        Economylog(`scoreboard objectives add s dummy`, player)
        Economylog(`scoreboard objectives add m dummy`, player)
        Economylog(`scoreboard objectives add h dummy`, player)
        Economylog(`scoreboard objectives add d dummy`, player)
        Economylog(`scoreboard objectives add secuestrador dummy`, player)
        Economylog(`scoreboard objectives add fin_juego dummy `, player)
        Economylog(`scoreboard objectives add fin_juego_s dummy`, player)
        Economylog(`scoreboard objectives add putazo_sheep dummy`, player)
        Economylog(`scoreboard objectives add putazo_cow dummy`, player)
        Economylog(`scoreboard objectives add putazo_chicken dummy`, player)
        Economylog(`scoreboard objectives add putazo_horse dummy`, player)
        Economylog(`scoreboard objectives add putazo_comp dummy`, player)
        Economylog(`scoreboard players add "${player.name}" ts 1`, player)
        if (getScore(player, `putazo_sheep`) === 20) {
            if (!player.hasTag(`putazo_sheep`)) {
                Economylog(`scoreboard players add "${player.name}" putazo_comp 1`, player)
            }
            player.addTag(`putazo_sheep`)
        }
        if (getScore(player, `putazo_cow`) >= 20) {
            if (!player.hasTag(`putazo_cow`)) {
                Economylog(`scoreboard players add "${player.name}" putazo_comp 1`, player)
            }
            player.addTag(`putazo_cow`)
        }
        if (getScore(player, `putazo_chicken`) >= 20) {
            if (!player.hasTag(`putazo_chicken`)) {
                Economylog(`scoreboard players add "${player.name}" putazo_comp 1`, player)
            }
            player.addTag(`putazo_chicken`)
        }
        if (getScore(player, `putazo_horse`) >= 20) {
            if (!player.hasTag(`putazo_horse`)) {
                Economylog(`scoreboard players add "${player.name}" putazo_comp 1`, player)
            }
            player.addTag(`putazo_horse`)
        }
        if (getScore(player, `putazo_comp`) >= 4) {
            player.removeTag(`enjuego`)
            player.removeTag(`putazo`)
            player.removeTag(`putazo_horse`)
            player.removeTag(`putazo_cow`)
            player.removeTag(`putazo_sheep`)
            player.removeTag(`putazo_chicken`)
            player.removeTag(`oct`)
            player.tell(`${Icon}${TemaL} ${Name} : §rFelicidades el juego a terminado §a+60$`)
            Economylog(`scoreboard players add "${player.name}" lvlxp 60`, player)
            Economylog(`scoreboard players set "${player.name}" putazo_comp 0`, player)
            Economylog(`scoreboard players set "${player.name}" putazo_sheep 0`, player)
            Economylog(`scoreboard players set "${player.name}" putazo_chicken 0`, player)
            Economylog(`scoreboard players set "${player.name}" putazo_horse 0`, player)
            Economylog(`scoreboard players set "${player.name}" putazo_cow 0`, player)
            Economylog(`scoreboard players set "${player.name}" fin_juego 0`, player)
            Economylog(`scoreboard players set "${player.name}" fin_juego_s 0`, player)
        }
        if (getScore(player, `s`) === 20) {
            player.runCommandAsync(`give @a[hasitem={item=esfys:ui,quantity=0}] esfys:ui 1`)
        }
        if (player.hasTag(`emer`)) {
            if (player.hasTag(`admin`)) {
                adminm(player)
                player.removeTag(`emer`)
            } else {
                player.tell(`${Icon}${TemaL} ${Name} : §rImposible de forzar a abrir ${Tema}UI ADMIN§r en emergencia\n    ${TemaL}> §rRazón ${Tema}No tiene tag de administrador`)
                player.removeTag(`emer`)
            }
        }
        if (getScore(player, `fin_juego_s`) === 2) {
            if (player.hasTag(`sobrev`)) {
                Economylog(`execute if entity @a[tag=sobrev] positioned 3776 5 910 run function fin_zombie`, player)
                if (getScore(player, `fin_juego_s`) === 53) {
                    Economylog(`execute if entity @a[tag=sobrev] positioned 3776 5 910 run function fin_zombie`, player)
                }
            }
        }
        if (getScore(player, `fin_juego`) === -1) {
            if (player.hasTag(`putazo`)) {
                player.tell(`${Icon}${TemaL} ${Name} : §rOpps, se te acabo el tiempo §a+6$`)
                player.removeTag(`enjuego`)
                player.removeTag(`putazo`)
                player.removeTag(`putazo_horse`)
                player.removeTag(`putazo_cow`)
                player.removeTag(`putazo_sheep`)
                player.removeTag(`putazo_chicken`)
                player.removeTag(`oct`)
                Economylog(`scoreboard players add "${player.name}" lvlxp 6`, player)
                Economylog(`scoreboard players set "${player.name}" putazo_comp 0`, player)
                Economylog(`scoreboard players set "${player.name}" putazo_sheep 0`, player)
                Economylog(`scoreboard players set "${player.name}" putazo_chicken 0`, player)
                Economylog(`scoreboard players set "${player.name}" putazo_horse 0`, player)
                Economylog(`scoreboard players set "${player.name}" putazo_cow 0`, player)
                Economylog(`scoreboard players set "${player.name}" fin_juego 0`, player)
                Economylog(`scoreboard players set "${player.name}" fin_juego_s 0`, player)
            }
            if (player.hasTag(`sobrev`)) {
                Economylog(`execute if entity @a[tag=sobrev] positioned 3776 5 910 run function fin_zombie`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rFelicidades el juego a terminado §a+140$`)
                player.removeTag(`enjuego`)
                player.removeTag(`sobrev`)
                player.removeTag(`oct`)
                Economylog(`scoreboard players add "${player.name}" lvlxp 140`, player)
                Economylog(`scoreboard players set "${player.name}" fin_juego 0`, player)
                Economylog(`scoreboard players set "${player.name}" fin_juego_s 0`, player)
                Economylog(`tp "${player.name}" ${Lobby}`, player)
            }
            if (player.hasTag(`secu`)) {
                const mnd = getScore(player, `secuestrador`)
                const mxd = mnd * 5
                player.tell(`${Icon}${TemaL} ${Name} : §rFelicidades el juego a terminado §a+${mxd}$`)
                player.removeTag(`enjuego`)
                player.removeTag(`secu`)
                player.removeTag(`oct`)
                Economylog(`scoreboard players add "${player.name}" lvlxp ${mxd}`, player)
                Economylog(`scoreboard players set "${player.name}" fin_juego 0`, player)
                Economylog(`scoreboard players set "${player.name}" fin_juego_s 0`, player)
                Economylog(`scoreboard players set "${player.name}" secuestrador 0`, player)
            }
        }
        if (getScore(player, `xts`) >= 2) {
            player.runCommandAsync(`scoreboard players add "${player.name}" lvlxp 1`)
            player.runCommandAsync(`scoreboard players set "${player.name}" xts 0`)
        }
        TitleBar(`${Tema}${Icon}> -={Estas la zona de mineria}=- <${Icon}`, 30, 588, -2, 5769)
    }
})
setIntervalY(() => {
    world.getDimension('overworld').runCommandAsync(`execute as @e[type=xp_orb] run scoreboard players add @p xts 1`)
    world.getDimension('overworld').runCommandAsync(`execute as @e[type=xp_orb] run kill @s`)
}, 20)
setIntervalY(() => {
    MinasADV(`${Icon} ${TemaL}${Name} : §rTen cuidado, las minas se han restablecido`, 30, 588, -2, 5769)
    MinasReload(1, 590, -18, 5770)
    MinasReload(2, 575, -18, 5755)
    MinasReload(3, 590, -18, 5755)
    MinasReload(4, 575, -18, 5770)
}, 5800)
setTimeoutY(() => {
    for (const player of world.getPlayers()) {
        if (getScore(player, `s`) >= 20) {
            if (!player.hasTag('\u0072\u0065\u0067\u0069\u0073\u0074\u0065\u0072\u0065\u0064')) {
                \u0077\u0065\u006c\u0063\u006f\u006d\u0065(player)
                player.runCommandAsync(`\u0074\u0065\u006c\u006c\u0072\u0061\u0077\u0020\u0040\u0061\u0020\u007b\u0022\u0072\u0061\u0077\u0074\u0065\u0078\u0074\u0022\u003a\u005b\u007b\u0022\u0074\u0065\u0078\u0074\u0022\u003a\u0022${Icon}${TemaL} ${Name}\u0020\u003a\u0020\u00a7\u0072\u0046\u0061\u006e\u0074\u0061\u0073\u0074\u0069\u0063\u006f\u0020\u0065\u006c\u0020\u006a\u0075\u0067\u0061\u0064\u006f\u0072\u0020${Tema}${player.name}\u00a7\u0072\u002c\u0020\u0073\u0065\u0020\u0061\u0020\u0075\u006e\u0069\u0064\u006f\u0020\u0070\u006f\u0072\u0020\u0070\u0072\u0069\u006d\u0065\u0072\u0061\u0020\u0076\u00e9\u007a${Tema}\u002e\u0022\u007d\u005d\u007d`)
                player.tell(`${TemaL}${Icon}\u0020${Name}\u0020\u003a\u0020\u00a7\u0072\u0048\u006f\u006c\u0061\u0020${Tema}${player.name}\u00a7\u0072\u002c\u0020${Bienvenida}`)
                player.addTag(`\u0072\u0065\u0067\u0069\u0073\u0074\u0065\u0072\u0065\u0064`)
            }
        }
    }
}, 400)
setIntervalY(() => {
    for (const player of world.getPlayers()) {
        if (getScore(player, `s`) >= 20) {
            if (!player.hasTag('\u0072\u0065\u0067\u0069\u0073\u0074\u0065\u0072\u0065\u0064')) {
                \u0077\u0065\u006c\u0063\u006f\u006d\u0065(player)
                player.runCommandAsync(`\u0074\u0065\u006c\u006c\u0072\u0061\u0077\u0020\u0040\u0061\u0020\u007b\u0022\u0072\u0061\u0077\u0074\u0065\u0078\u0074\u0022\u003a\u005b\u007b\u0022\u0074\u0065\u0078\u0074\u0022\u003a\u0022${Icon}${TemaL} ${Name}\u0020\u003a\u0020\u00a7\u0072\u0046\u0061\u006e\u0074\u0061\u0073\u0074\u0069\u0063\u006f\u0020\u0065\u006c\u0020\u006a\u0075\u0067\u0061\u0064\u006f\u0072\u0020${Tema}${player.name}\u00a7\u0072\u002c\u0020\u0073\u0065\u0020\u0061\u0020\u0075\u006e\u0069\u0064\u006f\u0020\u0070\u006f\u0072\u0020\u0070\u0072\u0069\u006d\u0065\u0072\u0061\u0020\u0076\u00e9\u007a${Tema}\u002e\u0022\u007d\u005d\u007d`)
                player.tell(`${TemaL}${Icon}\u0020${Name}\u0020\u003a\u0020\u00a7\u0072\u0048\u006f\u006c\u0061\u0020${Tema}${player.name}\u00a7\u0072\u002c\u0020${Bienvenida}`)
                player.addTag(`\u0072\u0065\u0067\u0069\u0073\u0074\u0065\u0072\u0065\u0064`)
            }
        }
    }
}, 400)
system.events.beforeWatchdogTerminate.subscribe(data => { data.cancel = true })