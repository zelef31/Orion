/// ⇏ 𝐗𝐭𝐚𝐫𝐢𝐧𝐠
const blocks = [{
    textures: 'textures/blocks/anvil_top_damaged_0.png',
    name: 'Enclume',
    cost: 375,
    data: 0,
    item: 'anvil'
},
{
    textures: 'textures/blocks/enchanting_table_side.png',
    name: 'Table Enchantement',
    cost: 12500,
    data: 0,
    item: 'enchanting_table'
},
{
    textures: 'textures/blocks/chest_front.png',
    name: 'Coffre',
    cost: 30,
    data: 0,
    item: 'chest'
}
]
const comidas = [{
    textures: 'textures/items/apple.png',
    name: 'Pomme',
    cost: 65,
    data: 0,
    item: 'apple'
}
]
const armaduras = [{
    textures: 'textures/items/leather_chestplate.png',
    name: 'Armure en Cuir',
    cost: 1534,
    data: 0,
    run: 'function arc/CDC'
},
{
    textures: 'textures/items/chainmail_chestplate.png',
    name: 'Armure en Mailles',
    cost: 1720,
    data: 0,
    run: 'function arc/CDM'
},
{
    textures: 'textures/items/iron_chestplate.png',
    name: 'Armure en Fer',
    cost: 3770,
    data: 0,
    run: 'function arc/CDH'
},
{
    textures: 'textures/items/gold_chestplate.png',
    name: 'Armure en Or',
    cost: 3617,
    data: 0,
    run: 'function arc/CDO'
},
{
    textures: 'textures/items/diamond_chestplate.png',
    name: 'Armure en diamant',
    cost: 4777,
    data: 0,
    run: 'function arc/CDD'
},
{
    textures: 'textures/items/netherite_chestplate.png',
    name: 'Armure en Netherite',
    cost: 5777,
    data: 0,
    run: 'function arc/CDN'
}
]
/// ⇏ 𝐄𝐱𝐩𝐨𝐫𝐭𝐚𝐜𝐢𝐨𝐧
export { blocks, comidas, armaduras }