import 'react-native-gesture-handler';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Schedule, CreateCustoms, Home } from "../screens"
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeStack } from './StackNavigation';
import { LockerRoomDrawer } from './drawerNav';
import { globalStyles } from '../assets/styles/globalStyles';



const Tab = createMaterialBottomTabNavigator();

// const focusedIconColor = "#6abab6"
const focusedIconColor = "#005F6D"
const iconColor = "#3bbedb"
// const iconColor = "#57e9ff"

function BottomTabNavigation() {
    return (
        <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor={iconColor}
        screenOptions={{tabBarStyle: {display: "none"}}}
        barStyle={{ backgroundColor: focusedIconColor }}
        
        >
            <Tab.Screen 
            name='HomeTab' 
            component={HomeStack} 
            options={{tabBarIcon: ({ focused })=> (
                <MaterialIcons 
                name='home' 
                size={32} 
                style={globalStyles.bottonTabIcon} 
                color={ focused ? focusedIconColor : iconColor } />
                )}} />
            <Tab.Screen 
            name='LockerRoomTab' 
            component={LockerRoomDrawer}
            options={{ tabBarLabel: "My Locker Room", tabBarIcon: ({ focused })=> (
                <MaterialCommunityIcons 
                name='locker-multiple' 
                size={30} 
                style={globalStyles.bottonTabIcon} 
                color={ focused ? focusedIconColor : iconColor } />
                )}} />
            <Tab.Screen 
            name='CreateTab' 
            component={CreateCustoms} 
            options={{ tabBarLabel: "Create" ,tabBarIcon: ({ focused })=> (
                <MaterialIcons 
                name='add-circle-outline' 
                size={30} 
                style={globalStyles.bottonTabIcon} 
                color={ focused ? focusedIconColor : iconColor } />
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
                color={ focused ? focusedIconColor : iconColor } />
                )}}
            />
        </Tab.Navigator>
    )
}

export { BottomTabNavigation };
