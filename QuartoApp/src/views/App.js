import { SafeAreaView } from "react-native";
import TelaA from "./TelaA";
import TelaB from "./TelaB";
import TelaC from "./TelaC";

export default props => (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <TelaA/>
        <TelaB/>
        <TelaC/>
    </SafeAreaView> 
)