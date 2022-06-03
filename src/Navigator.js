import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Cart from './Cart'
import Settings from './Settings'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'


const Tab=createBottomTabNavigator()

const Navigator = () => {
    const cart = useSelector ((state) => state.cart)
    
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon:({focused})=>{
                let iconName;
                if('Home'){ iconName=focused?'home':'home-outline' }
                return (<Ionicons name={iconName} color='green' size={20} ></Ionicons>)
            }
        }} />
        <Tab.Screen name='Cart' component={Cart} options={{
            tabBarBadge:cart.length,
            tabBarIcon:({focused})=>{
                let iconName;
                if('Cart'){iconName=focused?'cart':'cart-outline'}
                return (<Ionicons name={iconName} size={20} color='green' ></Ionicons>)

            }
        }} />
       
    </Tab.Navigator>
</NavigationContainer>
    
           )
        }
 

export default Navigator

const styles = StyleSheet.create({})