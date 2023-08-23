import { Text, FlatList } from "react-native"
import Estilo from "../Estilo"
import produtos from "./Produtos" //Porque não é um componente visual

export default props => {
    function geraLista(){
        return <FlatList //Já faz o trabalho do map
                    data={produtos}
                    renderItem={
                        renderizaProduto
                    } //precisa passar uma arrow function dentro dessa propriedade
                        keyExtractor={(i) => `${i.id}`} //Essencial, passa uma arrow function (i é de iteração)
                        //ctrl + espaço atalhover as propriedades
                /> 
    }

    const renderizaProduto = ({item: produto}) => {
        return(
            <Text style={Estilo.textoPequeno}>
                {produto.id} - 
                {produto.nome} - 
                R$ {produto.valor}
            </Text>
        )
    }

    return(
        <>
            <Text style={[Estilo.textoMedio, Estilo.centraliza]}>Lista de Produtos</Text>
            {
                geraLista()
            }
        </>
    )
}