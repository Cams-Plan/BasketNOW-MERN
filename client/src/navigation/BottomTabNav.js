import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Schedule, CreateCustoms, Home } from "../screens"

import { HomeStack } from './StackNavigation';
import { LockerRoomDrawer } from './drawerNav';


const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigation() {
    return (
        <Tab.Navigator >
            <Tab.Screen name='HomeTab' component={HomeStack} />
            <Tab.Screen name='LockerRoomTab' component={LockerRoomDrawer} />
            <Tab.Screen name='CreateTab' component={CreateCustoms} />
            <Tab.Screen name='ScheduleTab' component={Schedule} />
        </Tab.Navigator>
    )
}

export { BottomTabNavigation };
