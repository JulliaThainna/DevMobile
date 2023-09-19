import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import Estilo from "../components/Estilo"
import { useState } from "react"

export default props => {
    [valorLogin, setValorLogin] = useState("");
    [valorSenha, setValorSenha] = useState("");

    return(
        <View style={Estilo.loginContainer}>
            <Image source={require("../assets/logo.png")} style={Estilo.loginImageLogo}/>
            <TextInput
                style={Estilo.loginTextInput}
                placeholder="Digite o login"
                value={valorLogin}
                onChangeText={(valorLogin) => setValorLogin(valorLogin)}
            />
            <TextInput 
                style={Estilo.loginTextInput}
                placeholder="Digite a senha"
                value={valorSenha}
                onChangeText={(valorSenha) => setValorSenha(valorSenha)}
                secureTextEntry={true}
            />
            <TextInput style={Estilo.loginForgotPassword}>
                Esqueceu a senha?    
            </TextInput>
            <TouchableOpacity style={Estilo.loginButton}>
                <Text style={Estilo.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <Text style={Estilo.loginForgotPassword}>Criar conta</Text>
        </View>
    )
}