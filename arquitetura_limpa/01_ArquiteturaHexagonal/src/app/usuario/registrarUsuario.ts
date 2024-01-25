import Usuario from "../core/usuario/model/Usuario"
import RegistrarUsuario from "../core/usuario/service/RegistrarUsuario"
import TerminalUtil from "../util/TerminalUtil"

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuário")
    const id = await TerminalUtil.camposRequerido("id :")
    const email = await TerminalUtil.camposRequerido(
        "email : "
    )
    const nome = await TerminalUtil.camposRequerido(
        "Nome : "
    )
    const senha = await TerminalUtil.camposRequerido(
        "senha : "
    )

    const usuario: Usuario = { id, email, nome, senha }

    //
    await new RegistrarUsuario().executar(usuario)
    TerminalUtil.sucesso("Usuário registrado com sucesso!")
    console.log("\n", "\n", usuario)
    await TerminalUtil.esperarEnter()
}
