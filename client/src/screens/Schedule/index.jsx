import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../assets/styles/globalStyles'

export default function Schedule() {
  return (
    <SafeAreaView style={globalStyles.container} >
      <Text>Schedule</Text>
    </SafeAreaView>
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
