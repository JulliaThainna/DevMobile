import React, { Fragment } from "react"
import { Text } from "react-native"
import estilo from "../estilo"

        {
        /*<React.Fragment id="xpto">
            <Text style={estilo.textoGrandePrincipal}>Título principal</Text>
            <Text>Texto secundario</Text>
        </React.Fragment>

        <Fragment>
            <Text style={estilo.textoGrandePrincipal}>Título principal</Text>
            <Text>Texto secundario</Text>
        </Fragment>
        */}

//Com <> </> não dá pra por parâmetro
export default () => {
    return (
        <>
            <Text style={estilo.textoGrandePrincipal}>Título principal</Text>
            <Text>Texto secundario</Text>
        </>
    )
}