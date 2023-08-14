import { Text } from "react-native"
import estilo from "../estilo";

export default (param) =>{
    const v1 = param.valor1;
    const v2 = param.valor2;
    let div = 0;

    if(v2 == 0){
        console.warn("Divisão por 0 não é aceita");
    }else{
        div = v1/v2;
    }

    return(
        <Text style={estilo.textoGrandePrincipal}>
            O valor da divisão é: {div}
        </Text>
    )
}