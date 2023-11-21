import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LockerRoomDashboardTopTabs } from './TopTabsNav';
import { StatsScreen } from '../screens';

const Drawer = createDrawerNavigator();

const LockerRoomDrawer = ({ initialParams }) => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='LockerRoomDashboard' component={LockerRoomDashboardTopTabs} 
        />
        <Drawer.Screen name='stats' component={StatsScreen} 
        />
    </Drawer.Navigator>
  )
}

export { LockerRoomDrawer };
