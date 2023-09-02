import { SafeAreaView } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Stack from "./Stack";
import TelaA from "../views/TelaA";

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <Stack/>
        </NavigationContainer>
    </SafeAreaView>
)