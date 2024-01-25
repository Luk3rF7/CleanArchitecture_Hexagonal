import Errors from "../../shared/Errors"
import CasoDeUso from "../../shared/casoDeUso"
import Id from "../../shared/id"
import Usuario from "../model/Usuario"
import RepositorioUsuarioEmMemoria from "./RegistrarUsuarioEmMemoria"

export default class RegistrarUsuario
    implements CasoDeUso<Usuario, void>
{
    async executar(usuario: Usuario): Promise<void> {
        // cript  senha exemplos
        const senhaCripto = usuario.senha
            .split("")
            .reverse()
            .join("")
        // usuario em memoria hard code
        const repo = new RepositorioUsuarioEmMemoria()
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
