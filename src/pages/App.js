import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import BotaoGrandeVerde from '../components/botaoGrandeVerde';
import Component1 from '../components/Componente1';
import Componente2 from '../components/Componente2';
import Comp3, { Comp1, Comp2 } from '../components/MultiComponentes';
import OutroComponente from '../components/OutroComponente';
import ComponenteTexto from '../components/ComponenteTexto';
import ImagemPersonalizada from '../components/ImagemPersonalizada';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        {/* <View></View> */}
        <Text style={styles.xpto}>Olá mundo!</Text>

        <Image style={styles.logo} source={require('../../assets/logo.png')}/>

        <TextInput 
          placeholder='Insira um email'
          style={styles.inputLogin}
          keyboardType={'email-address'}
        />

        <TextInput 
          placeholder='Insira uma senha'
          style={styles.inputLogin}
          keyboardType={'numeric'}
          secureTextEntry={true}
        />

        <BotaoGrandeVerde textoBotao = {'Acessar o app'}/>
        
        <StatusBar style="auto"/>
        <Component1></Component1>
        <Componente2></Componente2>
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Comp3></Comp3>
        <OutroComponente></OutroComponente>
        <ComponenteTexto texto={"Oii"}></ComponenteTexto>
        <ComponenteTexto texto={"Hiii"}></ComponenteTexto>

        <SafeAreaView style={styles.cont2}>
          <ImagemPersonalizada></ImagemPersonalizada>
        </SafeAreaView>
    </SafeAreaView>
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
  logo:{
    width: 200,
    height: 200,
  },
  inputLogin:{
    height: 60,
    width: 250,
    fontSize: 20,
    marginTop: 5,
    textAlign: 'center',
  },
  cont2:{
    backgroundColor: "red",
    height: 299,
    justifyContent: "center",
    alignItems: "center",
  }
});
