import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CreateDrillOption from '../CreateDrillOption';

import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default function CreateDrillOptionsGroup() {

    const options = [
        {
            optionGroup: "Primary KPI", options: ["Reps", "Timer"], key: 0
        },
        {
            optionGroup: "Secondary KPI", options: ["Reps", "Timer"], key: 1
        },
        {
            optionGroup: "Players", options: ["Solo", "Duo", "Team"], key: 2
        },
        {
            optionGroup: "Type", options: ["Offense", "Defense"], key: 3
        }
    ]


//   return (
//     <View style={styles.container} >
//       <FlatList
//       data={options}
//       style={styles.list}
//       keyExtractor={(item) => item.key}
//       numColumns={2}
//       columnWrapperStyle={{
//         width: '100%',
//         justifyContent: 'space-evenly'
//       }}
//       renderItem={({ item })=> (
//         <View style={styles.optionsGroupContainer} >
//             <Text style={styles.optionGroupText}>{item.optionGroup}</Text>
//             <View style={styles.optionsGroup} >
//             {item.options.map((option)=> (
//                 <>
//                 <CreateDrillOption key={option.key} option={option}/>
//                 </>
//             ))}
//             </View>
//         </View>
//       )}
//       />
//     </View>
//   )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
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
