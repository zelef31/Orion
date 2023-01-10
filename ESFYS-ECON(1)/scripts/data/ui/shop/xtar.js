/// ⇏ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐜𝐢𝐨𝐧 
import * as xtar from '@minecraft/server-ui'
import { Icon, TemaL, Tema, Name, Moneda, Moneda1, Click } from '../../../confi/xtar.js'
import { EconomyADV, EconomyARC, EconomyARCerrors, EconomyARCev, EconomyARCF, Economygen, Economylog, getScore } from '../../util/xtar.js'
import { blocks, comidas, armaduras } from './arc/xtar.js'
import { server } from '../xtar.js'

/// ⇏ 𝐗𝐭𝐚𝐫𝐢𝐧𝐠
function shop_gee(player) {
    const form = new xtar.ActionFormData()
        .title(`${Icon}${TemaL} Shop ${Icon}`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Sélectionnez le type de magasin que vous voulez ouvrir`)
        .button(`${TemaL}Achat`, 'textures/ui/book_metatag_default')
        .button(`${TemaL}Vente`, 'textures/ui/book_addpicture_default')
        .button(`§4§lRetour à la page précédente${Click}`, 'font/icons/cancel')
        form.show(player).then(result => {
            if (result.selection === 0) {
                shop_geer(player)
            }
            if (result.selection === 1) {
                shop_geerr(player)
            }
            if (result.selection === 2) {
                Economylog(`playsound note.pling @p`, player)
                return server(player)
            }
        })
}

function shop_geerr(player) {
    const form = new xtar.ActionFormData()
        .title(`${Icon}${TemaL} Vente${Icon}`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, vous êtes dans la catégorie Vente.\n\n${TemaL}> §rChoisissez la catégorie que vous souhaitez ouvrir${Tema}:§r`)
        .button(`${TemaL}Blocks${Click}`, 'textures/blocks/grass_side_carried')
        .button(`§4§lRetour à la page précédente${Click}`, 'font/icons/cancel')
    form.show(player).then(result => {
        if (result.selection === 0) {
            const form0 = new xtar.ActionFormData()
                .title(`${Icon}${TemaL} Blocks ${Icon}`)
                .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Choisissez un objet`)
            for (const item of blocks)
                form0.button(`${TemaL}${item.name}\n§r§7§o${item.cost}$`, `${item.textures}`)
            form0.show(player).then(result => {
                const producto = blocks[result.selection]
                const form1 = new xtar.ModalFormData()
                    .title(`${Icon}${TemaL} Blocks ${Icon}`)
                    .slider(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, vous avez selectionné le block ${producto.name}, son prix de revente est de ${producto.cost}\n\n${TemaL}> §rItem ${Tema}:§r ${producto.name}\n${TemaL}> §rPrix de revente ${Tema}:§r ${producto.cost}\n\n${TemaL}> §rChoisissez la quantité à vendre${Tema}`, 1, 64, 1)
                    .dropdown(`\n${TemaL} >§r Moyen de paiement ? ${Tema}:`, [" Espèces", " Carte"], 0)
                    .toggle(`\n${TemaL} >§r Confirmer le procéssus${Tema}:`, false)
                form1.show(player).then(resulted => {
                    const costeo = producto.cost * resulted.formValues[0]
                    const cantidad = resulted.formValues[0]
                    if (resulted.formValues[2] === false) {
                        EconomyADV(player, shop_geerr, server)
                    }
                    if (resulted.formValues[2] === true) {
                        if (resulted.formValues[1] === 0) {
                            EconomyARCev(player, costeo, producto.item, cantidad, producto.data, Moneda, producto.name)
                            EconomyARCerrors(player, producto.item, producto.data, cantidad, producto.name)
                        }
                        if (resulted.formValues[1] === 1) {
                            EconomyARCev(player, costeo, producto.item, cantidad, producto.data, Moneda1, producto.name)
                            EconomyARCerrors(player, producto.item, producto.data, cantidad, producto.name)
                        }
                    }
                })
            })
        }
        if (result.selection === 1) {
            Economylog(`playsound note.pling @p`, player)
            return server(player)
        }
    })
}



