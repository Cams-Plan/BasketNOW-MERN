import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LockerRoomDashboardTopTabs } from './TopTabsNav';

const Drawer = createDrawerNavigator();

const LockerRoomDrawer = ({ initialParams }) => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='LockerRoomDashboard' component={LockerRoomDashboardTopTabs} 
        />
    </Drawer.Navigator>
  )
}

export { LockerRoomDrawer };
