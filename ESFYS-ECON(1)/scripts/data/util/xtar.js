/// โ ๐๐ฆ๐ฉ๐จ๐ซ๐ญ๐๐๐ข๐จ๐ง 
import { world } from '@minecraft/server'
import * as xtar from '@minecraft/server-ui'
import { Icon, Moneda, Name, Tema, TemaL } from '../../confi/xtar.js'
import { TickOut } from './arc/xtar.js'

/// โ ๐๐ฎ๐ง๐๐ข๐จ๐ง๐๐ฌ
function EconomyARCerrors(player, producto, data, cantidad, nameBox) {
    player.runCommandAsync(`tellraw @s[hasitem={item=${producto},data=${data},quantity=!${cantidad}..}] {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : ยงrOpps, no tienes ${cantidad} de ${nameBox} en tu invetario"}]}`)
    Economylog(`playsound note.pling @s`, player)}
function EconomyARCev(player, costeo, producto, cantidad, data, cobroen, nameBox) {
    player.runCommandAsync(`tellraw @s[hasitem={item=${producto},data=${data},quantity=${cantidad}..}] {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : ยงrVenta de ${nameBox} exitosa"}]}`)
    Economylog(`clear @s[hasitem={item=${producto},data=${data},quantity=${cantidad}..}] ${producto} ${data} ${cantidad}`, player)
    Economylog(`scoreboard players add @s[hasitem={item=${producto},data=${data},quantity=${cantidad}..}] ${cobroen} ${costeo}`, player)
    Economylog(`playsound random.levelup @s[hasitem={item=${producto},data=${data},quantity=${cantidad}..}]`, player)
}
function setTimeoutY(callback, tick) {
    new TickOut(callback, tick)
}
function setIntervalY(callback, tick) {
    return new TickOut(callback, tick, true)
}
function EconomyARCF(player, costeo, producto, cobroen, alldiner) {
    if (alldiner >= costeo) {
        Economylog(`scoreboard players remove @p ${cobroen} ${costeo}`, player)
        Economylog(`${producto}`, player)
        player.tell(`${Icon}${TemaL} ${Name} : ยงrCompra exitosa`)
        Economylog(`playsound random.levelup @p`, player)
    } else {
        player.tell(`${Icon}${TemaL} ${Name} : ยงrNo tienes suficiente dinero en efectivo`)
        Economylog(`playsound note.pling @p`, player)
    }
}
function EconomyARC(player, costeo, producto, cantidad, data, cobroen, alldiner) {
    if (alldiner >= costeo) {
        Economylog(`scoreboard players remove @p ${cobroen} ${costeo}`, player)
        Economylog(`give @p ${producto} ${cantidad} ${data}`, player)
        player.tell(`${Icon}${TemaL} ${Name} : ยงrCompra exitosa`)
        Economylog(`playsound random.levelup @p`, player)
    } else {
        player.tell(`${Icon}${TemaL} ${Name} : ยงrNo tienes suficiente dinero en efectivo`)
        Economylog(`playsound note.pling @p`, player)
    }
}
function EconomyADV(player, form, form0) {
    const from = new xtar.MessageFormData()
        .title(`${Icon} ADV entrante${TemaL}:`)
        .body(`${TemaL}${Icon} >> ยงr${Tema}${player.name}ยงr, lamentablemente no has confirmado${Tema}.`)
        .button1(`ยงaยงlIr a confirmar`)
        .button2(`ยงcยงlSalir`)
    from.show(player).then(result => {
        if (result.selection === 1) {
            Economylog(`playsound note.pling @p`, player)
            return form(player)
        }
        if (result.selection != 1) {
            player.tell(`${Icon}${TemaL} ${Name} : ยงrCancelada`)
            Economylog(`playsound random.break @p`, player)
            return form0(player)
        }
    })
}
function Economygen(max, min) {
    max = Math.floor(max)
    min = Math.ceil(min)
    return Math.floor(Math.random() * (1 + max - min) + min)
}
function Economygam(mode, range, mrange, posx, posy, posz, tag) {
    return world.getDimension('overworld').runCommandAsync(`execute if entity @a[tag=!${tag},x=${posx},y=${posy},z=${posz},rm=${mrange},r=${range}] run gamemode ${mode} @s`)
}
function Economyreg(text, player) {
    return player.tell(text)
}
function Economylog(command, player) {
    return player.runCommandAsync(command)
}
function ScoreBoard(scoreboard, player) {
    return player.runCommandAsync(`titleraw "${player.name}" actionbar {"rawtext":[{"text":"${scoreboard}"}]}`)
}
function MinasADV(text, range, posx, posy, posz) {
    return world.getDimension('overworld').runCommandAsync(`tellraw @a[x=${posx},y=${posy},z=${posz},r=${range}] {"rawtext":[{"text":"${text}"}]}`)
}
function MinasReload(variable, posx, posy, posz) {
    world.getDimension(`overworld`).runCommandAsync(`tp @a[x=${posx},y=${posy},z=${posz},r=50] 589.08 -2.00 5768.97`)
    world.getDimension(`overworld`).runCommandAsync(`playsound random.explode @a[x=${posx},y=${posy},z=${posz},r=50]`)
    world.getDimension(`overworld`).runCommandAsync(`kill @e[x=${posx},y=${posy},z=${posz},type=item]`)
    return world.getDimension('overworld').runCommandAsync(`structure load mina_gen_r_${variable}_${Economygen(3, 1)} ${posx} ${posy} ${posz}`)
}
function TitleBar(text, range, posx, posy, posz) {
    return world.getDimension('overworld').runCommandAsync(`titleraw @a[r=${range},x=${posx},y=${posy},z=${posz}] title {"rawtext":[{"text":"${text}"}]}`)
}
function getScore(player, objective) {
    try {
        const Score = world.scoreboard.getObjective(objective)
        return Score.getScore(typeof player === 'string' ? Score.getParticipants().find(pT => pT.displayName == player) : player.scoreboard)
    } catch {
        return 0
    }
}
function testTag(tag, player) {
    return player.hasTag(tag)
}
function getDeathsKills() {
    for (const player of world.getPlayers()) {
        const healt = player.getComponent('minecraft:health').current
        const Death = player.hasTag('death')
        if (healt == 0 && Death == false) {
            const maxd = getScore(player, `${Moneda}`)
            const maxd2 = getScore(player, `lvlxp`)
            const deathloot = Economygen(maxd, 0)
            const deathloot2 = Economygen(maxd2, 0)
            player.addTag('death')
            player.tell(`${Icon}${TemaL} ${Name} : ยงrHey ${Tema}${player.name}ยงr, has muerto en X:${Tema}${Math.round(player.location.x)}ยงr, Y:${Tema}${Math.round(player.location.y)}ยงr, Z:${Tema}${Math.round(player.location.z)}`)
            player.runCommandAsync(`scoreboard players add @s deaths 1`)
            player.runCommandAsync(`scoreboard players add @p[r=10] kills 1`)
            player.runCommandAsync(`scoreboard players remove @s ${Moneda} ${deathloot}`)
            player.tell(`${Icon}${TemaL} ${Name} : ยงrOpps ${Tema}${player.name}ยงr, has perdido ยงc${deathloot}$ยงr en dinero y tambiรฉn ยงc${deathloot2}%%%ยงr en Nivel XP, la prรณxima vez guarda tu dinero en el banco`)
            player.runCommandAsync(`scoreboard players remove @s lvlxp ${deathloot2}`)
            if (player.hasTag(`sobrev`)) {
                Economylog(`function fin_zombie`, player)
                player.tell(`${Icon}${TemaL} ${Name} : ยงrOh no, has perdido ยงa+4$`)
                player.removeTag(`enjuego`)
                player.removeTag(`sobrev`)
                player.removeTag(`oct`)
                Economylog(`scoreboard players add "${player.name}" lvlxp 4`, player)
                Economylog(`scoreboard players set "${player.name}" fin_juego 0`, player)
                Economylog(`scoreboard players set "${player.name}" fin_juego_s 0`, player)
            }
        } else if (healt > 0) {
            player.removeTag('death')
        }
    }
}

/// โ ๐๐ฑ๐ฉ๐จ๐ซ๐ญ๐๐๐ข๐จ๐ง
export { Economylog, getScore, testTag, getDeathsKills, Economyreg, ScoreBoard, Economygen, TitleBar, Economygam, MinasReload, MinasADV, EconomyADV, EconomyARC, EconomyARCF, setIntervalY, setTimeoutY, EconomyARCev, EconomyARCerrors }