import { Button, Text } from "react-native"
import Style from "../Style"
import { useState } from "react"

export default props => {
    
    //let n = props.n
    [n, setN] = useState(props.n)

    const inc = () => setN(n + 1)
    const dec = () => setN(n - 1)

    /*function inc(){
        n++
        console.warn(n)
    }

    const dec = () => {
        n--
        console.warn(n)
    }*/

    return(
        <>
            <Button title="+" onPress={inc}/>
            <Text style={Style.txtMedio}>{n}</Text>
            <Button title="-" onPress={dec}/>
        </>
    )
}