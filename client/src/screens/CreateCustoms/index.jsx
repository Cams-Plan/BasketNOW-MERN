import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../assets/styles/globalStyles'
import { CreateDrillOptionGroup } from '../../components'

export default function CreateCustoms() {
  return (
    <View style={globalStyles.container}>
      <Text>CreateCustoms</Text>
      <CreateDrillOptionGroup />
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
