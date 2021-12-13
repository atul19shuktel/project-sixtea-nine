
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class History extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text} >screah screen</Text>
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
    }
})