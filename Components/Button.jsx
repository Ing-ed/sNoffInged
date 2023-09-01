import { TouchableOpacity, Text } from "react-native";
import { useEffect, useState } from "react";

export function Button({text,style,onPress,onLongPress,indice}){
    const [index, setIndex] = useState("")
    // useEffect(()=>{
    //     setIndex(indice)
    //     console.log(indice)
    // })
    return(
        <TouchableOpacity onPress={onPress} onLongPress={()=>onLongPress(indice)} style = {style}>
            <Text style = {style.Text}>{text}</Text>
        </TouchableOpacity>
    )
}