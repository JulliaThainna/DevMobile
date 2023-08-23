import { Text } from "react-native"
import Estilo from "../components/Estilo"
import { View } from "react-native"
import ComponenteControlado from "../components/ComponenteControlado"
//import ListaProdutosV3 from "../components/Produtos/ListaProdutosV3"

export default function Home( ){
    return(
        <View style={Estilo.centraliza}>
            <Text style={[Estilo.textoGrande, Estilo.centraliza]}>Página inicial</Text>
            {/*<ListaProdutosV3/>*/}
            <ComponenteControlado />
        </View>
    )
}