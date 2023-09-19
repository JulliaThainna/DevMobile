import { Text, View } from "react-native"
import Estilo from "./src/components/Estilo"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import FormLogin from "./src/views/FormLogin"

const Stack = createNativeStackNavigator()
export default props => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="FormLogin" screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="FormLogin"
                component={FormLogin}
            />
        </Stack.Navigator>
    </NavigationContainer>
)