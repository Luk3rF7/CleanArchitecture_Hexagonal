import CasoDeUso from "../../shared/casoDeUso"
import Usuario from "../model/Usuario"

export default class RegistrarUsuario
    implements CasoDeUso<Usuario, void>
{
    async executar(usuario: Usuario): Promise<void> {
        //
        const senhaCripto = usuario.senha
            .split("")
            .reverse()
            .join()
        console.log(senhaCripto)
    }
}
