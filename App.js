//npx expo start -> usar este comando
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { Button } from './Components/Button';
import { MyModal } from './Components/MyModal';
import * as FS from 'expo-file-system'

const hBottom = 0.05*Dimensions.get('screen').height
export default function App() {
  const [entradas,setEntradas] = useState([])
  const [nombre, setNombre] = useState("");
  const [modal, setModal] = useState(false)
  const [device, setDevice] = useState("");

  function CloseModal(){
    console.log("cerrar")
    setModal(false);
  }

  function Delete(indice){
    console.log(indice)
    let arr = [...entradas]
    arr.splice(indice,1)
    setEntradas(arr)
    FS.writeAsStringAsync(FS.documentDirectory + "devices.txt",JSON.stringify(arr))
      .then((r) => ToastAndroid.show("Dispositivo borrado",ToastAndroid.LONG))
      .catch((e) => console.log("No se pudo borrar",e))

    console.log(arr)
  }

  function Abrir(name){
    setDevice(name);
    setModal(true);
  }

  function Guardar(){
    let arr = [...entradas,nombre]
    setEntradas(arr)
    // setEntradas([...entradas,nombre]) 
    console.log(arr,"arr")

    FS.writeAsStringAsync(FS.documentDirectory + "devices.txt",JSON.stringify(arr))
    .then((r) => ToastAndroid.show("Dispositivo añadido",ToastAndroid.LONG))
    .catch((e) => console.log("No se pudo guardar",e))
    // console.log(entradas);
  }
  useEffect(() => {
    FS.readAsStringAsync(FS.documentDirectory + "devices.txt")
    .then((r) =>{
      console.log(r, "aca")
      setEntradas(JSON.parse(r))
    })
    .catch((e) => console.log("error",e))
  },[])
  return (
    <>
      <View style = {syle.View}>
        {modal && <MyModal name={device} CloseModal={CloseModal}/>}
        <ScrollView style={syle.Scroll}>
          {entradas.map((item,index) => {
            return(<Button key={index} text={item} style={syle.ScrollButton} onPress={() =>Abrir(item)} onLongPress = {Delete} indice = {index}/>);}
          )}
        </ScrollView>
      </View>
      <TextInput onChangeText={(val) => setNombre(val)} style={syle.Input} placeholder='Dispositivo'></TextInput>
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
    backgroundColor:'#F2BA00',
    zIndex:0
  },
  Scroll:{
    width:Dimensions.get('screen').width,
    padding:20,
    paddingVertical:50,
    display:'flex',
    flexDirection:'column',
  },
  ScrollButton:{
    width:100,
    height:50,
    backgroundColor:'#FF0000',
    marginVertical:10,
    Text:{
      color:'#FFFFFF',
      textAlign:'center',
      textAlignVertical:'center',
      fontSize:30
    }

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
