/// ⇏ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐜𝐢𝐨𝐧 
import { world } from '@minecraft/server'
import * as xtar from '@minecraft/server-ui'
import { Click, Icon, Lobby, Moneda, Moneda1, Name, Tema, TemaL } from '../../confi/xtar.js'
import { PrefixCN, PrefixCT, PrefixE, PrefixET, PrefixF, PrefixR } from '../chat/lib/xtar.js'
import { getEmoji, getEstados, getFake, getNK } from '../chat/xtar.js'
import { Economygen, Economylog, Economyreg, getScore, testTag } from '../util/xtar.js'
import { noob, pro, bt, yt, strm, tiktoke, staff, mod, admin } from './lib/xtar.js'
import { shop_gee } from './shop/xtar.js'

/// ⇏ 𝐗𝐭𝐚𝐫𝐢𝐧𝐠
function server(player) {
    const form = new xtar.ActionFormData()
        .title(`${TemaL}${Icon} ${Name} ${Icon}`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, voici le menu général de Orion Minage${Tema}.`)
        .button(`${TemaL}Téléportation${Click}`, 'textures/ui/mashup_world')
        .button(`${TemaL}Magasins${Click}`, 'textures/ui/sidebar_icons/marketplace')
        .button(`${TemaL}Statistiques${Click}`, 'textures/ui/icon_fall')
        .button(`${TemaL}Jeux${Click}`, 'textures/ui/icon_random')
        .button(`${TemaL}Statut${Click}`, 'textures/ui/dressing_room_customization')
        .button(`${TemaL}Options${Click}`, 'textures/ui/settings_glyph_color_2x')
        .button(`${TemaL}Banque${Click}`, 'textures/ui/storageIconColor')
    if (player.hasTag(`admin`)) {
        form.button(`${TemaL}Admin Menu${Click}`, 'textures/ui/bad_omen_effect')
    }
    form.show(player).then(result => {
        if (result.selection === 0) {
            if (!player.hasTag(`infractor`)) {
                teleports(player)
                Economylog(`playsound beacon.power @p`, player)
            } else {
                const form = new xtar.ActionFormData()
                    .title(`${Icon}${TemaL} Téléportation${Icon}`)
                    .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, apparemment, vous avez enffrains les règles et de ce fait, vous ne pouvez pas vous déplacer${Tema}.`)
                    .button(`§4§lRetour au début${Click}`, 'font/icons/cancel')
                form.show(player).then(result => {
                    if (result.selection === 0) {
                        Economylog(`playsound note.pling @p`, player)
                        return server(player)
                    }
                })
            }
        }
        if (result.selection === 1) {
            shop_gee(player)
            Economylog(`playsound poop @p`, player)
        }
        if (result.selection === 2) {
            estadisticas(player)
            Economylog(`playsound block.turtle_egg.crack @p`, player)
        }
        if (result.selection === 3) {
            juegosBETA(player)
            Economylog(`playsound mob.wanderingtrader.reappeared @p`, player)
        }
        if (result.selection === 4) {
            estado(player)
            Economylog(`playsound notify @p`, player)
        }
        if (result.selection === 5) {
            ajustes(player)
            Economylog(`playsound gota @p`, player)
        }
        if (result.selection === 6) {
            billetera(player)
            Economylog(`playsound click @p`, player)
        }
        if (result.selection === 7) {
            adminm(player)
            Economylog(`playsound break.amethyst_cluster @p`, player)
        }
    })
}
function juegosBETA(player) {
    const form = new xtar.ActionFormData()
        .title(`${Icon}${TemaL} Jeux${Icon}`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Voici tous les jeux disponibles pour le moment\n§r`)
        .button(`${TemaL}Le Boxeur${Click}`, 'font/icons/put')
        .button(`${TemaL}Le Chasseur${Click}`, 'font/icons/sov')
        .button(`${TemaL}La Survie ${Click}`, 'font/icons/lu')
        .button(`${TemaL}Abandonner${Click}`, 'font/icons/bu')
        .button(`§4§lRetour au début${Click}`, 'font/icons/cancel')
    form.show(player).then(result => {
        if (result.selection === 0) {
            if (!player.hasTag(`enjuego`)) {
                const form = new xtar.MessageFormData()
                    .title(`${Icon} Le Boxeur${Tema}:`)
                    .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Dans ce jeu, vous devez taper 20 fois les entités suivantes${Tema}:§r\n\n${TemaL}>§r Mouton\n${TemaL}>§r Vache\n${TemaL}>§r Cheval\n${TemaL}>§r Poules\n§.`)
                    .button1(`§a§lAccepter`)
                    .button2(`§c§lRefuser`)
                form.show(player).then(result => {
                    if (result.selection === 1) {
                        player.addTag(`enjuego`)
                        player.addTag(`putazo`)
                        player.addTag(`oct`)
                        player.tell(`${Icon}${TemaL} ${Name} : §rFantastique, vous avez 4 minutes pour finir cette activité`)
                        Economylog(`scoreboard players add "${player.name}" fin_juego 3`, player)
                        Economylog(`scoreboard players add "${player.name}" fin_juego_s 59`, player)
                    }
                })
            } else {
                player.tell(`${Icon}${TemaL} ${Name} : §rVous êtes déjà dans un jeu`)
            }
        }
        if (result.selection === 1) {
            if (!player.hasTag(`enjuego`)) {
                const form = new xtar.MessageFormData()
                    .title(`${Icon} Juego entrante${Tema}:`)
                    .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, cela fait depuis des années que vous attendiez ce moment. Il est enfin temps de vous venger ! Eliminez les différentes hordes de zombies pour terminer le jeu !.${Tema}:§r\n\n${TemaL}>§r Survivez 4minutes\n§.`)
                    .button1(`§a§lAccepter`)
                    .button2(`§c§lRefuser`)
                form.show(player).then(result => {
                    if (result.selection === 1) {
                        player.addTag(`enjuego`)
                        player.addTag(`sobrev`)
                        player.addTag(`oct`)
                        player.tell(`${Icon}${TemaL} ${Name} : §rFantastique, vous avez 4 minutes pour gagner`)
                        Economylog(`tp "${player.name}" 3764 3 910`, player)
                        Economylog(`scoreboard players add "${player.name}" fin_juego 3`, player)
                        Economylog(`scoreboard players add "${player.name}" fin_juego_s 59`, player)
                        Economylog(`execute if entity @a[tag=sobrev] positioned 3776 5 910 run function fin_zombie`, player)
                        Economylog(`execute if entity @a[tag=sobrev] positioned 3776 5 910 run function zombie`, player)
                    }
                })
            } else {
                player.tell(`${Icon}${TemaL} ${Name} : §rVous êtes déjà dans un jeu`)
            }
        }
        if (result.selection === 2) {
            if (!player.hasTag(`enjuego`)) {
                const form = new xtar.MessageFormData()
                    .title(`${Icon} La survie${Tema}:`)
                    .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, le but de ce jeu est simple : tuez toutes les entités.  ${Tema}:§r\n\n${TemaL}>§r Chaque entités ${Tema}=§r 3$\n§.`)
                    .button1(`§a§lAccepter`)
                    .button2(`§c§lRefuser`)
                form.show(player).then(result => {
                    if (result.selection === 1) {
                        player.addTag(`enjuego`)
                        player.addTag(`secu`)
                        player.addTag(`oct`)
                        player.tell(`${Icon}${TemaL} ${Name} : §rFantastique, vous avez 4 minutes pour gagner`)
                        Economylog(`scoreboard players add "${player.name}" fin_juego 3`, player)
                        Economylog(`scoreboard players add "${player.name}" fin_juego_s 59`, player)
                        Economylog(`time set midnight`, player)
                    }
                })
            } else {
                player.tell(`${Icon}${TemaL} ${Name} : §rVous êtes déjà dans un jeu`)
            }
        }
        if (result.selection === 3) {
            if (player.hasTag(`enjuego`)) {
                const form = new xtar.MessageFormData()
                    .title(`${Icon} Menu des jeux ${Tema}:`)
                if (player.hasTag(`putazo`)) { form.body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Voulez-vous sortir du jeu ${Tema}:§r\n\n${TemaL}>§r Le Boxeur\n§.`) }
                if (player.hasTag(`sobrev`)) { form.body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Voulez-vous sortir du jeu ${Tema}:§r\n\n${TemaL}>§r La survie\n§.`) }
                if (player.hasTag(`secu`)) { form.body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Voulez-vous sortir du jeu ${Tema}:§r\n\n${TemaL}>§r Le Chasseur\n§.`) }
                form.button1(`§a§lAccepter`)
                form.button2(`§c§lRefuser`)
                form.show(player).then(result => {
                    if (result.selection === 1) {
                        if (player.hasTag(`putazo`)) {
                            player.removeTag(`putazo`)
                            player.removeTag(`oct`)
                            player.removeTag(`enjuego`)
                            Economylog(`tp "${player.name}" ${Lobby}`, player)
                            Economylog(`scoreboard players set "${player.name}" fin_juego 0`, player)
                            Economylog(`scoreboard players set "${player.name}" fin_juego_s 0`, player)
                        }
                        if (player.hasTag(`sobrev`)) {
                            player.removeTag(`sobrev`)
                            player.removeTag(`oct`)
                            player.removeTag(`enjuego`)
                            Economylog(`function fin_zombie`, player)
                            Economylog(`tp "${player.name}" ${Lobby}`, player)
                            Economylog(`scoreboard players set "${player.name}" fin_juego 0`, player)
                            Economylog(`scoreboard players set "${player.name}" fin_juego_s 0`, player)
                        }
                        if (player.hasTag(`secu`)) {
                            player.removeTag(`secu`)
                            player.removeTag(`oct`)
                            player.removeTag(`enjuego`)
                            Economylog(`tp "${player.name}" ${Lobby}`, player)
                            Economylog(`scoreboard players set "${player.name}" fin_juego 0`, player)
                            Economylog(`scoreboard players set "${player.name}" fin_juego_s 0`, player)
                        }
                    }
                })
            } else {
                player.tell(`${Icon}${TemaL} ${Name} : §rVous êtes sorti du jeu.`)
            }
        }
        if (result.selection === 4) {
            Economylog(`playsound note.pling @p`, player)
            return server(player)
        }
    })
}
function billetera(player) {
    const form = new xtar.ActionFormData()
        .title(`${Icon}${TemaL} Banque ${Icon}`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Voici vos informations bancaires${Tema}.\n\n${Tema}> §rjoueur ${Tema}: §r${player.name}\n${Tema}> §rNiveau XP actuel ${Tema}: §r${getScore(player, `lvlxp`)}\n${Tema}> §rMoney actuelle ${Tema}: §r${getScore(player, `${Moneda}`)}\n${Tema}> §rMoney en banque ${Tema}: §r${getScore(player, `${Moneda1}`)}\n`)
        .button(`${TemaL}Protéger${Click}`, 'textures/ui/sidebar_icons/blueheart')
        .button(`${TemaL}Retirer${Click}`, 'font/icons/ret')
        .button(`${TemaL}Convertir${Click}`, 'textures/ui/trade_icon')
        .button(`${TemaL}Envoyer${Click}`, 'textures/ui/tiny_agnes')
        .button(`§4§lRetour au début${Click}`, 'font/icons/cancel')
    form.show(player).then(result => {
        if (result.selection === 0) {
            guardar(player)
        }
        if (result.selection === 1) {
            retirar(player)
        }
        if (result.selection === 2) {
            conv(player)
        }
        if (result.selection === 3) {
            enviar(player)
        }
        if (result.selection === 4) {
            Economylog(`playsound note.pling @p`, player)
            return server(player)
        }
    })
}
function muted(player) {
    let playerObjects = []
    let operations = []
    for (const player of world.getPlayers()) {
        operations.push(player.name)
        playerObjects.push(player)
    }
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Mute joueur ${Icon}`)
        .dropdown(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, voici les options pour Mute un joueurs en chat${Tema}:§r\n\n${TemaL}> §rChoisissez le joueur${Tema}:`, operations)
        .textField(`\n${TemaL}> §rRaison${Tema}:`, 'non respect des règles')
        .toggle(`\n${TemaL}> §rActiver pour désactiver le Mute${Tema}:§r`, false)
    form.show(player).then(result => {
        const xtarple = operations[result.formValues[0]]
        const razon = result.formValues[1]
        if (result.formValues[2] === false) {
            if (result.formValues[1]) {
                Economylog(`tag "${xtarple}" add mute`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r à été Mute avec succès`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rOups... Il paraît que vous ne respectez pas les règles\n    ${TemaL}> §rMute pour ${Tema}${player.name}\n    ${TemaL}> §rRaison ${Tema}${razon}"}]}`, player)
                Economylog(`playsound random.anvil_break @p`, player)
                Economylog(`playsound random.anvil_break "${xtarple}"`, player)
                Economylog(`gamemode s "${xtarple}" `, player)
            }
        }
        if (result.formValues[2] === true) {
            if (result.formValues[1]) {
                Economylog(`tag "${xtarple}" remove mute`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r à été UnMute avec succés`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rFantastique... Apparemment, ton infraction à été oubliée\n    ${TemaL}> §rAnnulé pour ${Tema}${player.name}\n    ${TemaL}> §rRaison ${Tema}${razon}"}]}`, player)
                Economylog(`playsound random.anvil_break @p`, player)
                Economylog(`playsound random.anvil_break "${xtarple}"`, player)
            }
        }
    })
}
function jail(player) {
    let playerObjects = []
    let operations = []
    for (const player of world.getPlayers()) {
        operations.push(player.name)
        playerObjects.push(player)
    }
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Emprisonner un joueur ${Icon}`)
        .dropdown(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Voici les options pour emprisonner un joueur${Tema}:§r\n\n${TemaL}> §rChoisissez le joueur${Tema}:`, operations)
        .textField(`\n${TemaL}> §rRaison${Tema}:`, 'non respect des règles')
        .toggle(`\n${TemaL}> §rActiver pour Désemprisonner ${Tema}:§r`, false)
    form.show(player).then(result => {
        const xtarple = operations[result.formValues[0]]
        const razon = result.formValues[1]
        if (result.formValues[2] === false) {
            if (result.formValues[1]) {
                Economylog(`tag "${xtarple}" add infractor`, player)
                Economylog(`tp "${xtarple}" 4931 2 7`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r à été Emprisonné Correctement`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rOupss... Apparemment vous avez rompu une ou plusieures règles\n    ${TemaL}> §rEmprisonné Pour ${Tema}${player.name}\n    ${TemaL}> §rRaison ${Tema}${razon}"}]}`, player)
                Economylog(`playsound random.anvil_break @p`, player)
                Economylog(`playsound random.anvil_break "${xtarple}"`, player)
                Economylog(`gamemode s "${xtarple}" `, player)
            }
        }
        if (result.formValues[2] === true) {
            if (result.formValues[1]) {
                Economylog(`tag "${xtarple}" remove infractor`, player)
                Economylog(`tp "${xtarple}" "${player.name}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r à été libéré Correctement`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rFantastique... Apparemment tes infractions ont étées supprimées\n    ${TemaL}> §rlibéré Pour ${Tema}${player.name}\n    ${TemaL}> §rRaison ${Tema}${razon}"}]}`, player)
                Economylog(`playsound random.anvil_break @p`, player)
                Economylog(`playsound random.anvil_break "${xtarple}"`, player)
            }
        }
    })
}
function frez(player) {
    let playerObjects = []
    let operations = []
    for (const player of world.getPlayers()) {
        operations.push(player.name)
        playerObjects.push(player)
    }
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Congeler joueur ${Icon}`)
        .dropdown(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Voici les options pour Congeler un joueurs${Tema}:§r\n\n${TemaL}> §rChoisissez le joueur${Tema}:`, operations)
        .textField(`\n${TemaL}> §rRaison${Tema}:`, 'non respect des règles')
        .toggle(`\n${TemaL}> §rActivez pour décongeler${Tema}:§r`, false)
    form.show(player).then(result => {
        const xtarple = operations[result.formValues[0]]
        const razon = result.formValues[1]
        if (result.formValues[2] === false) {
            if (result.formValues[1]) {
                Economylog(`tag "${xtarple}" add infractor`, player)
                Economylog(`tag "${xtarple}" add frz`, player)
                Economylog(`tp "${xtarple}" 384 1 9584`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r à été congelé Correctement`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rOupss... Apparemment vous avez rompu une ou plusieures règles\n    ${TemaL}> §rcongelé Pour ${Tema}${player.name}\n    ${TemaL}> §rRaison ${Tema}${razon}"}]}`, player)
                Economylog(`playsound random.anvil_break @p`, player)
                Economylog(`playsound random.anvil_break "${xtarple}"`, player)
                Economylog(`gamemode s "${xtarple}" `, player)
            }
        }
        if (result.formValues[2] === true) {
            if (result.formValues[1]) {
                Economylog(`tag "${xtarple}" remove infractor`, player)
                Economylog(`tp "${xtarple}" "${player.name}"`, player)
                Economylog(`tag "${xtarple}" remove frz`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r à été décongelé Correctement`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rFantastique... Apparemment tes infractions ont étées supprimées\n    ${TemaL}> §rAnnulé pour ${Tema}${player.name}\n    ${TemaL}> §rRaison ${Tema}${razon}"}]}`, player)
                Economylog(`playsound random.anvil_break @p`, player)
                Economylog(`playsound random.anvil_break "${xtarple}"`, player)
            }
        }
    })
}
function offc(player) {
    let playerObjects = []
    let operations = []
    for (const player of world.getPlayers()) {
        operations.push(player.name)
        playerObjects.push(player)
    }
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Aveugler joueur ${Icon}`)
        .dropdown(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Voici les options pour Aveugler un joueurs${Tema}:§r\n\n${TemaL}> §rChoisissez le joueur${Tema}:`, operations)
        .textField(`\n${TemaL}> §rRaison${Tema}:`, 'non respect des règles')
        .toggle(`\n${TemaL}> §rActivez pour rendre la vue${Tema}:§r`, false)
    form.show(player).then(result => {
        const xtarple = operations[result.formValues[0]]
        const razon = result.formValues[1]
        if (result.formValues[2] === false) {
            if (result.formValues[1]) {
                Economylog(`tag "${xtarple}" add infractor`, player)
                Economylog(`tag "${xtarple}" add Aveugler`, player)
                Economylog(`tp "${xtarple}" 3260 1 31`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r à été aveuglé Correctement`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rOupss... Apparemment vous avez rompu une ou plusieures règles\n    ${TemaL}> §raveuglé Pour ${Tema}${player.name}\n    ${TemaL}> §rRaison ${Tema}${razon}"}]}`, player)
                Economylog(`playsound random.anvil_break @p`, player)
                Economylog(`playsound random.anvil_break "${xtarple}"`, player)
                Economylog(`gamemode s "${xtarple}" `, player)
            }
        }
        if (result.formValues[2] === true) {
            if (result.formValues[1]) {
                Economylog(`tag "${xtarple}" remove infractor`, player)
                Economylog(`tp "${xtarple}" "${player.name}"`, player)
                Economylog(`tag "${xtarple}" remove Aveugler`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r a retrouvé la vue de nouveau ! `)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rFantastique... Apparemment tes infractions ont étées supprimées\n    ${TemaL}> §rAnnulé pour ${Tema}${player.name}\n    ${TemaL}> §rRaison ${Tema}${razon}"}]}`, player)
                Economylog(`playsound random.anvil_break @p`, player)
                Economylog(`playsound random.anvil_break "${xtarple}"`, player)
            }
        }
    })
}
function vns(player) {
    let playerObjects = []
    let operations = []
    for (const player of world.getPlayers()) {
        operations.push(player.name)
        playerObjects.push(player)
    }
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Vanish joueur ${Icon}`)
        .dropdown(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Voici les options de vanish${Tema}:§r\n\n${TemaL}> §rChoisissez un joueur${Tema}:`, operations)
        .dropdown(`\n${TemaL}> §rType${Tema}:`, ["Invisible", "Spectateur"], 0)
        .toggle(`\n${TemaL}> §rActivez pour supprimer ou changer${Tema}:§r`, false)
    form.show(player).then(result => {
        const xtarple = operations[result.formValues[0]]
        const razon = result.formValues[1]
        if (result.formValues[2] === false) {
            if (result.formValues[1] === 0) {
                Economylog(`tag "${xtarple}" add vns0`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r tout Correctement`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rVanish mode\n    ${TemaL}> §rActivé Pour ${Tema}${player.name}\n    ${TemaL}> §rType ${Tema}Invisible"}]}`, player)
                Economylog(`playsound random.anvil_break @p`, player)
                Economylog(`playsound random.anvil_break "${xtarple}"`, player)
            }
            if (result.formValues[1] === 1) {
                Economylog(`gamemode spectator "${xtarple}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r tout Correctement`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rVanish mode\n    ${TemaL}> §rActivé Pour ${Tema}${player.name}\n    ${TemaL}> §rType ${Tema}Spectateur"}]}`, player)
                Economylog(`playsound random.anvil_break @p`, player)
                Economylog(`playsound random.anvil_break "${xtarple}"`, player)
            }
        }
        if (result.formValues[2] === true) {
            if (result.formValues[1] === 0) {
                Economylog(`tag "${xtarple}" remove vns0`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r tout Correctement`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rVanish mode\n    ${TemaL}> §rEnlevé Pour ${Tema}${player.name}\n    ${TemaL}> §rType ${Tema}Invisible"}]}`, player)
                Economylog(`playsound random.anvil_break @p`, player)
                Economylog(`playsound random.anvil_break "${xtarple}"`, player)
            }
            if (result.formValues[1] === 1) {
                Economylog(`gamemode s "${xtarple}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r tout Correctement`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rVanish mode\n    ${TemaL}> §rEnlevé Pour ${Tema}${player.name}\n    ${TemaL}> §rType ${Tema}Spectateur"}]}`, player)
                Economylog(`playsound random.anvil_break @p`, player)
                Economylog(`playsound random.anvil_break "${xtarple}"`, player)
            }
        }
    })
}
function edit(player) {
    let playerObjects = []
    let operations = []
    for (const player of world.getPlayers()) {
        operations.push(player.name)
        playerObjects.push(player)
    }
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Modification de nom${Icon}`)
        .dropdown(`${Icon}${TemaL}>> §rBonjour${Tema}${player.name}§r, dans cette page, vous pouvez changer votre nom\n\n${TemaL}> §rNom actuel${Tema}:\n§7${getFake(player)}\n\n${TemaL}> §rChoisissez un joueur${Tema}:§r`, operations)
        .textField(`\n${TemaL}>§r Ecrivez votre nouveau nom${Tema}`, 'dyson2000')
        .toggle(`\n${TemaL}> §rActivez pour supprimer`, false)
    form.show(player).then(result => {
        const xtarple = operations[result.formValues[0]]
        const xtarple1 = playerObjects[result.formValues[0]]
        const newname = result.formValues[1]
        if (result.formValues[2] === false) {
            if (!testTag(`bedit`, xtarple1)) {
                Economylog(`tag "${xtarple}" add bedit`, player)
                Economylog(`tag "${xtarple}" add "${PrefixF}${newname}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r tout Correctement`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rEdit name\n    ${TemaL}> §rModifié Pour ${Tema}${player.name}\n    ${TemaL}> §rNouveau nom ${Tema}${newname}"}]}`, player)
                Economylog(`playsound random.anvil_break @p`, player)
                Economylog(`playsound random.anvil_break "${xtarple}"`, player)
            } else {
                player.tell(`${Icon}${TemaL} ${Name} : §rOh non, Le joueur ${Tema}${xtarple}§r a déjà son nom édité`)
                Economylog(`playsound random.anvil_break @p`, player)
            }
        }
        if (result.formValues[2] === true) {
            Economylog(`tag "${xtarple}" remove "${PrefixF}${newname}"`, player)
            Economylog(`tag "${xtarple}" remove bedit`, player)
            player.tell(`${Icon}${TemaL} ${Name} : §rPrêt, Le joueur ${Tema}${xtarple}§r tout Correctement`)
            Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rEdit name\n    ${TemaL}> §rModifié Pour ${Tema}${player.name}\n    ${TemaL}> §rNom éliminé ${Tema}${newname}"}]}`, player)
            Economylog(`playsound random.anvil_break @p`, player)
            Economylog(`playsound random.anvil_break "${xtarple}"`, player)
        }
    })
}
function adminm(player) {
    const form = new xtar.ActionFormData()
        .title(`${Icon}${TemaL} Admin Menu${Icon}`)
        .body(`${Icon}${TemaL} >>§r Bonjour ${Tema}${player.name}§r, Voici les options administrateur${Tema}.`)
        .button(`${TemaL}Rank Chat${Click}`, 'font/icons/chat')
        .button(`${TemaL}Mute${Click}`, 'font/icons/mute')
        .button(`${TemaL}Emprisonner${Click}`, 'font/icons/jail')
        .button(`${TemaL}Freeze${Click}`, 'font/icons/frezer')
        .button(`${TemaL}Aveugler${Click}`, 'font/icons/offcam')
        .button(`${TemaL}Vanish${Click}`, 'font/icons/vanish')
        .button(`${TemaL}Edit Name${Click}`, 'font/icons/edname')
        .button(`§4§lRetour au début${Click}`, 'font/icons/cancel')
    form.show(player).then(result => {
        if (result.selection === 0) {
            addrank(player)
        }
        if (result.selection === 1) {
            muted(player)
        }
        if (result.selection === 2) {
            jail(player)
        }
        if (result.selection === 3) {
            frez(player)
        }
        if (result.selection === 4) {
            offc(player)
        }
        if (result.selection === 5) {
            vns(player)
        }
        if (result.selection === 6) {
            edit(player)
        }
        if (result.selection === 7) {
            Economylog(`playsound note.pling @p`, player)
            return server(player)
        }
    })
}
function SetColor(player) {
    let playerObjects = []
    let operations = []
    for (const player of world.getPlayers()) {
        operations.push(player.name)
        playerObjects.push(player)
    }
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Chat Rank Colors${Icon}`)
        .dropdown(`${Icon}${TemaL} >> §rDans cette page, vous pouvez changer la couleur du nom du joueur ou rajouter du texte${Tema}.§r\n\n${TemaL}> §rChoisissez le joueur${Tema}:§r`, operations)
        .dropdown(`\n${TemaL}> §rDans quelle section souhaitez-vous ajouter la couleur ?${Tema}:§r`, ['Dans le nom', 'Dans le texte'], 0)
        .textField(`\n${TemaL}> §rQuelle couleur souhaitez-vous ajouter au joueur ?${Tema}:§r`, 'couleur §')
        .textField(`\n${TemaL}> §rRaison${Tema}: §r`, 'La richesse bébé')
        .toggle(`\n${TemaL}> §rActivez pour supprimer la couleur${Tema}:§r`, false)
    form.show(player).then(result => {
        const xtarple = operations[result.formValues[0]]
        const razon = result.formValues[3]
        const color = result.formValues[2]
        if (result.formValues[4] === false) {
            if (result.formValues[1] === 0) {
                Economylog(`tag "${xtarple}" add "${PrefixCN}${color}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rCouleur ajoutée Correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de donner la couleur ${color}(name)§r Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[1] === 1) {
                Economylog(`tag "${xtarple}" add "${PrefixCT}${color}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rCouleur ajoutée Correctement a ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de donner la couleur ${color}(text)§r Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
        }
        if (result.formValues[4] === true) {
            if (result.formValues[1] === 0) {
                Economylog(`tag "${xtarple}" remove "${PrefixCN}${color}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rCouleur Enlevé Correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de supprimer la couleur ${color}(name)§r Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[1] === 1) {
                Economylog(`tag "${xtarple}" remove "${PrefixCT}${color}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rCouleur Enlevé Correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de supprimer la couleur ${color}(text)§r Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
        }
    })
}
function addemojis(player) {
    let playerObjects = []
    let operations = []
    for (const player of world.getPlayers()) {
        operations.push(player.name)
        playerObjects.push(player)
    }
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Chat Rank Emojis${Icon}`)
        .dropdown(`${Icon} ${TemaL}>> §rBonjour ${Tema}${player.name}§r, Cette catégorie est faite pour donner des Emojis aux joueurs${Tema}.\n\n${TemaL}> §rChoisissez quelle Emojis vous souhaitez${Tema}:§r\n`, [`${noob} §6Noob`, `${pro} §9Pro`, `${bt} §bBeterano`, `${yt} §cYT`, `${strm} §dStreamer`, `${tiktoke} §5TikTok`, `${staff} §5Staff`, `${mod} §cModerador`, `${admin} §4Administrador`], 0)
        .dropdown(`\n${TemaL}>§r Choisissez le joueur${Tema}:§r`, operations)
        .textField(`\n${TemaL}> §rRaison${Tema}:§r`, 'Pour être le meilleur!!!')
        .toggle(`\n${TemaL}> §rActivez pour supprimer un Emoji${Tema}:§r`, false)
    form.show(player).then(result => {
        const xtarple = operations[result.formValues[1]]
        const razon = result.formValues[2]
        if (result.formValues[3] === false) {
            if (result.formValues[0] === 0) {
                Economylog(`tag "${xtarple}" add "${PrefixE}${noob}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji attribué correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de donner un Emoji ${noob} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 1) {
                Economylog(`tag "${xtarple}" add "${PrefixE}${pro}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji attribué correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de donner un Emoji ${pro} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 2) {
                Economylog(`tag "${xtarple}" add "${PrefixE}${bt}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji attribué correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de donner un Emoji ${bt} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 3) {
                Economylog(`tag "${xtarple}" add "${PrefixE}${yt}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji attribué correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de donner un Emoji ${yt} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 4) {
                Economylog(`tag "${xtarple}" add "${PrefixE}${strm}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji attribué correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de donner un Emoji ${strm} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 5) {
                Economylog(`tag "${xtarple}" add "${PrefixE}${tiktoke}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji attribué correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de donner un Emoji ${tiktoke} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 6) {
                Economylog(`tag "${xtarple}" add "${PrefixE}${staff}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji attribué correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de donner un Emoji ${staff} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 7) {
                Economylog(`tag "${xtarple}" add "${PrefixE}${mod}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji attribué correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de donner un Emoji ${mod} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 8) {
                Economylog(`tag "${xtarple}" add "${PrefixE}${admin}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji attribué correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de donner un Emoji ${admin} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
        }
        if (result.formValues[3] === true) {
            if (result.formValues[0] === 0) {
                Economylog(`tag "${xtarple}" remove "${PrefixE}${noob}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji retiré correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de supprimer  un Emoji ${noob} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 1) {
                Economylog(`tag "${xtarple}" remove "${PrefixE}${pro}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji retiré correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de supprimer  un Emoji ${pro} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 2) {
                Economylog(`tag "${xtarple}" remove "${PrefixE}${bt}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji retiré correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de supprimer  un Emoji ${bt} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 3) {
                Economylog(`tag "${xtarple}" remove "${PrefixE}${yt}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji retiré correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de supprimer  un Emoji ${yt} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 4) {
                Economylog(`tag "${xtarple}" remove "${PrefixE}${strm}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji retiré correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de supprimer  un Emoji ${strm} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 5) {
                Economylog(`tag "${xtarple}" remove "${PrefixE}${tiktoke}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji retiré correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de supprimer  un Emoji ${tiktoke} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 6) {
                Economylog(`tag "${xtarple}" remove "${PrefixE}${staff}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji retiré correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de supprimer  un Emoji ${staff} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 7) {
                Economylog(`tag "${xtarple}" remove "${PrefixE}${mod}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji retiré correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de supprimer  un Emoji ${mod} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
            if (result.formValues[0] === 8) {
                Economylog(`tag "${xtarple}" remove "${PrefixE}${admin}"`, player)
                player.tell(`${Icon}${TemaL} ${Name} : §rEmoji retiré correctement à ${Tema}${xtarple}`)
                Economylog(`tellraw "${xtarple}" {"rawtext":[{"text":"${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${xtarple}§r, terminé de supprimer  un Emoji ${admin} Pour ${Tema}${player.name}§r, Raison§r ${Tema}:§r ${razon}"}]}`, player)
                Economylog(`playsound random.levelup "${xtarple}"`, player)
                Economylog(`playsound random.levelup "${player.name}"`, player)
            }
        }
    })
}
function addrank(player) {
    const form = new xtar.ActionFormData()
        .title(`${Icon} ${TemaL}Rank Chat${Icon}`)
        .body(`${Icon} ${TemaL}>> §rChoisissez ce que vous voulez faire${TemaL}:§r`)
        .button(`${TemaL}Emojis${Click}`, 'font/icons/emoji')
        .button(`${TemaL}Ranks${Click}`, 'font/icons/rank')
        .button(`${TemaL}Colors${Click}`, 'font/icons/color')
        .button(`§4§lRetour au début${Click}`, 'font/icons/cancel')
    form.show(player).then(result => {
        if (result.selection === 0) {
            addemojis(player)
        }
        if (result.selection === 1) {
            SetRankCustom(player)
        }
        if (result.selection === 2) {
            SetColor(player)
        }
        if (result.selection === 3) {
            Economylog(`playsound note.pling @p`, player)
            return server(player)
        }
    })
}
function SetRankCustom(player) {
    let playerObjects = []
    let operations = []
    for (const player of world.getPlayers()) {
        operations.push(player.name)
        playerObjects.push(player)
    }
    const form = new xtar.ModalFormData()
        .title(`${Icon} ${TemaL}Rank Chat Ranks${Icon}`)
        .dropdown(`${Icon}${TemaL} >> §rDans cette catégorie, vous pouvez attibuer des ranks personalisés${Tema}.§r\n\n${TemaL}>§r Choisissez le joueur${Tema}:§r`, operations)
        .textField(`${TemaL}>§r Rank à attribuer${Tema}:`, `Entre ton rank custom!!!`)
    form.show(player).then(reponse => {
        const target = operations[reponse.formValues[0]]
        const text = reponse.formValues[1]
        if (reponse.formValues[1]) {
            Economylog(`tellraw "${target}" {"rawtext":[{"text":"${Icon} ${TemaL}${Name} :§r Wow ! ${Tema}${target}§r Tu as reçu un rang personalisé :) ${text}"}]}`, player)
            Economylog(`playsound random.levelup "${target}"`, player)
            Economylog(`tag "${target}" add "${PrefixR}${text}"`, player)
        }
    }
    )
}
function conv(player) {
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Banque ${Icon}`)
        .textField(`${Icon}${TemaL} >>§r Bonjour ${Tema}${player.name}§r, Bienvenu à la banque${Tema}.\n\n${TemaL}>§r Ton Niveau actuel ${Tema}:§r ${getScore(player, `lvlxp`)}\n${TemaL}>§r votre Money actuelle ${Tema}:§r ${getScore(player, `${Moneda}`)}\n\n${TemaL}Info : §rEntrez la quantité à convertir${Tema}:§r\n\n`, 'Entrez un montant')
    form.show(player).then(reponse => {
        if (Number(getScore(player.name, `lvlxp`)) < Number(reponse.formValues[0]) || Number(reponse.formValues[0]) < 0) {
            Economyreg(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, Vous ne possedez pas assez de Monnaie §c${reponse.formValues[0]}$`, player)
            Economylog(`playsound note.pling @p`, player)
        } else {
            Economylog(`scoreboard players add @p ${Moneda} ${reponse.formValues[0]}`, player)
            Economylog(`scoreboard players remove @p lvlxp ${reponse.formValues[0]}`, player)
            Economyreg(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, vous avez converti votre argent avec succès §a${reponse.formValues[0]}$`, player)
            Economylog(`playsound moneda @p`, player)
        }
    })
}
function guardar(player) {
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Banque ${Icon}`)
        .textField(`${Icon}${TemaL} >>§r Bonjour ${Tema}${player.name}§r, Bienvenu à la banque${Tema}.\n\n${TemaL}>§r votre Money actuelle ${Tema}:§r ${getScore(player, `${Moneda}`)}\n${TemaL}>§r Tu Dinero Guardado ${Tema}:§r ${getScore(player, `${Moneda1}`)}\n\n${TemaL}Info : §rEntrez la quantité à déposer${Tema}:§r\n\n`, 'Entrez un montant')
    form.show(player).then(reponse => {
        if (Number(getScore(player.name, `${Moneda}`)) < Number(reponse.formValues[0]) || Number(reponse.formValues[0]) < 0) {
            Economyreg(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, Vous ne possedez pas assez de Monnaie §c${reponse.formValues[0]}$`, player)
            Economylog(`playsound note.pling @p`, player)
        } else {
            Economylog(`scoreboard players add @p ${Moneda1} ${reponse.formValues[0]}`, player)
            Economylog(`scoreboard players remove @p ${Moneda} ${reponse.formValues[0]}`, player)
            Economyreg(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, vous avez déposé votre argent avec succès §a${reponse.formValues[0]}$`, player)
            Economylog(`playsound moneda @p`, player)
        }
    })
}
function retirar(player) {
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Banque ${Icon}`)
        .textField(`${Icon}${TemaL} >>§r Bonjour ${Tema}${player.name}§r, Bienvenu à la banque${Tema}.\n\n${TemaL}>§r votre Money actuelle ${Tema}:§r ${getScore(player, `${Moneda}`)}\n${TemaL}>§r Tu Dinero Guardado ${Tema}:§r ${getScore(player, `${Moneda1}`)}\n\n${TemaL}Info : §rEntrez la quantité a retirar${Tema}:§r\n\n`, 'Entrez un montant')
    form.show(player).then(reponse => {
        if (Number(getScore(player.name, `${Moneda1}`)) < Number(reponse.formValues[0]) || Number(reponse.formValues[0]) < 0) {
            Economyreg(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, Vous ne possedez pas assez de Monnaie §c${reponse.formValues[0]}$`, player)
            Economylog(`playsound note.pling @p`, player)
        } else {
            Economylog(`scoreboard players remove @p ${Moneda1} ${reponse.formValues[0]}`, player)
            Economylog(`scoreboard players add @p ${Moneda} ${reponse.formValues[0]}`, player)
            Economyreg(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, vous avez retiré votre argent avec succès §a${reponse.formValues[0]}$`, player)
            Economylog(`playsound moneda @p`, player)
        }
    })
}
function enviar(player) {
    let playerObjects = []
    let operations = []
    for (const player of world.getPlayers()) {
        operations.push(player.name)
        playerObjects.push(player)
    }
    const form = new xtar.ModalFormData()
        .title(`${Icon} ${TemaL} PayPal ${Icon}`)
        .dropdown(`${Icon} ${TemaL}>>§r Bonjour ${Tema}${player.name}§r, Bienvenu à la banque ${Tema}${player.name}§r.\n\n${Tema}>§r votre Money actuelle ${Tema}:§r ${getScore(player.name, `${Moneda}`)}\n\n${Tema}Info :§r Choisissez à qui envoyer la Monnaie${Tema}:§r`, operations)
        .textField(`\n${Tema}Monto : §rEntrez la quantité a enviar${Tema}:§r`, 'Entrez un montant')
    form.show(player).then(reponse => {
        if (Number(getScore(player.name, `${Moneda}`)) < Number(reponse.formValues[1]) || Number(reponse.formValues[1]) < 0) {
            Economyreg(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, Vous ne possedez pas assez de Monnaie §c${reponse.formValues[1]}$`, player)
            Economylog(`playsound note.pling @p`, player)
        } else {
            Economylog(`scoreboard players remove @p ${Moneda} ${reponse.formValues[1]}`, player)
            Economylog(`scoreboard players add ${operations[reponse.formValues[0]]} ${Moneda} ${reponse.formValues[1]}`, player)
            const recept = operations[reponse.formValues[0]]
            Economyreg(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${operations[reponse.formValues[0]]}§r, vous avez reçu §a${reponse.formValues[1]}$§r de ${Tema}${player.name}`, recept)
            Economyreg(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, vous avez envoyé §a${reponse.formValues[1]}$§r avec succès à ${Tema}${operations[reponse.formValues[0]]}`, player)
            Economylog(`playsound moneda @p`, player)
        }
    })
}
function ajustes(player) {
    const form = new xtar.ActionFormData()
        .title(`${Icon}${TemaL} Options du joueurr ${Icon}`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Voici les petits changements que vous pouvez effectuer${Tema}.`)
        .button(`${TemaL}Scoreboard Off${Click}`, 'font/icons/off')
        .button(`${TemaL}Scoreboard On${Click}`, 'font/icons/on')
        .button(`§4§lRetour au début${Click}`, 'font/icons/cancel')
    form.show(player).then(result => {
        if (result.selection === 0) {
            if (player.hasTag(`oct`)) {
                player.tell(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, vous avez caché le scoreboard`)
                Economylog(`playsound note.pling @p`, player)
            } else {
                player.addTag(`oct`)
                player.tell(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, scoreboard caché`)
            }
        }
        if (result.selection === 1) {
            if (!player.hasTag(`oct`)) {
                player.tell(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, vous avez Activé le screboard`)
                Economylog(`playsound note.pling @p`, player)
            } else {
                player.removeTag(`oct`)
                player.tell(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, scoreboard Activé`)
            }
        }
        if (result.selection === 2) {
            Economylog(`playsound note.pling @p`, player)
            return server(player)
        }
    })
}
function estado(player) {
    const form = new xtar.ActionFormData()
        .title(`${Icon}${TemaL} Statut ${Icon}`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Voici les options que vous pouvez modifier sur votre statut${Tema}:§r\n`)
        .button(`${TemaL}En ligne${Click}`, 'font/icons/online')
        .button(`${TemaL}Hors ligne${Click}`, 'font/icons/offline')
        .button(`${TemaL}Inactif${Click}`, 'font/icons/Inactivo')
        .button(`${TemaL}Ne Pas Déranger${Click}`, 'font/icons/nomolestar')
        .button(`§4§lRetour au début${Click}`, 'font/icons/cancel')
    form.show(player).then(result => {
        if (result.selection === 0) {
            if (player.hasTag(`${PrefixET}§cNe Pas Déranger`)) {
                player.removeTag(`${PrefixET}§cNe Pas Déranger`)
            }
            if (player.hasTag(`${PrefixET}§gInactif`)) {
                player.removeTag(`${PrefixET}§gInactif`)
            }
            if (player.hasTag(`${PrefixET}§7Hors ligne`)) {
                player.removeTag(`${PrefixET}§7Hors ligne`)
            }
            player.tell(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, Votre statut à été actualisé vers --> En Ligne`)
        }
        if (result.selection === 1) {
            if (player.hasTag(`${PrefixET}§cNe Pas Déranger`)) {
                player.removeTag(`${PrefixET}§cNe Pas Déranger`)
            }
            if (player.hasTag(`${PrefixET}§gInactif`)) {
                player.removeTag(`${PrefixET}§gInactif`)
            }
            player.addTag(`${PrefixET}§7Hors ligne`)
            player.tell(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, Votre statut à été actualisé vers --> Hors ligne, Souvenz-vous que une mention apparaître à la fin de vos messages. "§o§7{off}§r"`)
        }
        if (result.selection === 2) {
            if (player.hasTag(`${PrefixET}§cNe Pas Déranger`)) {
                player.removeTag(`${PrefixET}§cNe Pas Déranger`)
            }
            if (player.hasTag(`${PrefixET}§7Hors ligne`)) {
                player.removeTag(`${PrefixET}§7Hors ligne`)
            }
            player.addTag(`${PrefixET}§gInactif`)
            player.tell(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, Votre statut à été actualisé vers --> Inactif, Souvenz-vous que une mention apparaître à la fin de vos messages. "§o§7{zzz}§r"`)
        }
        if (result.selection === 3) {
            if (player.hasTag(`${PrefixET}§gInactif`)) {
                player.removeTag(`${PrefixET}§gInactif`)
            }
            if (player.hasTag(`${PrefixET}§7Hors ligne`)) {
                player.removeTag(`${PrefixET}§7Hors ligne`)
            }
            player.addTag(`${PrefixET}§cNe Pas Déranger`)
            player.tell(`${Icon}${TemaL} ${Name} : §rBonjour ${Tema}${player.name}§r, Votre statut à été actualisé vers --> Ne Pas Déranger, Souvenez-vous que vous ne pouvez ni envoyer, ni recevoir de messages`)
        }
        if (result.selection === 4) {
            Economylog(`playsound note.pling @p`, player)
            return server(player)
        }
    })
}
function estadisticas(player) {
    const form = new xtar.ActionFormData()
        .title(`${Icon}${TemaL} Statistiques ${Icon}`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Voici vos Statistiques${Tema}:§r\n\n${TemaL}           -={§r${Tema}Joueur${TemaL}}=-§r\n${TemaL}> §rNom ${TemaL}:§r ${getFake(player)}\n${TemaL}> §rRank ${TemaL}:§r ${getNK(player)}\n${TemaL}> §rEmojis ${TemaL}:§r ${getEmoji(player)}\n${TemaL}> §rstatut ${TemaL}:§r ${getEstados(player)}\n\n${TemaL}           -={§r${Tema}Economie${TemaL}}=-§r\n${TemaL}> §rNiveau XP ${TemaL}:§r ${getScore(player, `lvlxp`)}\n${TemaL}> §rArgent ${TemaL}:§r ${getScore(player, `${Moneda}`)}\n${TemaL}> §rDepositado ${TemaL}:§r ${getScore(player, `${Moneda1}`)}\n\n${TemaL}           -={§r${Tema}Ponctuation${TemaL}}=-§r\n${TemaL}> §rKills ${TemaL}:§r ${getScore(player, `kills`)}\n${TemaL}> §rMorts ${TemaL}:§r ${getScore(player, `deaths`)}\n\n${TemaL}             -={§r${Tema}Temps${TemaL}}=-§r\n${TemaL}> §rJours ${TemaL}:§r ${getScore(player, `d`)}\n${TemaL}> §rHeures ${TemaL}:§r ${getScore(player, `h`)}\n${TemaL}> §rMinutes ${TemaL}:§r ${getScore(player, `m`)}\n${TemaL}> §rSecondes ${TemaL}:§r ${getScore(player, `s`)}\n`)
        .button(`§4§lRetour au début${Click}`, 'font/icons/cancel')
    form.show(player).then(result => {
        if (result.selection === 0) {
            Economylog(`playsound note.pling @p`, player)
            return server(player)
        }
    })
}
function teleports(player) {
    const form = new xtar.ActionFormData()
        .title(`${TemaL}${Icon} Téléportation ${Icon}`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Voici toutes les options pour se téléporter${Tema}.`)
        .button(`${TemaL}VIP ->> Prochainement ${Click}`, 'textures/ui/dressing_room_skins')
        .button(`${TemaL}Mines${Click}`, 'textures/ui/icon_iron_pickaxe')
        .button(`${TemaL}Coffres${Click}`, 'textures/ui/icon_blackfriday')
        .button(`${TemaL}Random${Click}`, 'textures/ui/icon_summer')
        .button(`${TemaL}OverWorld${Click}`, 'textures/ui/icon_spring')
        .button(`${TemaL}Lobby${Click}`, 'textures/ui/sidebar_icons/promotag')
        .button(`§4§lRetour au début${Click}`, 'font/icons/cancel')
    form.show(player).then(result => {
        if (result.selection === 1) {
            Economyreg(`${Icon}${TemaL} ${Name} : §rVous avez été envoyé dans les Mines${Tema}.`, player)
            Economylog(`playsound mob.endermen.portal @p`, player)
            Economylog(`particle tp ~ ~ ~`, player)
            player.runCommandAsync(`tp "${player.name}" 589.03 -2.00 5768.96`)
            Economylog(`gamemode s @p`, player)
        }
        if (result.selection === 2) {
            Economyreg(`${Icon}${TemaL} ${Name} : §rVous avez été envoyé dans la Salle Des Coffres${Tema}.`, player)
            Economylog(`playsound mob.endermen.portal @p`, player)
            Economylog(`particle tp ~ ~ ~`, player)
            player.runCommandAsync(`tp "${player.name}" 572.02 268 -246.69`)
            Economylog(`gamemode a @p`, player)
        }
        if (result.selection === 3) {
            const Xx = Math.round(player.location.x)
            const Yy = Math.round(player.location.y)
            const Zz = Math.round(player.location.z)
            Economyreg(`${Icon}${TemaL} ${Name} : §rVous avez été envoyé dans une Zone Random${Tema}.`, player)
            Economylog(`playsound mob.endermen.portal @p`, player)
            Economylog(`particle tp ~ ~ ~`, player)
            Economylog(`effect "${player.name}" slow_falling 35 0 true`, player)
            if (Yy >= 50) {
                player.runCommandAsync(`tp "${player.name}" ${Economygen(Xx * 3, Xx)} ${Yy + 8} ${Economygen(Zz % 2, Zz)}`)
                Economylog(`gamemode s @p`, player)
            } else {
                player.runCommandAsync(`tp "${player.name}" ${Economygen(Xx * 3, Xx)} ${Yy * 3} ${Economygen(Zz % 2, Zz)}`)
                Economylog(`gamemode s @p`, player)
            }
        }
        if (result.selection === 4) {
            Economyreg(`${Icon}${TemaL} ${Name} : §rVous avez été envoyé dans Overworld${Tema}.`, player)
            Economylog(`playsound mob.endermen.portal @p`, player)
            Economylog(`particle tp ~ ~ ~`, player)
            Economylog(`effect "${player.name}" slow_falling 15 0 true`, player)
            player.runCommandAsync(`tp "${player.name}" 425 100 697 90`)
            Economylog(`gamemode s @p`, player)
        }
        if (result.selection === 5) {
            Economyreg(`${Icon}${TemaL} ${Name} : §rVous avez été envoyé au Lobby${Tema}.`, player)
            Economylog(`playsound mob.endermen.portal @p`, player)
            Economylog(`particle tp ~ ~ ~`, player)
            player.runCommandAsync(`tp "${player.name}" ${Lobby}`)
            Economylog(`gamemode s @p`, player)
        }
        if (result.selection === 6) {
            Economylog(`playsound note.pling @p`, player)
            return server(player)
        }
    })
}
function \u0077\u0065\u006c\u0063\u006f\u006d\u0065(player) {
    const form = new xtar.ActionFormData()
        .title(`${Icon}${TemaL}\u0020\u0045\u0053\u0046\u0059\u0053\u0020\u002d\u0020\u0053\u0054\u0055\u0044\u0049\u004f\u0020${Icon}`)
        .body(`${Icon}${TemaL}\u0020\u003e\u003e\u0020\u00a7\u0072\u0046\u0061\u006e\u0074\u00e1\u0073\u0074\u0069\u0063\u006f\u002c\u0020\u0065\u0073\u0074\u00e1\u0073\u0020\u0075\u0074\u0069\u006c\u0069\u007a\u0061\u006e\u0064\u006f\u0020${Tema}\u0045\u0063\u006f\u006e\u006f\u006d\u0079\u0020\u0053\u0079\u0073\u0074\u0065\u006d\u00a7\u0072\u002c\u0020\u0065\u0073\u0074\u0065\u0020\u006d\u0069\u0073\u006d\u006f\u0020\u0065\u0073\u0020\u0075\u006e\u0020\u0061\u0064\u0064\u006f\u006e\u0020\u0071\u0075\u0065\u0020\u0061\u0067\u0072\u0065\u0067\u0061\u0072\u0020\u006c\u0069\u0074\u0065\u0072\u0061\u006c\u006d\u0065\u006e\u0074\u0065\u0020\u0063\u0061\u0073\u0069\u0020\u0075\u006e\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u0020\u0079\u0061\u0020\u006c\u0069\u0073\u0074\u006f\u0020\u0070\u0061\u0072\u0061\u0020\u0075\u0073\u0061\u0072\u0073\u0065\u002c\u0020\u0063\u0072\u0065\u0061\u0064\u006f\u0020\u0070\u006f\u0072\u0020${Tema}\u0045\u0053\u0046\u0059\u0053\u0020\u002d\u0020\u0053\u0054\u0055\u0044\u0049\u004f\n\n\u00a7\u006c\u00a7\u0037\u005b\u0045\u0053\u0046\u0059\u0053\u0020\u0053\u0054\u0055\u0044\u0049\u004f\u005d\n\u00a7\u0072\u00a7\u0039\u00a7\u006c\u0044\u0069\u0073\u0063\u006f\u0072\u0064\u0020\u003a\u0020\u00a7\u0072\u0064\u0069\u0073\u0063\u006f\u0072\u0064\u002e\u0067\u0067\u002f\u0054\u0074\u0062\u0066\u0067\u004e\u0050\u0038\u0073\u0032\u00a7\u0072\n\n\u00a7\u006c\u00a7\u0037\u005b\u0043\u006f\u0064\u0065\u0073\u005d\n\u00a7\u0072\u00a7\u0063\u00a7\u006c\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u003a\u0020\u00a7\u0072\u0053\u0069\u0067\u006e\u006b\u0073\u004d\u0043\n\u00a7\u0072\u00a7\u0039\u00a7\u006c\u0044\u0069\u0073\u0063\u006f\u0072\u0064\u0020\u003a\u0020\u00a7\u0072\u0053\u0069\u0067\u006e\u006b\u0073\u004d\u0043\u0023\u0030\u0031\u0038\u0037\n\n\u00a7\u0037\u00a7\u006c\u005b\u0044\u0069\u0073\u0065\u00f1\u0061\u0064\u006f\u0072\u005d\n\u00a7\u0072\u00a7\u0063\u00a7\u006c\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u003a\u0020\u00a7\u0072\u0045\u0069\u0064\u0061\u006e\u0020\u0057\n\u00a7\u0072\u00a7\u0039\u00a7\u006c\u0044\u0069\u0073\u0063\u006f\u0072\u0064\u0020\u003a\u0020\u00a7\u0072\u0045\u0069\u0064\u0061\u006e\u0057\u0023\u0037\u0035\u0039\u0039\n\n`)
        .button(`\u00a7\u0034\u00a7\u006c\u0056\u006f\u006c\u0076\u0065\u0072${Click}`, '\u0066\u006f\u006e\u0074\u002f\u0069\u0063\u006f\u006e\u0073\u002f\u0063\u0061\u006e\u0063\u0065\u006c')
    form.show(player).then(result => {
        if (result.selection === 0) {
            ///Que Mrd Haces Aqui bldo JAJAJA???
        }
    })
}
function tpa(player) {
    const playerObject = []
    const playerName = []
    for (const player of world.getPlayers()) {
        playerName.push(player.name)
        playerObject.push(player)
    }
    const form = new xtar.ModalFormData()
        .title(`${TemaL}${Icon} TPA ${Icon}`)
        .dropdown(`${Icon}${TemaL} >> §rHola ${Tema}${player.name}§r, para enviar un tpa asegurate que el otro jugador no tenga la opción no molestar activada\n\n${TemaL}>§r Escoge un jugador${Tema}:`, playerName)
        .dropdown(`\n${TemaL}>§r Escoge una acción${Tema}:§r`, [" Traer a mi ubicación", " Ir a su ubicación"], 0)
        .textField(`\n${TemaL}>§r Motivo${Tema}:`, `Acepta mi tpa pls!!!`)
    form.show(player).then(result => {
        const pepsi = playerObject[result.formValues[0]]
        const cocacola = playerName[result.formValues[0]]
        const accion = result.formValues[1]
        const mr = result.formValues[2]
        const form0 = new xtar.MessageFormData()
        if (!testTag(`${PrefixET}§cNo Molestar`, pepsi)) {
            if (!testTag(`infractor`, pepsi)) {
                if (accion === 0) {
                    form0.title(`${Icon} Solicitud entrante${Tema}:`)
                    form0.body(`${Icon}${TemaL} >> §rHola ${Tema}${cocacola}§r, te acaba de llegar una solicitud de ${Tema}${player.name}§r para que vayas a su ubicación\n\n${TemaL}> §rMotivo${Tema}: §r${mr}`)
                }
                if (accion === 1) {
                    form0.title(`${Icon} Solicitud entrante${Tema}:`)
                    form0.body(`${Icon}${TemaL} >> §rHola ${Tema}${cocacola}§r, te acaba de llegar una solicitud de ${Tema}${player.name}§r para que venga a tu ubicación\n\n${TemaL}> §rMotivo${Tema}: §r${mr}`)
                }
                form0.button1(`§a§lAceptar solicitud`)
                form0.button2(`§c§lRechazar solicitud`)
                form0.show(pepsi).then(result => {
                    if (result.selection != 1) return Economyreg(`${Icon}${TemaL} ${Name} :§r Solicitud cancelada por ${Tema}${cocacola}`, player)
                    Economyreg(`${Icon}${TemaL} ${Name} :§r Solicitud aceptada por ${Tema}${cocacola}`, player)
                    if (accion === 0) {
                        player.runCommandAsync(`tp "${cocacola}" "${player.name}"`)
                        player.runCommandAsync(`playsound mob.endermen.portal "${cocacola}"`)
                        player.runCommandAsync(`playsound mob.endermen.portal "${player.name}"`)
                    }
                    if (accion === 1) {
                        player.runCommandAsync(`tp "${player.name}" "${cocacola}"`)
                        player.runCommandAsync(`playsound mob.endermen.portal "${cocacola}"`)
                        player.runCommandAsync(`playsound mob.endermen.portal "${player.name}"`)
                    }
                })
            } else {
                const form = new xtar.ActionFormData()
                    .title(`${Icon} Solicitud entrante${Tema}:`)
                    .body(`${Icon}${TemaL} >> §rHola ${Tema}${player.name}§r, al parecer el usuario ${Tema}${cocacola}§r tiene infracciones cometidas por lo cual no se puede procesar ninguna solicitud${Tema}.`)
                    .button(`§4§lVolver al Inicio${Click}`, 'font/icons/cancel')
                form.show(player).then(result => {
                    if (result.selection === 0) {
                        Economylog(`playsound note.pling @p`, player)
                        return server(player)
                    }
                })
            }
        } else {
            const form = new xtar.ActionFormData()
                .title(`${Icon} Solicitud entrante${Tema}:`)
                .body(`${Icon} ${TemaL}>> §rOpps ${Tema}${player.name}§r, al parecer el usuario ${Tema}${cocacola}§r tiene activado el modo no molestar por lo cual no puedes procesar ninguna solicitud${Tema}.`)
                .button(`§4§lVolver al Inicio${Click}`, 'font/icons/cancel')
            form.show(player).then(result => {
                if (result.selection === 0) {
                    Economylog(`playsound note.pling @p`, player)
                    return server(player)
                }
            })
        }
    })
}
function tpar(player) {
    let players = []
    let users = []
    for (const player of world.getPlayers()) {
        users.push(player.name)
        players.push(player)
    }
    const form = new xtar.ModalFormData()
        .title(`${TemaL}${Icon} TPA ${Icon}`)
        .toggle(`${Icon}${TemaL} >>§r Activa esta opción para solicitar al otro jugador que venga a tu posición${Tema}:`)
        .dropdown(`\n${Icon}${TemaL} >>§r Escoge el jugador${Tema}:`, users)
    form.show(player).then(response => {
        let p = players[response.formValues[1]] // obj
        let u = users[response.formValues[1]] // Name
        let r = response.formValues[0]
        const form = new xtar.MessageFormData()
        if (!testTag(`${PrefixET}§cNo Molestar`, p)) {
            if (!testTag(`infractor`, p)) {
                if (r) {
                    form.title(`${Icon} Solicitud entrante${Tema}:`)
                    form.body(`${Icon}${TemaL} >> §rHola ${Tema}${u}§r, te acaba de llegar una solicitud de ${Tema}${player.name}§r para que vayas a su ubicación${Tema}.`)
                } else {
                    form.title(`${Icon} Solicitud entrante${Tema}:`)
                    form.body(`${Icon}${TemaL} >> §rHola ${Tema}${u}§r, te acaba de llegar una solicitud de ${Tema}${player.name}§r para que venga a tu ubicación${Tema}.`)
                }
                form.button1(`§a§lAceptar solicitud`)
                form.button2(`§c§lRechazar solicitud`)
                form.show(p).then(response => {
                    if (response.selection != 1) return Economyreg(`${Icon}${TemaL} ${Name} :§r Solicitud cancelada por ${Tema}${u}`, player)
                    Economyreg(`${Icon}${TemaL} ${Name} :§r Solicitud aceptada por ${Tema}${u}`, player)
                    if (r) {
                        player.runCommandAsync(`tp "${u}" "${player.name}"`)
                        player.runCommandAsync(`playsound mob.endermen.portal "${u}"`)
                        player.runCommandAsync(`playsound mob.endermen.portal "${player.name}"`)
                    } else {
                        player.runCommandAsync(`tp "${player.name}" "${u}"`)
                        player.runCommandAsync(`playsound mob.endermen.portal "${u}"`)
                        player.runCommandAsync(`playsound mob.endermen.portal "${player.name}"`)
                    }
                })
            } else {
                const form = new xtar.ActionFormData()
                    .title(`${Icon} Solicitud entrante${Tema}:`)
                    .body(`${Icon}${TemaL} >> §rHola ${Tema}${player.name}§r, al parecer el usuario ${Tema}${u}§r tiene infracciones cometidas por lo cual no puedes enviarle ninguna solicitud${Tema}.`)
                    .button(`§4§lVolver al Inicio${Click}`, 'font/icons/cancel')
                form.show(player).then(result => {
                    if (result.selection === 0) {
                        Economylog(`playsound note.pling @p`, player)
                        return server(player)
                    }
                })
            }
        } else {
            const form = new xtar.ActionFormData()
                .title(`${Icon} Solicitud entrante${Tema}:`)
                .body(`${Icon} ${TemaL}>> §rOpps ${Tema}${player.name}§r, al parecer el usuario ${Tema}${u}§r tiene activado el modo no molestar por lo cual no puedes enviarle ninguna solicitud${Tema}.`)
                .button(`§4§lVolver al Inicio${Click}`, 'font/icons/cancel')
            form.show(player).then(result => {
                if (result.selection === 0) {
                    Economylog(`playsound note.pling @p`, player)
                    return server(player)
                }
            })
        }
    })
}

/// ⇏ 𝐄𝐱𝐩𝐨𝐫𝐭𝐚𝐜𝐢𝐨𝐧
export { server, \u0077\u0065\u006c\u0063\u006f\u006d\u0065, adminm }
