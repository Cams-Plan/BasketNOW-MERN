import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CreateCustoms, Home, LockerRoomDashboard, Schedule, StartUpScreen } from '../screens';
import 'react-native-gesture-handler'
import { BottomTabNavigation } from './BottomTabNav';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Tabs' >
        <Stack.Screen name='Startup' component={StartUpScreen} />
        <Stack.Screen name='Tabs' component={BottomTabNavigation} />
    </Stack.Navigator>
  )
}

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Schedule' component={Schedule} />
            <Stack.Screen name='Create Customs' component={CreateCustoms} />
            <Stack.Screen name='Locker Room' component={LockerRoomDashboard} />
        </Stack.Navigator>
    )
}
// const LockerRoomStack = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name='LockerRoomDashboard' component={LockerRoomDashboard} />
//             <Stack.Screen name='Schedule' component={Schedule} />
//             <Stack.Screen name='Create Customs' component={CreateCustoms} />
//             <Stack.Screen name='Locker Room' component={LockerRoomDashboard} />
//         </Stack.Navigator>
//     )
// }

export {MainStack, HomeStack}

