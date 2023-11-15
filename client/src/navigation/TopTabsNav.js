import { View, Text } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import 'react-native-gesture-handler'
import { LockerRoomDashboard } from '../screens';

const TopTab = createMaterialTopTabNavigator();

const LockerRoomDashboardTopTabs = () => {
  return (
    <TopTab.Navigator>
        <TopTab.Screen name='PlayerCard' component={LockerRoomDashboard} />
        <TopTab.Screen name='Stats' component={LockerRoomDashboard} />
    </TopTab.Navigator>
  )
}

export { LockerRoomDashboardTopTabs };
