import CasoDeUso from "../../shared/casoDeUso"
import Usuario from "../model/Usuario"

export default class RegistrarUsuario
    implements CasoDeUso<Usuario, void>
{
    async executar(entrada: Usuario): Promise<void> {
        //
    }
}
