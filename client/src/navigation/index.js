 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import BottomTabNavigation from './bottonTabNav'
 
 export default function Navigation() {
   return (
     <NavigationContainer>
        <BottomTabNavigation />
     </NavigationContainer>
   )
 }
 
 const styles = StyleSheet.create({})
