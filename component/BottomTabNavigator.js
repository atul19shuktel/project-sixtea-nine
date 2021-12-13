
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ride from '../screens/ride';
import History from '../screens/history';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

//const Tab=createBottomTabNavigator()
const Tab=createMaterialBottomTabNavigator()
export default class BottomTabNavigator extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name='ride' component={Ride}/>
                    <Tab.Screen name='history' component={History}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
    
}
