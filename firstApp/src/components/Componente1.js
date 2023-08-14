import { Text } from "react-native";

function Component1(){
    return ( //Só é possível retornar um elemento, no caso se vocÊ tentar por 2 text vai dar errado -> por dentro de uma view
        <Text>Componente #1</Text>
    )
}

export default Component1;