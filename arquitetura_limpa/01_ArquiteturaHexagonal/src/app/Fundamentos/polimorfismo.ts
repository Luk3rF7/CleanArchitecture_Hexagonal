//
import Carro from "@/core/fundamentos/Carro"
import Ferrari from "@/core/fundamentos/Ferrari"
import Fusca from "@/core/fundamentos/Fusca"

//
import TerminalUtil from "../util/TerminalUtil"
export default async function polimorfismo() {
    TerminalUtil.titulo("Polimorfismo")

    const [tipoCarro] = await TerminalUtil.selecionar(
        "Tipo de Carro??",
        ["Ferrari", "Fusca"]
    )
    const carro: Carro =
        tipoCarro === 0 ? new Ferrari() : new Fusca()

    while (true) {
        TerminalUtil.limpar()
        // velocidade maxima carro
        TerminalUtil.exibirChaveValor(
            "Velocidade Máxima: ",
            `${carro.velocidadeMaxima} km/h`
        )
        // velocidade Atual :
        TerminalUtil.exibirChaveValor(
            "Velocidade Atual: ",
            `${carro.velocidadeAtual} km/h`
        )
        // Polimorfismo #1
        const [opcao] = await TerminalUtil.selecionar(
            "Qual opção?",
            ["Acelerar", "Frear"]
        )

        opcao === 0 ? carro.acelerar() : carro.frear()

        const continuar = await TerminalUtil.confirmacao(
            "Deseja continuar ?"
        )
        if (!continuar) return
    }
}
