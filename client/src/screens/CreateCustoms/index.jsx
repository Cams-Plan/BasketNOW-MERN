import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../assets/styles/globalStyles'
import { CreateDrillOptionGroup, CreateFormTitleDesc } from '../../components'

export default function CreateCustoms() {

  const addDrill = (drillData) => {
    console.log(drillData)
  }

  return (
    <View style={styles.container}>
      <Text style={globalStyles.headerText} >Create A Custom Drill</Text>
      <CreateFormTitleDesc addDrill={addDrill} />
      <CreateDrillOptionGroup />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 12
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
      },
})
