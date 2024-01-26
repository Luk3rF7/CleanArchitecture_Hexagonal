import InverteSenhaCripto from "@/adapter/auth/inverteSenhaCripto"
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario"
import Usuario from "@/core/usuario/model/Usuario"
import TerminalUtil from "../util/TerminalUtil"
import EspacoSenhaCripto from "@/adapter/auth/EspacoSenhacripto"
import SenhaCripto from "@/adapter/auth/senhaBcrypt"

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuário")
    const email = await TerminalUtil.camposRequerido(
        "email : ",
        "User1@email.com"
    )
    const nome = await TerminalUtil.camposRequerido(
        "Nome : ",
        "user1 "
    )
    const senha = await TerminalUtil.camposRequerido(
        "senha : ",
        "abc123"
    )

    const usuario: Usuario = { email, nome, senha }
    const provedorCriptografia = new SenhaCripto()
    // 1 adaptador :new EspacoSenhaCripto()
    // 2 adaptador : new InverteSenhaCripto()
    const CasoDeUso = new RegistrarUsuario(
        provedorCriptografia
    )
    //
    await CasoDeUso.executar(usuario)

    TerminalUtil.sucesso("Usuário registrado com sucesso!")
    await TerminalUtil.esperarEnter()
    try {
        await CasoDeUso.executar(usuario)
    } catch (err: any) {
        TerminalUtil.error(err)
    } finally {
        await TerminalUtil.esperarEnter()
    }
}
