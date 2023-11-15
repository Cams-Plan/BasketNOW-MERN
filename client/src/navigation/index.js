import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import { MainStack } from './StackNavigation'
 
 export default function Navigation() {
   return (
     <NavigationContainer>
        <MainStack />
     </NavigationContainer>
   )
 }

