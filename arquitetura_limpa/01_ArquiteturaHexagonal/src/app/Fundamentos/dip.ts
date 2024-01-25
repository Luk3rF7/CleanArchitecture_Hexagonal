import { terminal } from "terminal-kit"
import Civic from "../core/fundamentos/Civic"
import corrida from "../core/fundamentos/Corrida"
import Ferrari from "../core/fundamentos/Ferrari"
import Fusca from "../core/fundamentos/Fusca"
import TerminalUtil from "../util/TerminalUtil"

export default async function dip() {
    TerminalUtil.titulo("Dip")
    const [tipo] = await TerminalUtil.selecionar(
        "Tipo De Carro?",
        ["Fusca", "Civic", "Ferrari"]
    )
    let carro
    switch (tipo) {
        case 0:
            carro = new Fusca()
            break
        case 1:
            carro = new Civic()
            break
        default:
            carro = new Ferrari()
            break
    }

    corrida(carro, terminal.green)

    await TerminalUtil.esperarEnter()
}
