import { Button } from "./Button";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { useState, useEffect, useRef } from "react";

export function MyModal({name, CloseModal}){
    // const socket = dgram.createSocket('udp4')
    const [res,setRes] = useState("res");
    const [estado, setEstado] = useState([]);
    const [salidas, setSalidas] = useState([]);
    const [botones, setBotones] = useState([])
    const [fondo, setFondo] = useState(["#FAFAFA","#FAFAFA","#FAFAFA"])
    // refs
    // const botones = []

    useEffect(() => {
        console.log("setBotones")
        setBotones([
        <Button key = {1} onPress={() =>Enviar(0)} indice={0} text={estado[0]} style={{backgroundColor:fondo[0], height:0.05*Dimensions.get('screen').height, Text:{fontSize:22,textAlign:'center',padding:7}  }}/>,
        <Button key = {2} onPress={() =>Enviar(1)} indice={1} text={estado[1]} style={{backgroundColor:fondo[1], height:0.05*Dimensions.get('screen').height, Text:{fontSize:22,textAlign:'center',padding:7}  }}/>, 
        <Button key = {3} onPress={() =>Enviar(2)} indice={2} text={estado[2]} style={{backgroundColor:fondo[2], height:0.05*Dimensions.get('screen').height, Text:{fontSize:22,textAlign:'center',padding:7}  }}/>
        ])
    },[estado])
    // const bots = ['bot1','bot2','bot3'];


    function Enviar(index){
        console.log(`g|${index}`)
        fetch(`http://192.168.0.114/cmd`,
        {
            method:'post',
            headers:{
                'Content-Type':'text/plain'
            },
            body:`g|${index}`
        })
        .then((r) => {
            console.log(r.text().then((r) => {

                console.log(r, "Respuesta del server")
                let arr = r.split('|').map((item,index) => {
                    return(
                        item === '1' ? "ON" : "OFF"
                    )
                })
                console.log(arr)
                setEstado(arr)

            }))
                // .then(console.log(r,"r"))s
        })
        .catch((e) => console.log("err",e))
    }

    useEffect(() => {
        // console.log(`http://${name}.local/cmd`);
        fetch(`http://192.168.0.114/cmd`,
        {
            method:'post',
            headers:{
                'Content-Type':'text/plain'
            },
            body:"g"
        })
        .then((r) => {
            console.log(r.text().then((r) => {
                console.log(r)
                let arr = r.split('|').map((item,index) => {
                    return(
                        item === '1' ? "ON" : "OFF"
                    )
                })
                // console.log(arr,arrNum)
                setEstado(arr)

            }))
                // .then(console.log(r,"r"))s
        })
        .catch((e) => console.log("err",e))
    },[])



    return(
        <View style={style.View}>
            
            <Button text ={"X"} style={{Text:{color:'#FFFFFF',fontSize:25, textAlign:'center'},position:'absolute', right:20, backgroundColor:'rgba(255,255,255,0.3)', width:30}} onPress={CloseModal}/>
            <Text style={style.Text}>{name}</Text>
            {botones}
            {/* <Button text={estado[0]} style={style.Button}/>
            <Button text={estado[1]} style={style.Button}/>
            <Button text={estado[2]} style={style.Button}/> */}
        </View>
    )
}

const style = StyleSheet.create({
    View:{
        position:'absolute',
        right:0.05*Dimensions.get('screen').width,
        top:0.1*Dimensions.get('screen').height,
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
        backgroundColor:"#F2F2F2",
        height:0.05*Dimensions.get('screen').height,
    },
    Text:{
        textAlign:'center',
        color:'#FAFAFA',
        fontSize:40
    }
})