import TerminalUtil from "@/app/util/TerminalUtil"
import polimorfismo from "../Fundamentos/polimorfismo"
import dip from "../Fundamentos/dip"

export default async function menuFundamentos() {
    TerminalUtil.titulo("menu Fundamentos")

    const [indice] = await TerminalUtil.menu([
        "1.Plimorfismo",
        "2. Dip",
        "Voltar",
    ])

    switch (indice) {
        case 0:
            await polimorfismo()
            break
        case 1:
            await dip()
            break
        default:
            return
    }
    await menuFundamentos()
}
