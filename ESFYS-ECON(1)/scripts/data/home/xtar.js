/// ⇏ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐜𝐢𝐨𝐧 
import { world, Location } from '@minecraft/server'
import { PrefixH } from '../../confi/xtar.js' 
import { TemaL, Tema } from '../../confi/xtar.js' 
import { ListaCMD, CmdA1, CmdA2, CmdA3, CmdA4, CmdA5, CmdA6, CmdA7, CmdA8, CmdA9, CmdA10, CmdA11, CmdA12, CmdA13, CmdA14, CmdA15, CmdA16, xTartHelpMessage } from './ci/xtar.js'

/// ⇏ 𝐃𝐚𝐭𝐚
let reply = []

/// ⇏ 𝐗𝐭𝐚𝐫𝐢𝐧𝐠
function HOMECMD(msg) {
    let srcPlayer = msg.sender
    let args_ = msg.message.slice(PrefixH.length).trim().split(' ')
    let command = args_.shift().toLowerCase()
    let args = args_.join('_').toLowerCase()
    let player = srcPlayer.name ?? srcPlayer.nameTag
    msg.cancel = true

    if (ListaCMD.includes(command) && args.length <= 0) {
        runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cEs obligatorio ingresar el nombre de la home" } ] }`, srcPlayer.dimension)
        return
    }

    let playerX = Math.floor(srcPlayer.location.x)
    let playerY = Math.floor(srcPlayer.location.y)
    let playerZ = Math.floor(srcPlayer.location.z)
    let playerDimension = currentDimension(srcPlayer)
    let playerDimId = dimToId(playerDimension)
    let playerRotX = srcPlayer.rotation.x.toFixed(3)
    let playerRotY = srcPlayer.rotation.y.toFixed(3)
    let getHomeTag = srcPlayer.getTags().join(", ")
    let homeReg = new RegExp(`§0H_${args}D_(\\d+)X_(-\\d+|\\d+)Y_(-\\d+|\\d+)Z_(-\\d+|\\d+)RX_(-\\d+|\\d+)\\.(-\\d+|\\d+)RY_(-\\d+|\\d+)\\.(-\\d+|\\d+)§r`)
    let homeNamesReg = /(?<=§0H_).+?(?=D_(\d+)X_(-\d+|\d+)Y_(-\d+|\d+)Z_(-\d+|\d+)RX_(-\d+|\d+)\.(\d+)RY_(-\d+|\d+)\.(\d+)§r)/g
    let homeFind = getHomeTag.match(homeReg)
    let homeTagX = 0
    let homeTagY = 0
    let homeTagZ = 0
    let homeRx = 0
    let homeRy = 0
    let homeDimension = 0
    let allHomeName = ['Ž']
    let homeName = "error~"
    let homeDimensionName = "OverWorld"

    if (homeFind != null) {
        homeTagX = homeFind[0].match(/(?<=X_)(-\d+|\d+)/g)
        homeTagY = homeFind[0].match(/(?<=Y_)(-\d+|\d+)/g)
        homeTagZ = homeFind[0].match(/(?<=Z_)(-\d+|\d+)/g)
        homeRx = homeFind[0].match(/(?<=RX_)(-\d+|\d+)\.(-\d+|\d+)/g)
        homeRy = homeFind[0].match(/(?<=RY_)(-\d+|\d+)\.(-\d+|\d+)/g)
        homeDimension = homeFind[0].match(/(?<=D_)(-\d+|\d+)/g)
        allHomeName = getHomeTag.match(homeNamesReg)
        homeName = homeFind[0].match(homeNamesReg)
        homeDimensionName = idToDim(homeDimension[0])
    }

    switch (command) {
        case `h`:
        case `help`:
        case `ayuda`:
            runCmd(`tellraw "${player}" { "rawtext": [ { "text": "${xTartHelpMessage}" } ] }`, world.getDimension(playerDimension))
            break
        case `${CmdA1}`:
        case `${CmdA2}`:
            if (allHomeName.includes(args)) {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cYa tienes agregada la home §l${args}§r§c, usa §l${PrefixH} mover <Name Home>§r§c para mover de ubicacion" } ] }`, world.getDimension(playerDimension))
            } else {
                srcPlayer.addTag(`§0H_${args}D_${playerDimId}X_${playerX}Y_${playerY}Z_${playerZ}RX_${playerRotX}RY_${playerRotY}§r`)
                runCmd(`particle tp ${playerX} ${playerY} ${playerZ}`, world.getDimension(playerDimension))
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": " ${TemaL}Home System :§r Home establecida con el nombre ${Tema}${args} §rubicada en X:${Tema}${playerX}§r, Y:${Tema}${playerY}§r, Z:${Tema}${playerZ}\n           §rUsa ${Tema}${PrefixH} ${CmdA4} ${args} §rpara mover de ubicacion" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA3}`:
        case `${CmdA4}`:
            if (allHomeName.includes(args)) {
                srcPlayer.removeTag(`§0H_${args}D_${homeDimension[0]}X_${homeTagX[0]}Y_${homeTagY[0]}Z_${homeTagZ[0]}RX_${homeRx[0]}RY_${homeRy[0]}§r`)
                srcPlayer.addTag(`§0H_${args}D_${playerDimId}X_${playerX}Y_${playerY}Z_${playerZ}RX_${playerRotX}RY_${playerRotY}§r`)
                runCmd(`particle tp ${playerX} ${playerY} ${playerZ}`, world.getDimension(playerDimension))
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": " ${TemaL}Home System :§r Has reubicar tu casa ${Tema}${args}§r en la ubicacion X:${Tema}${playerX}§r, Y:${Tema}${playerY}§r, Z:${Tema}${playerZ}" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cNo existe la home llamda §l${args}§r§c, Usa el comando §l${PrefixH} ${CmdA2} <Name Home> §r§cpara agregarla" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA5}`:
        case `${CmdA6}`:
            if (allHomeName.includes(args)) {
                runCmd(`particle minecraft:egg_destroy_emitter ${playerX} ${playerY} ${playerZ}`, world.getDimension(playerDimension))
                srcPlayer.teleport(new Location(parseInt(homeTagX[0]) + 0.5, parseInt(homeTagY[0]) + 0.15, parseInt(homeTagZ[0]) + 0.5), world.getDimension(homeDimensionName), parseFloat(homeRx[0]), parseFloat(homeRy[0]))
                runCmd(`particle tp ${homeTagX[0]} ${homeTagY[0]} ${homeTagZ[0]}`, world.getDimension(homeDimensionName))
                runCmd(`playsound beacon.activate @a ${homeTagX[0]} ${homeTagY[0]} ${homeTagZ[0]} 1`, world.getDimension(homeDimensionName))
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": " ${TemaL}Home System :§r Fuiste enviado a tu home llamada ${Tema}${args}" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cNo existe la home llamda §l${args}§r§c, Usa el comando §l${PrefixH} ${CmdA2} <Name Home> §r§cpara agregarla" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA7}`:
        case `${CmdA8}`:
            if (allHomeName.includes(args)) {
                srcPlayer.removeTag(`§0H_${args}D_${homeDimension[0]}X_${homeTagX[0]}Y_${homeTagY[0]}Z_${homeTagZ[0]}RX_${homeRx[0]}RY_${homeRy[0]}§r`)
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": " ${TemaL}Home System :§r Tu home llamda ${Tema}${args} ${Tema}fue eliminada correctamente" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cNo existe la home llamda §l${args}§r§c, Usa el comando §l${PrefixH} ${CmdA2} <Name Home> §r§cpara agregarla" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA9}`:
        case `${CmdA10}`:
            let allHome = getHomeTag.match(homeNamesReg)
            if (allHome == null) {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cNo tienes ninguna home agregada" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": " ${TemaL}Home System :§r Tus home's actuales son: ${Tema}${allHome.sort().join('§r, ${Tema}', '')}" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA11}`:
        case `${CmdA12}`:
            if (allHomeName.includes(args)) {
                runCmd(`spawnpoint "${player}" ${homeTagX[0]} ${homeTagY[0]} ${homeTagZ[0]}`, world.getDimension(homeDimensionName))
                runCmd(`particle tp ${homeTagX[0]} ${homeTagY[0]} ${homeTagZ[0]}`, world.getDimension(homeDimensionName))
                runCmd(`particle minecraft:balloon_gas_particle ${homeTagX[0]} ${homeTagY[0]} ${homeTagZ[0]}`, world.getDimension(homeDimensionName))
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": " ${TemaL}Home System :§r Tu punto de generacion fue establecido en la home ${Tema}${args} §rubicada en X:${Tema}${homeTagX[0]}§r, Y:${Tema}${homeTagY[0]}§r, Z:${Tema}${homeTagZ[0]}${Tema}\n           §rNota : §7El punto de generación puede cambiar haciendo clic en la cama" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cNo existe la home llamda §l${args}§r§c, Usa el comando §l${PrefixH} ${CmdA2} <Name Home> §r§cpara agregarla" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA13}`:
        case `${CmdA14}`:
            if (allHomeName.includes(args)) {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": " ${TemaL}Home System :§r Datos de la home ${Tema}${args}§r:\n           Ubicacion: X:${Tema}${homeTagX[0]}§r, Y:${Tema}${homeTagY[0]}§r, Z:${Tema}${homeTagZ[0]}§r\n           Dimension: ${Tema}${homeDimensionName}" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cNo existe la home llamda §l${args}§r§c, Usa el comando §l${PrefixH} ${CmdA2} <Name Home> §r§cpara agregarla" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA15}`:
        case `${CmdA16}`:
            let home = getHomeTag.match(homeNamesReg)
            if (home == null) {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cNo tienes ninguna home agregada" } ] }`, world.getDimension(playerDimension))
            } else {
                reply.push(player)
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": " ${TemaL}Home System :§r ¿estás seguro, quieres eliminar toda tu home's?\n           Confirma escribiendo ${Tema}${PrefixH} si${Tema}\n           Cancela escribiendo ${Tema}${PrefixH} no" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `si`:
            if (reply.includes(player)) {
                let home = getHomeTag.match(homeNamesReg)
                if (home == null) {
                    let a = reply.indexOf(player)
                    reply.splice(a, 1)
                    runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cNo tienes ninguna home agregada" } ] }`, world.getDimension(playerDimension))
                } else {
                    for (let i = 0; i < home.length; i++) {
                        let regH = new RegExp(`§0H_${home[i]}D_(\\d+)X_(-\\d+|\\d+)Y_(-\\d+|\\d+)Z_(-\\d+|\\d+)RX_(-\\d+|\\d+)\\.(-\\d+|\\d+)RY_(-\\d+|\\d+)\\.(-\\d+|\\d+)§r`)
                        let honame = getHomeTag.match(regH)
                        srcPlayer.removeTag(`${honame[0]}`)
                    }
                    let a = reply.indexOf(player)
                    reply.splice(a, 1)
                    runCmd(`tellraw "${player}" { "rawtext": [ { "text": " ${TemaL}Home System :§r Se han eliminado todas tus ${Tema}home's" } ] }`, world.getDimension(playerDimension))
                }
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cNo puedes usar este comando ahora" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `no`:
            if (reply.includes(player)) {
                let a = reply.indexOf(player)
                reply.splice(a, 1)
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": " ${TemaL}Home System :§r Operacion cancelada" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cNo puedes usar este comando ahora" } ] }`, world.getDimension(playerDimension))
            }
            break
        default:
            runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cComando desconocido, Usa §l${PrefixH} help" } ] }`, world.getDimension(playerDimension))
            break
    }
}
function currentDimension(player) {
    let dimension = player.dimension.id.replace("minecraft:", "").replace("_", " ")
    return dimension
}
function dimToId(dimension) {
    if (dimension == "overworld") {
        return "0"
    }
    if (dimension == "nether") {
        return "1"
    }
    if (dimension == "the End") {
        return "2"
    }
}
function idToDim(dimension) {
    if (dimension == 0 || dimension == "0") {
        return "OverWorld"
    }
    if (dimension == 1 || dimension == "1") {
        return "Nether"
    }
    if (dimension == 2 || dimension == "2") {
        return "The End"
    }
}
function runCmd(cmd, dim) {
    return dim.runCommandAsync(cmd);
}

/// ⇏ 𝐄𝐱𝐩𝐨𝐫𝐭𝐚𝐜𝐢𝐨𝐧
export { HOMECMD }