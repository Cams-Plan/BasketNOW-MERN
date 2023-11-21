import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../assets/styles/globalStyles'
import { useNavigationState } from '@react-navigation/native';

export default function LockerRoomHome({ navigation, route }) {

  const source = navigation;

  const topTabIndex = useNavigationState(state => state.index);


  if (source.getId() && source.getId() == "mainStack" ) {
    return (
      <View style={globalStyles.container}>
        <Text>PLAYER CARD</Text>
      </View>
    )
  }

  

  return (
    <View style={globalStyles.container} >
      {topTabIndex == 0 ? <Text>LOCKER ROOM PLAYER CARD</Text> : <Text>LOCKER ROOM DASHBOARD</Text>}
            
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
