
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'
export default class Ride extends React.Component{
    constructor(){
        super()
        this.state={
            domState:'normal',
            hasCameraPermission:null,
            scanned:false,
            scannedData:'',
        }
    }

    getcameraPermission=async domState=>{
        //const { status }=await Permissions.askAsync(Permissions.CAMERA)
        const {status}=await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermission:status==='granted',domState:domState,scanned:false
        })
    }
    handleBarCodeScanned=async({type,data})=>{
        this.setState({
            scannedData:data,domState:'normal',scanned:true
        })
    }
    render(){
        const{domState,scanned,hasCameraPermission,scannedData}=this.state;
        if(domState==='scanner'){
            return(
                <BarCodeScanner
                onBarCodeScanned={scanned?undefined:this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                />
            )
        }
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    {hasCameraPermission?scannedData:'request for camera permission'}
                </Text>
                <TouchableOpacity style={styles.qrbutton} 
                onPress={()=>this.getcameraPermission('scanner')}>
                
                    <Text style={styles.text} >scan QR code

                    </Text>
                    </TouchableOpacity>
            </View>
        )
    
    }
    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#420420',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:24,
    },
    qrbutton:{
    width:'100%',
    height:55,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:'#F48D20',
    borderRadius:15
    },
})