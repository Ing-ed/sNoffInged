import { TouchableOpacity, Text } from "react-native";

export function Button({text,style,onPress}){
    return(
        <TouchableOpacity onPress={onPress} style = {style}>
            <Text style = {style.Text}>{text}</Text>
        </TouchableOpacity>
    )
}