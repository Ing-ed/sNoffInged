import { Button } from "./Button";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";

export function MyModal({name, CloseModal}){
    const [salidas, setSalidas] = useState([]);
    useEffect(() => {
        console.log("http://192.168.0.114/cmd");
        fetch("http://test.local/cmd",
        {
            method:'post',
            headers:{
                'Content-Type':'text/plain'
            },
            body:"g"
        })
        .then((r) => console.log(r))
        .catch((e) => console.log("err",e))
    },[])
    return(
        <View style={style.View}>
            <Button text ={"X"} style={{Text:{color:'#FFFFFF',fontSize:25, textAlign:'center'},position:'absolute', right:20, backgroundColor:'rgba(255,255,255,0.3)', width:30}} onPress={CloseModal}/>
            <Text style={style.Text}>{name}</Text>
            <Button text={"kk"} style={style.Button}/>
            <Button text={"kk"} style={style.Button}/>
            <Button text={"kk"} style={style.Button}/>
        </View>
    )
}

const style = StyleSheet.create({
    View:{
        position:'absolute',
        right:0.05*Dimensions.get('screen').width,
        top:0.05*Dimensions.get('screen').height,
        width:0.9*Dimensions.get('screen').width,
        height:0.5*Dimensions.get('screen').height,
        backgroundColor:'rgba(0,0,0,0.85)',
        zIndex:10,
        padding:10,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        gap:10
    },
    Button:{
        backgroundColor:'#FFFFFF',
        height:0.05*Dimensions.get('screen').height,
    },
    Text:{
        textAlign:'center',
        color:'#FAFAFA'
    }
})