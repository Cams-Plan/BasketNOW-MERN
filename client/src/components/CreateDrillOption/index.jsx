import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default function CreateDrillOption({ option, selected }) {
  /*
  selected prop passed down to influence the style of the icon. 
  if field value == the icon's name, it is selected and will change colour
  */ 

  const findIcon = (title) => {
    switch (title.toLowerCase()) {
      case "reps":
        return (<Entypo name="cycle" size={43} color="black" />)
            
      case "timer":
        return (<MaterialIcons name="timer" size={43} color="black" />)

      case "solo":
        return (<Image style={styles.iconImage} resizeMode='contain' source={require('../../assets/images/icons/soloPlayer.png')} />)

      case "duo":
        return (<Image 
          style={styles.iconImage}
          resizeMode='contain' 
          source={require('../../assets/images/icons/duoPlayer.png')} />)

      case "team":
        return (<Image 
          style={styles.iconImage}
          resizeMode='contain' 
          source={require('../../assets/images/icons/team.png')} />)

      case "offense":
        return (<Image 
          style={styles.iconImage}
          resizeMode='contain' 
          source={require('../../assets/images/icons/offense.png')} />)

      case "defense":
        return (<Image 
          style={styles.iconImage}
          resizeMode='contain' 
          source={require('../../assets/images/icons/defense.png')} />)
    
      default:
        break;
    }
  }

  return (
    <View style={selected == option ? {...styles.optionContainer, ...styles.selectedIcon} : styles.optionContainer} >
      {findIcon(option)}
    </View>
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
  },
  iconImage: {
    height: 40,
    aspectRatio: 1/1,
  },
  selectedIcon: {
    backgroundColor: "#d9a327"
  }
})
