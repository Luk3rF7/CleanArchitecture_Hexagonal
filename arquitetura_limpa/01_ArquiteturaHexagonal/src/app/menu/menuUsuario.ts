// vamos contruir menu principal

import registrarUsuario from "../usuario/registrarUsuario"
import TerminalUtil from "../util/TerminalUtil"

export default async function menuUsuario() {
    TerminalUtil.titulo("Usuário")

    const [indice] = await TerminalUtil.menu([
        "1.Registrar Usuario:",
        "Voltar",
    ])

    switch (indice) {
        case 0:
            await registrarUsuario()
            break
        case 1:
            return
    }
    menuUsuario()
}
