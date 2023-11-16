import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Schedule, CreateCustoms, Home } from "../screens"
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeStack } from './StackNavigation';
import { LockerRoomDrawer } from './drawerNav';
import { globalStyles } from '../assets/styles/globalStyles';


const Tab = createMaterialBottomTabNavigator();

const iconColor = "#6abab6"

function BottomTabNavigation() {
    return (
        <Tab.Navigator >
            <Tab.Screen 
            name='HomeTab' 
            component={HomeStack} 
            options={{tabBarIcon: ({ focused })=> (
                <MaterialIcons 
                name='home' 
                size={32} 
                style={globalStyles.bottonTabIcon} 
                color={iconColor} />
                )}} />
            <Tab.Screen 
            name='LockerRoomTab' 
            component={LockerRoomDrawer}
            options={{ tabBarLabel: "My Locker Room", tabBarIcon: ({ focused })=> (
                <MaterialCommunityIcons 
                name='locker-multiple' 
                size={30} 
                style={globalStyles.bottonTabIcon} 
                color={iconColor} />
                )}} />
            <Tab.Screen 
            name='CreateTab' 
            component={CreateCustoms} 
            options={{ tabBarLabel: "Create" ,tabBarIcon: ({ focused })=> (
                <MaterialIcons 
                name='add-circle-outline' 
                size={30} 
                style={globalStyles.bottonTabIcon} 
                color={iconColor} />
                )}}
            />
            <Tab.Screen 
            name='ScheduleTab' 
            component={Schedule} 
            options={{ tabBarLabel: "Schedule" ,tabBarIcon: ({ focused })=> (
                <MaterialIcons 
                name='calendar-today' 
                size={28.5} 
                style={globalStyles.bottonTabIcon} 
                color={iconColor} />
                )}}
            />
        </Tab.Navigator>
    )
}

export { BottomTabNavigation };
