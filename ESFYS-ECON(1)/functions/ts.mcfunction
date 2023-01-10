gamerule commandblockoutput false
gamerule sendcommandfeedback false
effect @a[tag=frz] regeneration 1 9 true
effect @a[tag=cegar] slowness 1 1 true
effect @a[tag=cegar] blindness 5 99 true
effect @a[tag=vns0] invisibility 1 255 true 
effect @a[tag=sobrev] regeneration 1 3 true
effect @a[tag=sobrev] strength 1 2 true
effect @e[tag=chest_y] invisibility 1 255 true
effect @e[tag=chest_y] absorption 1 255 true
scoreboard players add @a[scores={ts=20..}] s 1
scoreboard players remove @a[tag=putazo,scores={ts=20..}] fin_juego_s 1
scoreboard players remove @a[tag=sobrev,scores={ts=20..}] fin_juego_s 1
scoreboard players remove @a[tag=secu,scores={ts=20..}] fin_juego_s 1
scoreboard players set @a[scores={ts=20..}] ts 0
scoreboard players remove @a[tag=putazo,scores={fin_juego_s=0}] fin_juego 1
scoreboard players remove @a[tag=sobrev,scores={fin_juego_s=0}] fin_juego 1
scoreboard players remove @a[tag=secu,scores={fin_juego_s=0}] fin_juego 1
scoreboard players set @a[tag=putazo,scores={fin_juego_s=0}] fin_juego_s 59
scoreboard players set @a[tag=sobrev,scores={fin_juego_s=0}] fin_juego_s 59
scoreboard players set @a[tag=secu,scores={fin_juego_s=0}] fin_juego_s 59
scoreboard players add @a[scores={s=60..}] m 1
scoreboard players set @a[scores={s=60..}] s 0
scoreboard players add @a[scores={m=60..}] h 1
scoreboard players set @a[scores={m=60..}] m 0
scoreboard players add @a[scores={h=24..}] d 1
scoreboard players set @a[scores={h=24..}] h 0
execute if entity @a[tag=sobrev,scores={fin_juego_s=50}] positioned 3776 5 910 run function zombie
execute if entity @e[tag=chest_y,x=587,y=266,z=-239,r=3,hasitem={item=netherite_pickaxe,quantity=0}] run clear @p minecraft:netherite_pickaxe 0 1
execute if entity @e[tag=chest_y,x=587,y=266,z=-239,r=3,hasitem={item=netherite_pickaxe,quantity=0}] run function xtar_protect_chests
execute if entity @e[tag=chest_y,x=582,y=266,z=-239,r=3,hasitem={item=mob_spawner,quantity=0}] run clear @p minecraft:mob_spawner 0 1 
execute if entity @e[tag=chest_y,x=582,y=266,z=-239,r=3,hasitem={item=mob_spawner,quantity=0}] run function xtar_protect_chests
execute if entity @e[tag=chest_y,x=577,y=266,z=-239,r=3,hasitem={item=cobblestone,quantity=0}] run clear @p minecraft:cobblestone 0 1
execute if entity @e[tag=chest_y,x=577,y=266,z=-239,r=3,hasitem={item=cobblestone,quantity=0}] run function xtar_protect_chests
execute if entity @e[tag=chest_y,x=572,y=266,z=-239,r=3,hasitem={item=spyglass,quantity=0}] run clear @p minecraft:spyglass 0 1
execute if entity @e[tag=chest_y,x=572,y=266,z=-239,r=3,hasitem={item=spyglass,quantity=0}] run function xtar_protect_chests
execute if entity @e[tag=chest_y,x=567,y=266,z=-239,r=3,hasitem={item=diamond_sword,quantity=0}] run clear @p minecraft:diamond_sword 0 1
execute if entity @e[tag=chest_y,x=567,y=266,z=-239,r=3,hasitem={item=diamond_sword,quantity=0}] run function xtar_protect_chests
execute if entity @e[tag=chest_y,x=562,y=266,z=-239,r=3,hasitem={item=iron_pickaxe,quantity=0}] run clear @p minecraft:iron_pickaxe 0 1
execute if entity @e[tag=chest_y,x=562,y=266,z=-239,r=3,hasitem={item=iron_pickaxe,quantity=0}] run function xtar_protect_chests
execute if entity @e[tag=chest_y,x=557,y=266,z=-239,r=3,hasitem={item=stone_pickaxe,quantity=0}] run clear @p minecraft:stone_pickaxe 0 1
execute if entity @e[tag=chest_y,x=557,y=266,z=-239,r=3,hasitem={item=stone_pickaxe,quantity=0}] run function xtar_protect_chests
execute if entity @e[name=chest_i,x=587,y=266,z=-239,r=50] run function xtar_protect_chests