import Usuario from "../model/Usuario"

export default class RepositorioUsuarioEmMemoria {
    private static readonly items: Usuario[] = []
    // inserir um usuario

    async inserir(usuario: Usuario) {
        const items = RepositorioUsuarioEmMemoria.items
        const usuarioExistente = await this.buscarPorEmail(
            usuario.email
        )

        if (usuarioExistente) return
        items.push(usuario)
    }
    async buscarPorEmail(
        email: string
    ): Promise<Usuario | null> {
        const items = RepositorioUsuarioEmMemoria.items

        return (
            items.find((user) => user.email === email) ??
            null
        )
    }
}
