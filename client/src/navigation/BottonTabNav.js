import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Home, LockerRoomDashboard, Schedule, CreateCustoms } from "../screens"


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Locker Room' component={LockerRoomDashboard} />
            <Tab.Screen name='Create' component={CreateCustoms} />
            <Tab.Screen name='Schedule' component={Schedule} />
        </Tab.Navigator>
    )
}
