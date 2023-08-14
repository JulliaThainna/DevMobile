import { Text } from "react-native"
import Estilo from "../estilo"

export default ({texto}) => {
    return (
        <Text style={Estilo.textoGrandePrincipal}>{texto}</Text> //Passar valor por parâmetro
    )
}