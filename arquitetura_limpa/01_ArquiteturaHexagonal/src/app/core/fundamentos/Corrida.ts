import Carro from "./Carro"

// inversão a gente passa interface para parametro
export default function corrida(
    carro: Carro,
    logger: (str: string) => void = console.log
) {
    // velocidade atual
    Array.from({ length: 8 }).forEach(() => {
        carro.acelerar()
        logger(`\nVelocidade: ${carro.velocidadeAtual}`)
    })
    // velocidade atual

    Array.from({ length: 8 }).forEach(() => {
        carro.frear()
        logger(`\nVelocidade: ${carro.velocidadeAtual}`)
    })
}
