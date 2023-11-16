import { View, Text } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import 'react-native-gesture-handler'
import { LockerRoomHome } from '../screens';

const TopTab = createMaterialTopTabNavigator();

const LockerRoomDashboardTopTabs = ({initialParams}) => {
  return (
    <TopTab.Navigator>
        <TopTab.Screen name='PlayerCard' component={LockerRoomHome} 
        initialParams={initialParams} />
        <TopTab.Screen name='Dashboard' component={LockerRoomHome} />
    </TopTab.Navigator>
  )
}

export { LockerRoomDashboardTopTabs };
