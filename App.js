//npx expo start -> usar este comando
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Dimensions, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Button } from './Components/Button';
import * as FS from 'expo-file-system'

const hBottom = 0.05*Dimensions.get('screen').height
export default function App() {
  const [entradas,setEntradas] = useState([])
  const [nombre, setNombre] = useState("");
  const [devices,setDevices] = useState([]);

  function Guardar(){
    setEntradas([...entradas,nombre])  
    console.log(entradas);
  }
  useEffect(() => {
    let arr = []
    entradas.map((item,index) => {
      console.log(item,"useEffect");
      arr.push(<Button key = {index} text={item} style={syle.Button}/>);
    })
    setDevices(arr);
    console.log(devices,"devices")
  },[entradas])
  return (
    <>
      <View style = {syle.View}>
        <ScrollView>
          {devices}
          <Text>KK</Text>
        </ScrollView>
      </View>
      <TextInput onChangeText={(val) => setNombre(val)} style={syle.Input} placeholder='Dispositivo'></TextInput>
      {/* <TouchableOpacity onPress={Guardar} style={syle.Button}><Text style={syle.Button.Text}>Agregar</Text></TouchableOpacity> */}
      <Button onPress = {Guardar} text = {"Agregar"} style={syle.Button}/>
    </>
  );
}

const syle = StyleSheet.create({
  View:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:Dimensions.get('screen').height,
    backgroundColor:'#F2BA00'
  },
  Button:{
    position:'absolute',
    marginHorizontal:10,
    // width:0.3*Dimensions.get('screen').width,
    padding:10,
    bottom:0.01*Dimensions.get('window').height,
    // borderRadius:5,
    right:0,
    backgroundColor:'#F00000',
    height:hBottom,
    Text:{
      color:'#FFFFFF',
      textAlignVertical:'center',
      textAlign:'center',
    }
  },
  Input:{
    // borderRadius:5,
    marginHorizontal:10,
    width:0.8*Dimensions.get('screen').width,
    padding:10,
    position:'absolute',
    backgroundColor:"#F2F2F2",
    height:hBottom,
    color:'#222222',
    position:'absolute',
    borderColor:"#000000",
    bottom:0.01*Dimensions.get('window').height,
  },
  fondo:{
    position:'absolute',
    bottom:0.01*Dimensions.get('window').height,
    backgroundColor:'#0000FF',
    height:100,
    width:Dimensions.get('window').width,
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-end',
  }
})
