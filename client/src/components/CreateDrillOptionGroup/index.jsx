import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CreateDrillOption from '../CreateDrillOption';

import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default function CreateDrillOptionsGroup() {

    const options = [
        {
            optionGroup: "Primary KPI", options: ["Reps", "Timer"]
        },
        {
            optionGroup: "Secondary KPI", options: ["Reps", "Timer"]
        },
        {
            optionGroup: "Players", options: ["Solo", "Duo", "Team"]
        },
        {
            optionGroup: "Type", options: ["Offense", "Defense"]
        }
    ]

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
    <View style={styles.container} >
      <FlatList
      data={options}
      style={styles.list}
      keyExtractor={(item) => item.optionGroup}
      numColumns={2}
      columnWrapperStyle={{
        width: '100%',
        justifyContent: 'space-evenly'
      }}
      renderItem={({ item })=> (
        <View style={styles.optionsGroupContainer} >
            <Text style={styles.optionGroupText}>{item.optionGroup}</Text>
            <View style={styles.optionsGroup} >
            {item.options.map((option)=> (
                <>
                <CreateDrillOption>{findIcon(option)}</CreateDrillOption>
                </>
            ))}
            </View>
        </View>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    iconImage: {
        height: 40,
        aspectRatio: 1/1,
    },
    list: {
    // backgroundColor: "#DDD",
    flexWrap: "wrap",
    flexDirection: "column",
    },
    optionsGroupContainer: {
        // flexWrap: "wrap",
        
    },
    optionsGroup: {
        flexDirection: "row",
    },
    optionGroupText: {
        textAlign: "center"
    }
})
