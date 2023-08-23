import { Text } from "react-native"
import Estilo from "../Estilo"
import produtos from "./Produtos" //Porque não é um componente visual

export default props => {
    function renderizaProdutos(){
        return (
            produtos.map(
                (p) => {
                    return <Text style={Estilo.textoPequeno} key={p.id}>Id: {p.id} - {p.nome} - {p.valor}</Text>
                }
            )
        )
    }

    return(
        <>
            <Text style={[Estilo.textoGrande, Estilo.centraliza]}>Lista de Produtos</Text>
            {
                renderizaProdutos()
            }
        </>
    )
}