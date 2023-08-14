import { View, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';

export default function BotaoGrandeVerde({textoBotao}){
    return(
        <View>
            <TouchableOpacity style={formatacao.botaoSecundario}>
                <View>
                <Text style={formatacao.textoBotaoSecundario}>
                    {textoBotao}
                </Text>
                </View>
            </TouchableOpacity>        
        </View>
    )
}

const formatacao = StyleSheet.create({
    botaoSecundario:{
        marginTop: 10,
        backgroundColor: 'green',
        height: 60,
        width: 240,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoSecundario:{
        color: '#fff',
        fontSize: 20,
    }
})