function shop_geer(player) {
    const form = new xtar.ActionFormData()
        .title(`${Icon}${TemaL} Acheter${Icon}`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, vous êtes dans la catégorie Acheter\n\n${TemaL}> §rChoisissez la catégorie que vous souhaitez ouvrir${Tema}:§r`)
        .button(`${TemaL}Blocks${Click}`, 'textures/blocks/grass_side_carried')
        .button(`${TemaL}Nourriture${Click}`, 'textures/items/bread')
        .button(`${TemaL}Armures${Click}`, 'textures/items/diamond_chestplate.png')
        .button(`${TemaL}MiningShop${Click}`, 'font/icons/minin')
        .button(`§4§lRetour à la page précédente${Click}`, 'font/icons/cancel')
    form.show(player).then(result => {
        if (result.selection === 0) {
            const form0 = new xtar.ActionFormData()
                .title(`${Icon}${TemaL} Blocks ${Icon}`)
                .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Choisissez un objet`)
            for (const item of blocks)
                form0.button(`${TemaL}${item.name}\n§r§7§o${item.cost}$`, `${item.textures}`)
            form0.show(player).then(result => {
                const producto = blocks[result.selection]
                const dtest = getScore(player, `${Moneda}`)
                const dtest1 = getScore(player, `${Moneda1}`)
                const form1 = new xtar.ModalFormData()
                    .title(`${Icon}${TemaL} Blocks ${Icon}`)
                    .slider(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, vous avez sélectionné le block ${producto.name}, son coût unitaire est de ${producto.cost}\n\n${TemaL}> §rItem ${Tema}:§r ${producto.name}\n${TemaL}> §rCoût par unité ${Tema}:§r ${producto.cost}\n${TemaL}> §rEspèces ${Tema}:§r ${dtest}\n${TemaL}> §rCarte ${Tema}:§r ${dtest1}\n\n${TemaL}> §rInserez la quantité à acheter${Tema}`, 1, 64, 1)
                    .dropdown(`\n${TemaL} >§r Avec quelle méthode souhaitez-vous payer ?${Tema}:`, [" Espèces", " Carte"], 0)
                    .toggle(`\n${TemaL} >§r Confirmer le procéssus${Tema}:`, false)
                form1.show(player).then(resulted => {
                    const costeo = producto.cost * resulted.formValues[0]
                    const cantidad = resulted.formValues[0]
                    if (resulted.formValues[2] === false) {
                        EconomyADV(player, shop_geer, server)
                    }
                    if (resulted.formValues[2] === true) {
                        if (resulted.formValues[1] === 0) {
                            EconomyARC(player, costeo, producto.item, cantidad, producto.data, Moneda, dtest)
                        }
                        if (resulted.formValues[1] === 1) {
                            EconomyARC(player, costeo, producto.item, cantidad, producto.data, Moneda1, dtest1)
                        }
                    }
                })
            })
        }
        if (result.selection === 1) {
            const form0 = new xtar.ActionFormData()
                .title(`${Icon}${TemaL} Nourriture ${Icon}`)
                .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Choisissez un objet`)
            for (const item of comidas)
                form0.button(`${TemaL}${item.name}\n§r§7§o${item.cost}$`, `${item.textures}`)
            form0.show(player).then(result => {
                const producto = comidas[result.selection]
                const dtest = getScore(player, `${Moneda}`)
                const dtest1 = getScore(player, `${Moneda1}`)
                const form1 = new xtar.ModalFormData()
                    .title(`${Icon}${TemaL} Nourriture ${Icon}`)
                    .slider(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, vous avez sélectionné  ${producto.name}, son coût unitaire est de ${producto.cost}\n\n${TemaL}> §rItem ${Tema}:§r ${producto.name}\n${TemaL}> §rCoût par unité ${Tema}:§r ${producto.cost}\n${TemaL}> §rEspèces ${Tema}:§r ${dtest}\n${TemaL}> §rCarte ${Tema}:§r ${dtest1}\n\n${TemaL}> §rInserez la quantité à acheter${Tema}`, 1, 64, 1)
                    .dropdown(`\n${TemaL} >§r Avec quelle méthode souhaitez-vous payer ?${Tema}:`, [" Espèces", " Carte"], 0)
                    .toggle(`\n${TemaL} >§r Confirmer le procéssus${Tema}:`, false)
                form1.show(player).then(resulted => {
                    const costeo = producto.cost * resulted.formValues[0]
                    const cantidad = resulted.formValues[0]
                    if (resulted.formValues[2] === false) {
                        EconomyADV(player, shop_geer, server)
                    }
                    if (resulted.formValues[2] === true) {
                        if (resulted.formValues[1] === 0) {
                            EconomyARC(player, costeo, producto.item, cantidad, producto.data, Moneda, dtest)
                        }
                        if (resulted.formValues[1] === 1) {
                            EconomyARC(player, costeo, producto.item, cantidad, producto.data, Moneda1, dtest1)
                        }
                    }
                })
            })
        }
        if (result.selection === 2) {
            const form0 = new xtar.ActionFormData()
                .title(`${Icon}${TemaL} Armures ${Icon}`)
                .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, Choisissez une armure à acheter`)
            for (const run of armaduras)
                form0.button(`${TemaL}${run.name}\n§r§7§o${run.cost}$`, `${run.textures}`)
            form0.show(player).then(result => {
                const producto = armaduras[result.selection]
                const dtest = getScore(player, `${Moneda}`)
                const dtest1 = getScore(player, `${Moneda1}`)
                const form1 = new xtar.ModalFormData()
                    .title(`${Icon}${TemaL} Armures ${Icon}`)
                    .dropdown(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, vous avez sélectionné  ${producto.name}, son coût est de ${producto.cost}\n\n${TemaL}> §rItem ${Tema}:§r ${producto.name}\n${TemaL}> §rCoût ${Tema}:§r ${producto.cost}\n${TemaL}> §rEspèces ${Tema}:§r ${dtest}\n${TemaL}> §rCarte ${Tema}:§r ${dtest1}\n\n${TemaL}> §rAvec quelle méthode souhaitez-vous payer ?${Tema}`, [" Espèces", " Carte"], 0)
                    .toggle(`\n${TemaL} >§r Confirmer le procéssus${Tema}:`, false)
                form1.show(player).then(resulted => {
                    const costeo = producto.cost
                    if (resulted.formValues[1] === false) {
                        EconomyADV(player, shop_geer, server)
                    }
                    if (resulted.formValues[1] === true) {
                        if (resulted.formValues[0] === 0) {
                            EconomyARCF(player, costeo, producto.run, Moneda, dtest)
                        }
                        if (resulted.formValues[0] === 1) {
                            EconomyARCF(player, costeo, producto.run, Moneda1, dtest1)
                        }
                    }
                })
            })
        }
        if (result.selection === 3) {
            miningshop(player)
        }
        if (result.selection === 4) {
            Economylog(`playsound note.pling @p`, player)
            return server(player)
        }
    })
}
function chest_1_1(player) {
    const form = new xtar.MessageFormData()
        .title(`${Icon} Crates ${TemaL}:`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, êtes vous sûr de vouloit acheter la crate du bibliothécaire???\n\n${TemaL}> §rCoût ${Tema}: §r590$\n${TemaL}> §rVotre argent ${Tema}: §r${getScore(player, `${Moneda}`)}$`)
        .button1(`§a§lAcheter`)
        .button2(`§c§lNe pas acheter`)
    form.show(player).then(result => {
        if (result.selection == 1) {
            if (getScore(player, `${Moneda}`) >= 590) {
                player.tell(`${Icon}${TemaL} ${Name} : §rSortie`)
                Economylog(`structure load chest_1_${Economygen(5, 1)} 587 267 -240`, player)
                Economylog(`scoreboard players remove @p ${Moneda} 590`, player)
                Economylog(`particle shop 587 267 -240`, player)
                Economylog(`playsound random.levelup @p`, player)
            } else {
                player.tell(`${Icon}${TemaL} ${Name} : §rVous ne possedez pas suffisament de money pour acheter ceci :/`)
                Economylog(`playsound random.break @p`, player)
            }
        }
        if (result.selection != 1) {
            player.tell(`${Icon}${TemaL} ${Name} : §rAnnuler`)
            Economylog(`playsound random.break @p`, player)
        }
    })
}
function chest_2_2(player) {
    const form = new xtar.MessageFormData()
        .title(`${Icon} Crates ${TemaL}:`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, êtes vous sûr de vouloit acheter la crate bestial???\n\n${TemaL}> §rCoût ${Tema}: §r780$\n${TemaL}> §rVotre argent ${Tema}: §r${getScore(player, `${Moneda}`)}$`)
        .button1(`§a§lAcheter`)
        .button2(`§c§lNe pas acheter`)
    form.show(player).then(result => {
        if (result.selection == 1) {
            if (getScore(player, `${Moneda}`) >= 780) {
                player.tell(`${Icon}${TemaL} ${Name} : §rSortie`)
                Economylog(`structure load chest_2_${Economygen(5, 1)} 582 267 -240`, player)
                Economylog(`scoreboard players remove @p ${Moneda} 780`, player)
                Economylog(`particle shop 582 267 -240`, player)
                Economylog(`playsound random.levelup @p`, player)
            } else {
                player.tell(`${Icon}${TemaL} ${Name} : §rVous ne possedez pas suffisament de money pour acheter ceci :/`)
                Economylog(`playsound random.break @p`, player)
            }
        }
        if (result.selection != 1) {
            player.tell(`${Icon}${TemaL} ${Name} : §rAnnuler`)
            Economylog(`playsound random.break @p`, player)
        }
    })
}
function chest_3_3(player) {
    const form = new xtar.MessageFormData()
        .title(`${Icon} Crates ${TemaL}:`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, êtes vous sûr de vouloit acheter la crate constructor???\n\n${TemaL}> §rCoût ${Tema}: §r680$\n${TemaL}> §rVotre argent ${Tema}: §r${getScore(player, `${Moneda}`)}$`)
        .button1(`§a§lAcheter`)
        .button2(`§c§lNe pas acheter`)
    form.show(player).then(result => {
        if (result.selection == 1) {
            if (getScore(player, `${Moneda}`) >= 680) {
                player.tell(`${Icon}${TemaL} ${Name} : §rSortie`)
                Economylog(`structure load chest_3_${Economygen(5, 1)} 577 267 -240`, player)
                Economylog(`scoreboard players remove @p ${Moneda} 680`, player)
                Economylog(`particle shop 577 267 -240`, player)
                Economylog(`playsound random.levelup @p`, player)
            } else {
                player.tell(`${Icon}${TemaL} ${Name} : §rVous ne possedez pas suffisament de money pour acheter ceci :/`)
                Economylog(`playsound random.break @p`, player)
            }
        }
        if (result.selection != 1) {
            player.tell(`${Icon}${TemaL} ${Name} : §rAnnuler`)
            Economylog(`playsound random.break @p`, player)
        }
    })
}
function chest_4_4(player) {
    const form = new xtar.MessageFormData()
        .title(`${Icon} Crates ${TemaL}:`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, êtes vous sûr de vouloit acheter la crate aventurero???\n\n${TemaL}> §rCoût ${Tema}: §r1105$\n${TemaL}> §rVotre argent ${Tema}: §r${getScore(player, `${Moneda}`)}$`)
        .button1(`§a§lAcheter`)
        .button2(`§c§lNe pas acheter`)
    form.show(player).then(result => {
        if (result.selection == 1) {
            if (getScore(player, `${Moneda}`) >= 1105) {
                player.tell(`${Icon}${TemaL} ${Name} : §rSortie`)
                Economylog(`structure load chest_4_${Economygen(5, 1)} 572 267 -240`, player)
                Economylog(`scoreboard players remove @p ${Moneda} 1105`, player)
                Economylog(`particle shop 572 267 -240`, player)
                Economylog(`playsound random.levelup @p`, player)
            } else {
                player.tell(`${Icon}${TemaL} ${Name} : §rVous ne possedez pas suffisament de money pour acheter ceci :/`)
                Economylog(`playsound random.break @p`, player)
            }
        }
        if (result.selection != 1) {
            player.tell(`${Icon}${TemaL} ${Name} : §rAnnuler`)
            Economylog(`playsound random.break @p`, player)
        }
    })
}
function chest_5_5(player) {
    const form = new xtar.MessageFormData()
        .title(`${Icon} Crates ${TemaL}:`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, êtes vous sûr de vouloit acheter la crate guerrero???\n\n${TemaL}> §rCoût ${Tema}: §r1825$\n${TemaL}> §rVotre argent ${Tema}: §r${getScore(player, `${Moneda}`)}$`)
        .button1(`§a§lAcheter`)
        .button2(`§c§lNe pas acheter`)
    form.show(player).then(result => {
        if (result.selection == 1) {
            if (getScore(player, `${Moneda}`) >= 1825) {
                player.tell(`${Icon}${TemaL} ${Name} : §rSortie`)
                Economylog(`structure load chest_5_${Economygen(5, 1)} 567 267 -240`, player)
                Economylog(`scoreboard players remove @p ${Moneda} 1825`, player)
                Economylog(`particle shop 567 267 -240`, player)
                Economylog(`playsound random.levelup @p`, player)
            } else {
                player.tell(`${Icon}${TemaL} ${Name} : §rVous ne possedez pas suffisament de money pour acheter ceci :/`)
                Economylog(`playsound random.break @p`, player)
            }
        }
        if (result.selection != 1) {
            player.tell(`${Icon}${TemaL} ${Name} : §rAnnuler`)
            Economylog(`playsound random.break @p`, player)
        }
    })
}
function chest_6_6(player) {
    const form = new xtar.MessageFormData()
        .title(`${Icon} Crates ${TemaL}:`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, êtes vous sûr de vouloit acheter la crate minero???\n\n${TemaL}> §rCoût ${Tema}: §r1205$\n${TemaL}> §rVotre argent ${Tema}: §r${getScore(player, `${Moneda}`)}$`)
        .button1(`§a§lAcheter`)
        .button2(`§c§lNe pas acheter`)
    form.show(player).then(result => {
        if (result.selection == 1) {
            if (getScore(player, `${Moneda}`) >= 1205) {
                player.tell(`${Icon}${TemaL} ${Name} : §rSortie`)
                Economylog(`structure load chest_6_${Economygen(5, 1)} 562 267 -240`, player)
                Economylog(`scoreboard players remove @p ${Moneda} 1205`, player)
                Economylog(`particle shop 562 267 -240`, player)
                Economylog(`playsound random.levelup @p`, player)
            } else {
                player.tell(`${Icon}${TemaL} ${Name} : §rVous ne possedez pas suffisament de money pour acheter ceci :/`)
                Economylog(`playsound random.break @p`, player)
            }
        }
        if (result.selection != 1) {
            player.tell(`${Icon}${TemaL} ${Name} : §rAnnuler`)
            Economylog(`playsound random.break @p`, player)
        }
    })
}
function chest_7_7(player) {
    const form = new xtar.MessageFormData()
        .title(`${Icon} Crates ${TemaL}:`)
        .body(`${Icon}${TemaL} >> §rBonjour ${Tema}${player.name}§r, êtes vous sûr de vouloit acheter la crate minero+???\n\n${TemaL}> §rCoût ${Tema}: §r1998$\n${TemaL}> §rVotre argent ${Tema}: §r${getScore(player, `${Moneda}`)}$`)
        .button1(`§a§lAcheter`)
        .button2(`§c§lNe pas acheter`)
    form.show(player).then(result => {
        if (result.selection == 1) {
            if (getScore(player, `${Moneda}`) >= 1998) {
                player.tell(`${Icon}${TemaL} ${Name} : §rSortie`)
                Economylog(`structure load chest_7_${Economygen(5, 1)} 557 267 -240`, player)
                Economylog(`scoreboard players remove @p ${Moneda} 1998`, player)
                Economylog(`particle shop 557 267 -240`, player)
                Economylog(`playsound random.levelup @p`, player)
            } else {
                player.tell(`${Icon}${TemaL} ${Name} : §rVous ne possedez pas suffisament de money pour acheter ceci :/`)
                Economylog(`playsound random.break @p`, player)
            }
        }
        if (result.selection != 1) {
            player.tell(`${Icon}${TemaL} ${Name} : §rAnnuler`)
            Economylog(`playsound random.break @p`, player)
        }
    })
}
function shop_ge(player) {
    const form = new xtar.ActionFormData()
        .title(`${TemaL}${Icon} Magasins ${Icon}`)
        .body(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici tous les Magasins${TemaL}:§r\n\n${TemaL}> §rMoney ${Tema}: §r${getScore(player, `${Moneda}`)}\n${TemaL}> §rEn banque(Carte) ${Tema}: §r${getScore(player, `${Moneda1}`)}\n§r`)
        .button(`${TemaL}MiningShop${Click}`, 'font/icons/minin')
        .button(`${TemaL}San Fernando${Click}`, 'font/icons/san_fernando')
        .button(`${TemaL}Blocks${Click}`)
        .button(`§4§lRetour à la page précédente${Click}`, 'font/icons/cancel')
    form.show(player).then(result => {
        if (result.selection === 0) {
            miningshop(player)
        }
        if (result.selection === 1) {
            sanf(player)
        }
        if (result.selection === 3) {
            Economylog(`playsound note.pling @p`, player)
            return server(player)
        }
    }
    )
}
function sanf(player) {
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} San Fernando ${Icon}`)
        .dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici tous les productos${TemaL}:§r\n\n${TemaL}> §rEligue el productos${Tema}:§r`, [" Salchicha", " Jamonada", " Mortadella", " Chorizo"], 0)
        .slider(`§r\n${TemaL}> §rVeuillez choisir la quantité${Tema}`, 1, 20, 1)
        .toggle(`§r\n${TemaL}> §rVeuillez confirmer le procéssus${Tema}:`, false)
    form.show(player).then(result => {
        const producto = result.formValues[0]
        const cantidad = result.formValues[1]
        if (result.formValues[2] === false) {
            EconomyADV(player, sanf, server)
        }
        if (result.formValues[2] === true) {
            const from0 = new xtar.ModalFormData()
                .title(`${Icon}${TemaL} Panier enregistré ${Icon}`)
            if (producto === 0) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rProducto ${Tema}: §rSalchicha\n${TemaL}> §rCantidad ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r28§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (producto === 1) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rProducto ${Tema}: §rJamonada\n${TemaL}> §rCantidad ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r24§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (producto === 2) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rProducto ${Tema}: §rMortadella\n${TemaL}> §rCantidad ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r51§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (producto === 3) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rProducto ${Tema}: §rChorizo\n${TemaL}> §rCantidad ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r72§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            from0.show(player).then(result => {
                const Espèces = getScore(player, `${Moneda}`)
                const Carte = getScore(player, `${Moneda1}`)
                if (result.formValues[0] === 0) {
                    if (producto === 0 && Espèces >= 28 * cantidad) { }
                }
            })
        }
    })
}
function miningshop(player) {
    const form = new xtar.ActionFormData()
        .title(`${Icon}${TemaL} MiningShop ${Icon}`)
        .body(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, voici toutes les ventes relatives aux minerais${TemaL}:§r\n§r`)
        .button(`${TemaL}Outils${Click}`, 'font/icons/anvil')
        .button(`${TemaL}Eclairage${Click}`, 'font/icons/ilumi')
        .button(`${TemaL}Explosifs${Click}`, 'font/icons/tnt')
        .button(`§4§lRetour à la page précédente${Click}`, 'font/icons/cancel')
    form.show(player).then(result => {
        if (result.selection === 0) {
            her(player)
        }
        if (result.selection === 1) {
            deto(player)
        }
        if (result.selection === 2) {
            Economylog(`playsound note.pling @p`, player)
            return server(player)
        }
    })
}
function deto(player) {
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Explosifs ${Icon}`)
        .dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici tous les explosifs${TemaL}:§r\n\n${TemaL}> §rEligue el explosifs${Tema}:§r`, [" Dynamite", " Briquet"], 0)
        .slider(`§r\n${TemaL}> §rVeuillez choisir la quantité${Tema}`, 1, 20, 1)
        .toggle(`§r\n${TemaL}> §rVeuillez confirmer le procéssus${Tema}:`, false)
    form.show(player).then(result => {
        const item = result.formValues[0]
        const cantidad = result.formValues[1]
        if (result.formValues[2] === false) {
            EconomyADV(player, deto, server)
        }
        if (result.formValues[2] === true) {
            const from0 = new xtar.ModalFormData()
                .title(`${Icon}${TemaL} Panier enregistré ${Icon}`)
            if (item === 0) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rDynamite\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r38§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 1) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rBriquet\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r14§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            from0.show(player).then(result => {
                const Espèces = getScore(player, `${Moneda}`)
                const Carte = getScore(player, `${Moneda1}`)
                if (result.formValues[0] === 0) {
                    if (item === 0 && Espèces >= 38 * cantidad) {
                        player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`)
                        Economylog(`give @p tnt ${cantidad}`, player)
                        Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${38 * cantidad}`, player)
                        Economylog(`playsound random.levelup @p`, player)
                    }
                    if (item === 1 && Espèces >= 14 * cantidad) {
                        player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`)
                        Economylog(`give @p flint_and_steel ${cantidad}`, player)
                        Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${14 * cantidad}`, player)
                        Economylog(`playsound random.levelup @p`, player)
                    }
                } else {
                    if (item === 0 && Carte >= 38 * cantidad) {
                        player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`)
                        Economylog(`give @p tnt ${cantidad}`, player)
                        Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${38 * cantidad}`, player)
                        Economylog(`playsound random.levelup @p`, player)
                    }
                    if (item === 1 && Carte >= 14 * cantidad) {
                        player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`)
                        Economylog(`give @p flint_and_steel ${cantidad}`, player)
                        Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${14 * cantidad}`, player)
                        Economylog(`playsound random.levelup @p`, player)
                    }
                }
            })
        }
    })
}
function ilu(player) {
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Iluminación ${Icon}`)
        .dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, voici tous les outils  de iluminación${TemaL}:§r\n\n${TemaL}> §rChoisissez un outil de iluminación${Tema}:§r`, [" Antorcha", " Linterna", " Vela", " Posión"], 0)
        .slider(`§r\n${TemaL}> §rVeuillez choisir la quantité${Tema}`, 1, 50, 1)
        .toggle(`§r\n${TemaL}> §rVeuillez confirmer le procéssus${Tema}:`, false)
    form.show(player).then(result => {
        const item = result.formValues[0]
        const cantidad = result.formValues[1]
        if (result.formValues[2] === false) {
            EconomyADV(player, ilu, server)
        }
        if (result.formValues[2] === true) {
            const from0 = new xtar.ModalFormData()
                .title(`${Icon}${TemaL} Panier enregistré ${Icon}`)
            if (item === 0) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rAntorcha\n${TemaL}> §rCantidad ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r10§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 1) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rLinterna\n${TemaL}> §rCantidad ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r18§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 2) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rVela\n${TemaL}> §rCantidad ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r7§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 3) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rPosión\n${TemaL}> §rCantidad ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r45§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            from0.show(player).then(result => {
                const Espèces = getScore(player, `${Moneda}`)
                const Carte = getScore(player, `${Moneda1}`)
                if (result.formValues[0] === 0) {
                    if (item === 0 && Espèces >= 10 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`give @p torch ${cantidad}`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${10 * cantidad}`, player); Economylog(`playsound random.levelup @p`, player) }
                    if (item === 1 && Espèces >= 18 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`give @p lantern ${cantidad}`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${18 * cantidad}`, player); Economylog(`playsound random.levelup @p`, player) }
                    if (item === 2 && Espèces >= 7 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`give @p candle ${cantidad}`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${7 * cantidad}`, player); Economylog(`playsound random.levelup @p`, player) }
                    if (item === 3 && Espèces >= 45 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`give @p splash_potion ${cantidad} 6`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${45 * cantidad}`, player); Economylog(`playsound random.levelup @p`, player) }
                } else {
                    if (item === 0 && Carte >= 10 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`give @p torch ${cantidad}`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${10 * cantidad}`, player); Economylog(`playsound random.levelup @p`, player) }
                    if (item === 1 && Carte >= 18 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`give @p lantern ${cantidad}`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${18 * cantidad}`, player); Economylog(`playsound random.levelup @p`, player) }
                    if (item === 2 && Carte >= 7 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`give @p candle ${cantidad}`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${7 * cantidad}`, player); Economylog(`playsound random.levelup @p`, player) }
                    if (item === 3 && Carte >= 45 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`give @p splash_potion ${cantidad} 6`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${45 * cantidad}`, player); Economylog(`playsound random.levelup @p`, player) }
                }
            })
        }
    })
}
function her(player) {
    const form = new xtar.ModalFormData()
        .title(`${Icon}${TemaL} Outils ${Icon}`)
        .dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, voici tous les outils ${TemaL}:§r\n\n${TemaL}> §rChoisissez un outil${Tema}:§r`, [" Epée", " Pioche", " Pelle"], 0)
        .dropdown(`§r\n${TemaL}> §rChoisissez le minerai pour un outil${Tema}:§r`, [" Pierre", " Fer", " Or", " Diamant", " Netherite"], 0)
        .slider(`§r\n${TemaL}> §rVeuillez choisir la quantité${Tema}`, 1, 5, 1)
        .toggle(`§r\n${TemaL}> §rVeuillez confirmer votre panier${Tema}:`, false)
    form.show(player).then(result => {
        const item = result.formValues[0]
        const ore = result.formValues[1]
        const cantidad = result.formValues[2]
        if (result.formValues[3] === false) {
            EconomyADV(player, her, server)
        }
        if (result.formValues[3] === true) {
            const from0 = new xtar.ModalFormData()
                .title(`${Icon}${TemaL} Panier enregistré ${Icon}`)
            if (item === 0 && ore === 0) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rEpée\n${TemaL}> §rMatériau ${Tema}: §rPierre\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r101§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 0 && ore === 1) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rEpée\n${TemaL}> §rMatériau ${Tema}: §rFer\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r251§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 0 && ore === 2) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rEpée\n${TemaL}> §rMatériau ${Tema}: §rOr\n${TemaL}> §rCantidad ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r201§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 0 && ore === 3) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rEpée\n${TemaL}> §rMatériau ${Tema}: §rDiamant\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r541§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 0 && ore === 4) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rEpée\n${TemaL}> §rMatériau ${Tema}: §rNetherite\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r871§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 1 && ore === 0) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rPioche\n${TemaL}> §rMatériau ${Tema}: §rPierre\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r128§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 1 && ore === 1) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rPioche\n${TemaL}> §rMatériau ${Tema}: §rFer\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r297§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 1 && ore === 2) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rPioche\n${TemaL}> §rMatériau ${Tema}: §rOr\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r210§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 1 && ore === 3) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rPioche\n${TemaL}> §rMatériau ${Tema}: §rDiamant\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r561§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 1 && ore === 4) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rPioche\n${TemaL}> §rMatériau ${Tema}: §rNetherite\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r831§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 2 && ore === 0) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rPelle\n${TemaL}> §rMatériau ${Tema}: §rPierre\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r90§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 2 && ore === 1) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rPelle\n${TemaL}> §rMatériau ${Tema}: §rFer\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r110§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 2 && ore === 2) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rPelle\n${TemaL}> §rMatériau ${Tema}: §rOr\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r100§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 2 && ore === 3) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rPelle\n${TemaL}> §rMatériau ${Tema}: §rDiamant\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r261§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            if (item === 2 && ore === 4) { from0.dropdown(`${TemaL}${Icon} >> §rBonjour ${Tema}${player.name}§r, Voici le résumé de votre commande${Tema}:§r\n\n${TemaL}> §rItem ${Tema}: §rPelle\n${TemaL}> §rMatériau ${Tema}: §rNetherite\n${TemaL}> §rQuantité ${Tema}: §r${cantidad}\n${TemaL}> §rCoût par unité ${Tema}: §r431§r\n\n${TemaL}> §rMéthode de paiement${Tema}:`, [" Espèces", " Carte"], 0) }
            from0.show(player).then(result => {
                const Espèces = getScore(player, `${Moneda}`)
                const Carte = getScore(player, `${Moneda1}`)
                if (result.formValues[0] === 0) {
                    if (item === 0 && ore === 0 && Espèces >= 101 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${101 * cantidad}`, player); Economylog(`function her/her_I0_O0_C${cantidad}`, player) }
                    if (item === 0 && ore === 1 && Espèces >= 251 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${251 * cantidad}`, player); Economylog(`function her/her_I0_O1_C${cantidad}`, player) }
                    if (item === 0 && ore === 2 && Espèces >= 201 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${201 * cantidad}`, player); Economylog(`function her/her_I0_O2_C${cantidad}`, player) }
                    if (item === 0 && ore === 3 && Espèces >= 541 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${541 * cantidad}`, player); Economylog(`function her/her_I0_O3_C${cantidad}`, player) }
                    if (item === 0 && ore === 4 && Espèces >= 871 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${871 * cantidad}`, player); Economylog(`function her/her_I0_O4_C${cantidad}`, player) }
                    if (item === 1 && ore === 0 && Espèces >= 128 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${128 * cantidad}`, player); Economylog(`function her/her_I1_O0_C${cantidad}`, player) }
                    if (item === 1 && ore === 1 && Espèces >= 297 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${297 * cantidad}`, player); Economylog(`function her/her_I1_O1_C${cantidad}`, player) }
                    if (item === 1 && ore === 2 && Espèces >= 210 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${210 * cantidad}`, player); Economylog(`function her/her_I1_O2_C${cantidad}`, player) }
                    if (item === 1 && ore === 3 && Espèces >= 561 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${561 * cantidad}`, player); Economylog(`function her/her_I1_O3_C${cantidad}`, player) }
                    if (item === 1 && ore === 4 && Espèces >= 831 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${831 * cantidad}`, player); Economylog(`function her/her_I1_O4_C${cantidad}`, player) }
                    if (item === 2 && ore === 0 && Espèces >= 90 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${90 * cantidad}`, player); Economylog(`function her/her_I2_O0_C${cantidad}`, player) }
                    if (item === 2 && ore === 1 && Espèces >= 110 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${110 * cantidad}`, player); Economylog(`function her/her_I2_O1_C${cantidad}`, player) }
                    if (item === 2 && ore === 2 && Espèces >= 100 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${100 * cantidad}`, player); Economylog(`function her/her_I2_O2_C${cantidad}`, player) }
                    if (item === 2 && ore === 3 && Espèces >= 261 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${261 * cantidad}`, player); Economylog(`function her/her_I2_O3_C${cantidad}`, player) }
                    if (item === 2 && ore === 4 && Espèces >= 431 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda} ${431 * cantidad}`, player); Economylog(`function her/her_I2_O4_C${cantidad}`, player) }
                }
                if (result.formValues[0] === 1) {
                    if (item === 0 && ore === 0 && Carte >= 101 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${101 * cantidad}`, player); Economylog(`function her/her_I0_O0_C${cantidad}`, player) }
                    if (item === 0 && ore === 1 && Carte >= 251 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${251 * cantidad}`, player); Economylog(`function her/her_I0_O1_C${cantidad}`, player) }
                    if (item === 0 && ore === 2 && Carte >= 201 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${201 * cantidad}`, player); Economylog(`function her/her_I0_O2_C${cantidad}`, player) }
                    if (item === 0 && ore === 3 && Carte >= 541 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${541 * cantidad}`, player); Economylog(`function her/her_I0_O3_C${cantidad}`, player) }
                    if (item === 0 && ore === 4 && Carte >= 871 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${871 * cantidad}`, player); Economylog(`function her/her_I0_O4_C${cantidad}`, player) }
                    if (item === 1 && ore === 0 && Carte >= 128 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${128 * cantidad}`, player); Economylog(`function her/her_I1_O0_C${cantidad}`, player) }
                    if (item === 1 && ore === 1 && Carte >= 297 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${297 * cantidad}`, player); Economylog(`function her/her_I1_O1_C${cantidad}`, player) }
                    if (item === 1 && ore === 2 && Carte >= 210 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${210 * cantidad}`, player); Economylog(`function her/her_I1_O2_C${cantidad}`, player) }
                    if (item === 1 && ore === 3 && Carte >= 561 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${561 * cantidad}`, player); Economylog(`function her/her_I1_O3_C${cantidad}`, player) }
                    if (item === 1 && ore === 4 && Carte >= 831 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${831 * cantidad}`, player); Economylog(`function her/her_I1_O4_C${cantidad}`, player) }
                    if (item === 2 && ore === 0 && Carte >= 90 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${90 * cantidad}`, player); Economylog(`function her/her_I2_O0_C${cantidad}`, player) }
                    if (item === 2 && ore === 1 && Carte >= 110 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${110 * cantidad}`, player); Economylog(`function her/her_I2_O1_C${cantidad}`, player) }
                    if (item === 2 && ore === 2 && Carte >= 100 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${100 * cantidad}`, player); Economylog(`function her/her_I2_O2_C${cantidad}`, player) }
                    if (item === 2 && ore === 3 && Carte >= 261 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${261 * cantidad}`, player); Economylog(`function her/her_I2_O3_C${cantidad}`, player) }
                    if (item === 2 && ore === 4 && Carte >= 431 * cantidad) { player.tell(`${Icon}${TemaL} ${Name} : §rCompra Sortie`); Economylog(`playsound random.levelup @p`, player); Economylog(`scoreboard players remove "${player.name}" ${Moneda1} ${431 * cantidad}`, player); Economylog(`function her/her_I2_O4_C${cantidad}`, player) }
                }
            })
        }
    })
}
/// ⇏ 𝐄𝐱𝐩𝐨𝐫𝐭𝐚𝐜𝐢𝐨𝐧
export { chest_1_1, chest_2_2, chest_3_3, chest_4_4, chest_5_5, chest_6_6, chest_7_7, shop_ge, shop_gee } 