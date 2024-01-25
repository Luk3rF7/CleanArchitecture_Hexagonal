import Usuario from "../core/usuario/model/Usuario"
import RegistrarUsuario from "../core/usuario/service/RegistrarUsuario"
import TerminalUtil from "../util/TerminalUtil"

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

    //
    await new RegistrarUsuario().executar(usuario)

    TerminalUtil.sucesso("Usuário registrado com sucesso!")
    await TerminalUtil.esperarEnter()
    try {
        await new RegistrarUsuario().executar(usuario)
    } catch (err: any) {
        TerminalUtil.error(err)
    } finally {
        await TerminalUtil.esperarEnter()
    }
}
