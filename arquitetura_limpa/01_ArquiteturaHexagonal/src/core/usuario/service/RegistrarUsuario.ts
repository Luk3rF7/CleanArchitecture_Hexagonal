import CasoDeUso from "@/core/shared/casoDeUso"
import Usuario from "../model/Usuario"
import ProvedorCriptografia from "./ProvedorCriptografia"
import RepositorioUsuarioEmMemoria from "../../../adapter/mock/RegistrarUsuarioEmMemoria"
import Errors from "@/core/shared/Errors"
import Id from "@/core/shared/id"
import RepositorioUsuario from "./RespositorioUsuario"

export default class RegistrarUsuario
    implements CasoDeUso<Usuario, void>
{
    constructor(
        private repositorio: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia
    ) {}
    //
    async executar(usuario: Usuario): Promise<void> {
        // cript  senha exemplos
        const senhaCripto =
            this.provedorCripto.criptografar(usuario.senha)

        //check se usuario existe
        const UsuarioExistente =
            await this.repositorio.buscarPorEmail(
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

        this.repositorio.inserir(newUsuario)
        console.log(
            `\n\n userRegister : ${JSON.stringify(
                newUsuario
            )}`
        )
    }
}
