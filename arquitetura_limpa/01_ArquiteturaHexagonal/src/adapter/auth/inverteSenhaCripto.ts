import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia"

// na arquitetura hexagonal esta classe  e um  adaptador
export default class InverteSenhaCripto
    implements ProvedorCriptografia
{
    criptografar(senha: string): string {
        return senha.split("").reverse().join("")
    }
}
