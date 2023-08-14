import { Image } from "react-native"
import Estilo from "../estilo"
import estilo from "../estilo"

export default () => {
    return (
        <Image source={require("../../../assets/iphone.png")} style={[Estilo.imagemPersonalizada, Estilo.centralize]}/>
    )
}