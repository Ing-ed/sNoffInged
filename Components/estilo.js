import { StyleSheet, Dimensions, StatusBar } from "react-native"
let alto = Dimensions.get('screen').height - StatusBar.currentHeight;
let ancho = Dimensions.get('screen').width
let altoWin = Dimensions.get("window").height - StatusBar.currentHeight;
let anchowin = Dimensions.get('window').width

export let estilo = StyleSheet.create({
    view:{
        height:alto,
        paddingVertical:20,
        paddingTop:50,
        width:ancho,
        backgroundColor:'#DFDFDF',
        display:'flex',
        flexDirection:'column'
    },

    entry:{
        borderRadius:5,
        margin:10,
        marginVertical:10,
        height:alto*0.08,
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor:'#AFAFAF',
        elevation: 15,
        padding:20,
        shadowOpacity: 1,
        shadowRadius: 10.0,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 0,
        },
    },

    styleModal:{
        position:'absolute',
        display:"flex",
        margin:5,
        marginVertical:35,
        paddingTop:10,
        backgroundColor:'rgba(0,0,0,0.35)',
        height:altoWin -100,
        width:anchowin -10,
        borderRadius:5,
        justifyContent:'center',
        styleEntry:{
            width:"95%",
            alignSelf:'center',
            marginVertical:10,
            backgroundColor:"#AAAAAA",
            fontSize:20,
            borderRadius:5,
            padding:20
        },
        styleBoton:{
            width:40,
            height:40,
            margin:3,
            backgroundColor:"#DDD",
            borderRadius:5,
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'center',
            marginVertical:10,
            font:{
                fontSize:30
            }
        }
    },

    dialog:{
        height:altoWin -200,
        width:anchowin -20,
        marginVertical:40,
        borderRadius:5,
        alignSelf:'center',
        backgroundColor:"#DDD",
        display:'flex',
        flexDirection:"column",
        justifyContent:'center',
        gap:10,
        alignItems:'center',
        padding:50,
        text:{
            fontSize:20,
        },
        textInput:{
            borderWidth:1,
            width:200,
            textAlign:'center',
            fontSize:15,
        },
        butonCont:{
            
            display:'flex',
            flexDirection:'row',
            gap:10
        },
        buton:{
            borderWidth:1,
            borderRadius:10,
            width:150,
            alignItems:'center',
            font:{
                fontSize:20,
                
            }
        }
    },

    button:{
        width:ancho*0.2,
        height:ancho*0.2,
        marginBottom:altoWin*0.05,
        marginEnd:10,
        display:'flex',
        justifyContent:'center',
        alignSelf:'flex-end',
        alignItems:'center',
        backgroundColor:'#70CAEE',
        borderRadius:50,
        font:{
            fontSize:50
        },
        shadowColor:"00AAE4",
        shadowOffset:{width:10,height:0},
        shadowOpacity:1,
        elevation:20
    },
    
    camPrev:{
        position:"relative",
        width:anchowin,
        height:alto,
        botonFoto:{
            color:"#323232",
            width:ancho*0.16,
            height:ancho*0.16,
            borderRadius:ancho*0.08,
            backgroundColor:"#DDD",
            margin:3,
            position:"absolute",
            bottom:altoWin*0.05,
            alignSelf:"center",
            alignItems:"center",
            textAlignVertical:"center",
            font:{
                fontSize:50
            }
        },
        botonCerrar:{
            color:"#323232",
            position:"absolute",
            top:altoWin*0.05,
            right:3,
            width:ancho*0.16,
            height:ancho*0.16,
            borderRadius:ancho*0.08,
            backgroundColor:"#DDD",
            margin:3,
            alignItems:"center",
            font:{
                fontSize:50
            },
        }
    }
})