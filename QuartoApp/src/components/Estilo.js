import { StyleSheet } from "react-native"

export default StyleSheet.create({
    containerCentralized:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textMedium:{
        fontSize: 35,
        fontWeight: "bold",
    },
    loginContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    loginTextInput:{
        backgroundColor: "#465881",
        width: 300,
        height: 45,
        marginTop: 30,
        fontSize: 15,
        borderRadius: 30,
        padding: 10,
    },
    loginForgotPassword:{
        color: "white",
        marginTop: 25,
        marginBottom: 45,
    },
    loginButton:{
        width: 200,
        height: 45,
        backgroundColor: "yellow",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    loginButtonText:{
        color: "black",
    },
    loginImageLogo:{
        width: 200,
    }
})