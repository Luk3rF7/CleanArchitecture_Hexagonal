import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario"
import Usuario from "@/core/usuario/model/Usuario"
import TerminalUtil from "../util/TerminalUtil"
import SenhaCripto from "@/adapter/auth/senhaBcrypt"
import RepositorioUsuarioPg from "@/adapter/database/RegistrarUsuarioPg"

export default async function registrarUsuario() {
    const {
        camposRequerido,
        titulo,
        sucesso,
        error,
        esperarEnter,
    } = TerminalUtil
    titulo("Registrar Usuário")
    const email = await camposRequerido("email : ")
    const nome = await camposRequerido("Nome : ")
    const senha = await camposRequerido("senha : ")
    const usuario: Usuario = { email, nome, senha }
    try {
        const repositorio = new RepositorioUsuarioPg()
        // 1 adaptador :new EspacoSenhaCripto()
        // 2 adaptador : new InverteSenhaCripto()
        const provedorCriptografia = new SenhaCripto()
        const CasoDeUso = new RegistrarUsuario(
            repositorio,
            provedorCriptografia
        )
        await CasoDeUso.executar(usuario)
        sucesso("Usuário registrado com sucesso!")
    } catch (err: any) {
        error(err)
    } finally {
        await esperarEnter()
    }
}
