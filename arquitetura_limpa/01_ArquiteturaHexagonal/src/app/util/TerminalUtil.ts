import { terminal } from "terminal-kit"

export default class TerminalUtil {
    // vamos ter função utilitaria para padronizar
    // menu terminal :
    static async menu(opcoes: string[]) {
        const resposta = await terminal.singleColumnMenu(
            opcoes
        ).promise

        return [
            resposta.selectedIndex,
            resposta.selectedText,
        ]
    }
    //Titulo menu
    static titulo(texto: string) {
        terminal.clear()
        terminal.magenta(`${texto}\n`)
        terminal.magenta(`-`.repeat(texto.length) + `\n`)
    }
    // ! Opçao de configuração menu
    //Selecionar tipo de carro :
    static async selecionar(
        texto: string,
        opcoes: string[]
    ): Promise<[number, string]> {
        terminal.yellow(`\n ${texto}`)

        const resposta = await terminal.singleLineMenu(
            opcoes
        ).promise

        return [
            resposta.selectedIndex,
            resposta.selectedText,
        ]
    }
    // vai limpar terminal
    static limpar() {
        terminal.clear()
    }
    // confirmar sim ou nao :
    static async confirmacao(
        texto: string
    ): Promise<boolean> {
        terminal.yellow(`\n ${texto}`)

        const resposta = await terminal.singleLineMenu([
            "Sim",
            "Não",
        ]).promise

        return resposta.selectedIndex === 0
    }

    static exibirChaveValor(chave: string, valor: any) {
        terminal.yellow(chave).green(valor).white("\n")
    }
}