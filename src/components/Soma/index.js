import { Text, View } from "react-native";
import estilo from "../estilo";

export default (param) => {
    //console.log("Exibindo o log");
    //console.warn("Exibindo warn");
    console.warn(param.valor1);
    //var valor1 = 10;
    //var valor2 = 20;
    //var somaValores = valor1 + valor2;
    var somaValores = param.valor1 + param.valor2;
    
    //console.warn(somaValores);

    return(
        <View>
            <Text style={estilo.textoGrandePrincipal}>O valor da soma é {somaValores}</Text>
        </View>
    )
}