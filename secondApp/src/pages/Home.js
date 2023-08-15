import { Text, View } from "react-native";
import Style from "../components/Style";
import Itera from "../components/Itera";

export default function Home(){
    return(
        <View style={Style.centralizado}>
            <Text style={[Style.txtGrande, Style.txtVerde]}>Pagina Inicial</Text>
            <Itera n={0}></Itera>
        </View>
    )
}