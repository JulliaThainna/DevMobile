import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

//...props herança
const Stack = createNativeStackNavigator()
export default props  => (
    <Stack.Navigator initialRouteName="TelaA">
        <Stack.Screen name="TelaA" options={{title: 'Primeira Tela'}}>
            {
                props => (
                    <PassoStack {...props} avancar="TelaB"> 
                        <TelaA/>
                    </PassoStack>
                )
            }
        </Stack.Screen>
        <Stack.Screen name="TelaB">
            {
                props => (
                    <PassoStack {...props} voltar avancar="TelaC" avancarParam={{numero: 50, nome: 'Júllia'}}>
                        <TelaB/>
                    </PassoStack>
                )
            }
        </Stack.Screen>
        <Stack.Screen name="TelaC">
            {
                props => (
                    <PassoStack {...props} voltar avancar="TelaC" avancarParam={{numero: parseInt(Math.random() * 100), nome: 'Xpto'}}>
                        <TelaC {...props}/>
                    </PassoStack>
                )
            }
        </Stack.Screen>

   
    </Stack.Navigator>
)