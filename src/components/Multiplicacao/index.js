import { Text } from "react-native"
import estilo from "../estilo"

//export default props => {}
export default ({valor1, valor2}) => { //não precisa do parênteses no props
    /*let v1 = props.valor1;
    let v2 = props.valor2;
    let mult = v1 * v2;*/

    //Usando desestruturação
    //const {valor1, valor2} = props;
    let mult = valor1 * valor2;

    return (
        <Text style={estilo.textoGrandePrincipal}>
            O valor da multiplicação é: {mult}
        </Text>
    )
}