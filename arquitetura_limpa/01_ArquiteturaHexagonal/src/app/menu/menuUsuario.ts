// vamos contruir menu principal
import TerminalUtil from "@/app/util/TerminalUtil"
import menuFundamentos from "./menuFundamentos"
import registrarUsuario from "../usuario/registrarUsuario"

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
