// na Arquitetura hexagonal essa e uma porta  Porta: !
export default interface ProvedorCriptografia {
    criptografar(text: string): string
}
