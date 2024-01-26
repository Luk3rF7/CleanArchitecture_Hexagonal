import CasoDeUso from "@/core/shared/casoDeUso"
import Usuario from "../model/Usuario"
import ProvedorCriptografia from "./ProvedorCriptografia"
import RepositorioUsuarioEmMemoria from "./RegistrarUsuarioEmMemoria"
import Errors from "@/core/shared/Errors"
import Id from "@/core/shared/id"

export default class RegistrarUsuario
    implements CasoDeUso<Usuario, void>
{
    constructor(
        private provedorCripto: ProvedorCriptografia
    ) {}
    //
    async executar(usuario: Usuario): Promise<void> {
        // usuario em memoria hard code
        const repo = new RepositorioUsuarioEmMemoria()
        // cript  senha exemplos
        const senhaCripto =
            this.provedorCripto.criptografar(usuario.senha)

        //check se usuario existe
        const UsuarioExistente = await repo.buscarPorEmail(
            usuario.email
        )
        if (UsuarioExistente)
            throw new Error(Errors.USUARIO_JA_EXISTE)
        // registro do usuario
        const newUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCripto,
        }

        repo.inserir(newUsuario)
        console.log(
            `\n\n userRegister : ${JSON.stringify(
                newUsuario
            )}`
        )
    }
}
