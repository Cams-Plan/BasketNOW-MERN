import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CreateDrillOption(props) {
  return (
    <TouchableOpacity  style={styles.optionContainer} >
      {props.children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    optionContainer: {
        margin: 7,
        width: 55,
        aspectRatio: 1/1,
        padding: 5,
        backgroundColor: "#DDD",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})
