import { TextInput, Text } from "react-native"
import Estilo from "../Estilo"
import { useState } from "react"

export default props => {
    //let valorDigitado = "Valor inicial" 
    [valorDigitado, setValorDigitado] = useState('Valor inicial')

    return (
        <>
            <Text style={Estilo.textoGrande}>{valorDigitado}</Text>
            <TextInput 
                style={[Estilo.textoMedio, Estilo.centraliza]}
                placeholder="Digite o seu nome"
                value={valorDigitado}
                onChangeText={(valorDigitado) => setValorDigitado(valorDigitado)}
            />
        </>
    )
}

//Uma interface não altera um estado, mas um estado altera uma interface