/// ⇏ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐜𝐢𝐨𝐧 
import { PrefixH } from '../../../confi/xtar.js' 
import { Tema } from '../../../confi/xtar.js'

/// ⇏ 𝐃𝐚𝐭𝐚
const ListaCMD = ['add', 'set', 'mover', 'reubicar', 'tp', 'ir', 'delete', 'rv', 'spawn', 'apt', 'gps', 'locate']

/// ⇏ 𝐗𝐭𝐚𝐫𝐢𝐧𝐠
const CmdA1 = 'add' ///Añadir home {2 variantes} Ejemplo: (!h add casita1)
const CmdA2 = 'set' ///Añadir home {2 variantes} Ejemplo: (!h add casita1)
const CmdA3 = 'mover' ///Editar home {2 variantes} Ejemplo: (!h mover casita1)
const CmdA4 = 'reubicar' ///Editar home {2 variantes} Ejemplo: (!h mover casita1)
const CmdA5 = 'tp' ///Tp home {2 variantes} Ejemplo: (!h tp casita1)
const CmdA6 = 'ir' ///Tp home {2 variantes} Ejemplo: (!h tp casita1)
const CmdA7 = 'delete' ///Eliminar home {2 variantes} Ejemplo: (!h rv casita1)
const CmdA8 = 'rv' ///Eliminar home {2 variantes} Ejemplo: (!h rv casita1)
const CmdA9 = 'homes' ///Lista home {2 variantes} Ejemplo: (!h homes casita1)
const CmdA10 = 'lista' ///Lista home {2 variantes} Ejemplo: (!h homes casita1)
const CmdA11 = 'spawn' ///En que hone deseas aparecer despues de morir {2 variantes} Ejemplo: (!h apt casita1)
const CmdA12 = 'apt' ///En que hone deseas aparecer despues de morir {2 variantes} Ejemplo: (!h apt casita1)
const CmdA13 = 'gps' ///Localizar home {2 variantes} Ejemplo: (!h gps casita1)
const CmdA14 = 'locate' ///Localizar home {2 variantes} Ejemplo: (!h gps casita1)
const CmdA15 = 'clear' ///Elimar todas las homes {2 variantes} Ejemplo: (!h alldelete casita1)
const CmdA16 = 'alldelete' ///Elimar todas las homes {2 variantes} Ejemplo: (!h alldelete casita1)
const xTartHelpMessage = ` ${Tema}§lHome System :§r Comandos de ayuda (${PrefixH})\n           ${Tema}${PrefixH} §7<${CmdA3}> §8§oCambia/Mueve la ubicacion de tu home§r\n           ${Tema}${PrefixH} §7<${CmdA2}> §o§8Establece un home§r\n           ${Tema}${PrefixH} §7<${CmdA5}> §o§8Te envia a tu home§r\n           ${Tema}${PrefixH} §7<${CmdA8}> §o§8Elimina tu home§r\n           ${Tema}${PrefixH} §7<${CmdA13}> §o§8Ubicaion de tu home§r\n           ${Tema}${PrefixH} §7<${CmdA11}> §o§8Estable un punto de generacion en tu home§r\n           ${Tema}${PrefixH} §7<${CmdA10}> §o§8Muestra la lista de home's creadas§r\n           ${Tema}${PrefixH} §7<${CmdA16}> §o§8Elimina todas la's home's del jugador§r\nNota:§7 Al ingresar un nombre con espacios remplazalo por §l_§r`

///No tocar
export { ListaCMD, CmdA1, CmdA2, CmdA3, CmdA4, CmdA5, CmdA6, CmdA7, CmdA8, CmdA9, CmdA10, CmdA11, CmdA12, CmdA13, CmdA14, CmdA15, CmdA16, xTartHelpMessage }
