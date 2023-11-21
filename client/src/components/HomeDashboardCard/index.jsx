import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeDashboardCard(props) {
  return (
    <View style={styles.card} >
      <View style={styles.cardContent} >
        { props.children }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        width: 180,
        aspectRatio: 1/1,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        
    },
    cardContent: {
      marginHorizontal: 18,
      marginVertical: 10,
      padding: 3,
      alignItems: "centre",
    }
})
