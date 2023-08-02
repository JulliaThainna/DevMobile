import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import BotaoGrandeVerde from './src/components/botaoGrandeVerde';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.xpto}>Olá mundo!</Text>
      <Text style={styles.secundario}>usando expo-cli!</Text>
      <Text>terceiro texto</Text>

      <TouchableOpacity style={styles.botaoPrincipal}>
        <Text style={styles.textoBotao}>Texto do botão</Text>
      </TouchableOpacity>

      <BotaoGrandeVerde textoBotao = {'Primeiro botão'}/>
      <BotaoGrandeVerde textoBotao = {'Segundo botão'}/>
      <BotaoGrandeVerde textoBotao = {'Terceiro botão'}/>
      
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xpto:{
    color: 'red',
    fontSize: 36,
  },
  secundario:{
    color: 'green',
    fontSize: 21,
  },
  botaoPrincipal:{
    backgroundColor: 'blue',
    height: 40,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao:{
    color: 'white',
    fontWeight: 'bold',
  },
});
