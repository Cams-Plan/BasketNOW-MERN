import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../assets/styles/globalStyles'

export default function LockerRoomHome({ navigation }) {

  const source = navigation;

  // console.log(source.getId())

  if (source.getId() && source.getId() == "mainStack" ) {
    return (
      <View style={globalStyles.container}>
        <Text>PLAYER CARD</Text>
      </View>
    )
  }

  return (
    <View style={globalStyles.container} >
      <Text>LockerRoomHome</Text>      
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
