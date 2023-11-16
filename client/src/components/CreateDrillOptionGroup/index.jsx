import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CreateDrillOption from '../CreateDrillOption';

import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default function CreateDrillOptionsGroup() {

    const Options = [
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

  return (
    <View>
      <Text>CreateDrillOptionsGroup</Text>
      <CreateDrillOption>
        <MaterialIcons name="timer" size={43} color="black" />
      </CreateDrillOption>
      <CreateDrillOption>
        <Entypo name="cycle" size={43} color="black" />
      </CreateDrillOption>
    </View>
  )
}

const styles = StyleSheet.create({})
