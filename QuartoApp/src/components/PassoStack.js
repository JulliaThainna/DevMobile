import { Button } from "react-native";
import { View } from "react-native";

//Arquivo para fazer a navegação (routes)
export default props => (
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {
                props.avancar
                ? <Button 
                        title="Avançar"
                        onPress={() => {
                            props.navigation.push(props.avancar, props.avancarParam || null)
                        }}
                    />
                : false
            }
            {
                props.voltar
                ? <Button
                        title="Voltar"
                        onPress={() => {
                            props.navigation.goBack()
                            //props.navigation.push(props.avancar, props.avancarParam || null)
                        }}  
                  />
                : false
            }
        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
)