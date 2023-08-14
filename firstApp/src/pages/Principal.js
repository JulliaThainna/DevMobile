import { SafeAreaView, Text } from "react-native";
import Estilo from "../components/estilo";
import Soma from "../components/Soma";
import Subtração from "../components/Subtração";
import Divisao from "../components/Divisao";
import Multiplicacao from "../components/Multiplicacao";
import ComponenteMultiplo from "../components/ComponenteMultiplo";
import Botoes from "../components/Botoes";

export default function Principal(){
    // no return é JSX
    return (
        <SafeAreaView style={Estilo.margemSuperior}>
            <ComponenteMultiplo></ComponenteMultiplo>
            <Botoes></Botoes>
            {/*
            <Text style={Estilo.textoGrandePrincipal}></Text>

            <Soma valor1="100" valor2="300"></Soma>
            <Soma valor1="100" valor2="300"></Soma>
            <Soma valor1={55} valor2={78}></Soma>

            <Subtração valor1={50} valor2={25}></Subtração>

            <Divisao valor1={100} valor2={50}></Divisao>

            <Multiplicacao valor1={10} valor2={10}></Multiplicacao>
            */}
        </SafeAreaView>
    )
}