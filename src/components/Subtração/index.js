import { Text } from "react-native";
import estilo from "../estilo";

export default (param) => {
    const v1 = parseInt(param.valor1);
    const v2 = parseInt(param.valor2);
    const sub = v1 - v2;
    
    return(
        <Text style={estilo.textoGrandePrincipal}>
            O resultado da subtração é: {sub}
        </Text>
    )
}