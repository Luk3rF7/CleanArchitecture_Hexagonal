import TerminalUtil from "@/app/util/TerminalUtil"
import polimorfismo from "../Fundamentos/polimorfismo"

export default async function menuFundamentos() {
    TerminalUtil.titulo("menu Fundamentos")

    const [indice] = await TerminalUtil.menu([
        "1.Plimorfismo",
        "Voltar",
    ])

    switch (indice) {
        case 0:
            await polimorfismo()
            break
        case 1:
            return
    }
    await menuFundamentos()
}
