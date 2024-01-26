import Usuario from "../../core/usuario/model/Usuario"
import db from "./db"

export default class RepositorioUsuarioPg {
    private static readonly items: Usuario[] = []
    // inserir um usuario

    async inserir(usuario: Usuario) {
        //
        await db.query(
            `
        insert into usuarios
        (id,nome,email,senha)
        values($1,$1,$1,$1) `,
            [
                usuario.id,
                usuario.nome,
                usuario.email,
                usuario.senha,
            ]
        )
    }
    async buscarPorEmail(
        email: string
    ): Promise<Usuario | null> {
        //
        const usuario = await db.oneOrNone(
            "select * from usuarios where email = $1",
            [email]
        )
        if (!usuario) return null
        return usuario
    }
}
