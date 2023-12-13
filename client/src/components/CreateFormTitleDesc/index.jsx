import { StyleSheet, Text, View,TextInput, FlatList, TouchableOpacity, Button, Pressable } from 'react-native'
import React from 'react'
import CreateDrillOption from '../CreateDrillOption';
import { MaterialIcons, Octicons } from '@expo/vector-icons'

import { FieldArray, Formik } from 'formik'
import * as yup from "yup"

const createSchema = yup.object({
    title: yup.string()
    .required()
    .min(1)
    .max(50),
    description: yup.string()
    .max(150)
})

export default function CreateFormTitleDesc({ addDrill }) {

  const options = [
    {
      optionGroup: "Primary KPI", options: ["Reps", "Timer"], key: 0, field: "primaryKPI"
    },
    {
      optionGroup: "Secondary KPI", options: ["Reps", "Timer"], key: 1, field: "secondaryKPI"
    },
    {
      optionGroup: "Players", options: ["Solo", "Duo", "Team"], key: 2, field: "players"
    },
    {
      optionGroup: "Type", options: ["Offense", "Defense"], key: 3, field: "type"
    }
  ];

  const newStep = (currentSteps) => ({
    currentSteps: ''
  })

  return (
    
    <View style={styles.formContainer} >
      <Formik 
      initialValues={{title: '', description: '', primaryKPI: null, secondaryKPI: null, players: null, type: null, stepByStep: []}}
      validationSchema={createSchema}
      >
        {(props)=> (
            <View>
                <TextInput 
                style={styles.titleInput}
                placeholder='Title'
                maxLength={50}
                onChangeText={props.handleChange('title')}
                value={props.values.title}
                />
                <View style={styles.descriptionContainer} >   
                  <TextInput 
                    style={styles.descriptionInput}
                    multiline={true}
                    placeholder='Short Description (optional)'
                    onChangeText={props.handleChange('description')}
                    value={props.values.description}
                    maxLength={150}
                    />
                  <Text style={{textAlign: "center", margin: 5}} >Characters remaining {150 - props.values.description.length}</Text>
                </View>
                <View>
                  <Text style={styles.sectionTitle} >Step-By-Step</Text>
                  <View style={styles.metaContainer}>
                    {/* ICONS */}
                    {options.map((opt => {
                      return (
                      <View key={opt.key} style={styles.optionsGroupContainer} >
                        <Text style={styles.optionGroupText}>{opt.optionGroup}</Text>
                            <View style={styles.optionsGroup} >
                            {opt.options.map((option)=> (
                                <TouchableOpacity 
                                onPress={()=> props.setFieldValue(opt.field, option)}>
                                <CreateDrillOption 
                                key={option.key} 
                                option={option}
                                selected={props.values[opt.field]}
                                />
                                </TouchableOpacity>
                            ))}
                            </View>
                      </View>
                      )
                    }))}
                  </View>
                </View>
                <View >
                  <Text style={styles.sectionTitle} >Step-By-Step</Text>
                  {/* <TextInput 
                    style={styles.stepByStepInput}
                    multiline={true}
                    placeholder='Step 1'
                    onChangeText={props.handleChange('stepByStep')}
                    value={props.values.stepByStep}
                    maxLength={150}
                    /> */}
                </View>
                <View style={styles.stepsContainer} >
                <FieldArray
                name="stepByStep"
                render={arrayHelpers => (
                  <>
                    {props.values.stepByStep.map((step, index) => (
                      <View key={index} style={styles.step}>
                        {/** both these conventions do the same */}
                        <TextInput 
                          style={styles.stepByStepInput}
                          multiline={true}
                          placeholder={`Step ${index+1}`}
                          onChangeText={props.handleChange(`stepByStep[${index}]`)}
                          value={props.values.stepByStep[index]}
                          maxLength={150}
                        />
                        <TouchableOpacity 
                        onPress={() => arrayHelpers.remove(index)}  >
                          <MaterialIcons 
                          name="remove-circle-outline" 
                          size={32} color="darkred" 
                          style={styles.removeIcon} />
                        </TouchableOpacity>
                      </View>
                    ))}
                    <TouchableOpacity 
                    onPress={() => props.setFieldValue('stepByStep', [...props.values.stepByStep, newStep(`step${props.values.stepByStep.length}`)])} >
                      <Octicons 
                      name="diff-added"
                      size={40} color="#9e9b90" 
                      style={styles.addStepIcon}
                      />
                    </TouchableOpacity>
                    {/* <MaterialIcons 
                    name="add-circle-outline" 
                    size={40} color="black" 
                    style={styles.addStepIcon}
                    onPress={() => props.setFieldValue('stepByStep', [...props.values.stepByStep, newStep(`step${props.values.stepByStep.length}`)])} /> */}
                  </>
                )}

                />
                </View>
                <TouchableOpacity style={styles.submitButton}>
                  <Text style={styles.submitText} >Create</Text>
                </TouchableOpacity>
            </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    formContainer: {
      paddingBottom: 60
    },
    titleInput: {
        alignSelf: "center",
        width: "70%",
        height: 45,
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#FBCB9320",
        marginTop: 15,
        textAlign: "center",
        fontSize: 20,
        borderColor: "#C5882C",
        borderWidth: 1
    },
    descriptionInput: {
        alignSelf: "center",
        width: "100%",
        height: 90,
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#FBCB9320",
        marginTop: 15,
        textAlign: "center",
        fontSize: 20,
        borderColor: "#C5882C",
        borderWidth: 1
    },
    descriptionContainer: {
        flexDirection: "column", alignSelf: "center",
        width: "85%",
    },
    metaContainer: {
      marginTop: 30,
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
    },
    list: {
    // backgroundColor: "#DDD",
        flexWrap: "wrap",
        flexDirection: "column",
        
    },
    optionsGroupContainer: {
      
    },
    optionsGroup: {
        flexDirection: "row",
    },
    optionGroupText: {
        textAlign: "center"
    },
    stepByStepInput: {
      alignSelf: "center",
      width: "80%",
      height: 60,
      padding: 5,
      borderRadius: 10,
      backgroundColor: "#FBCB9320",
      textAlign: "center",
      fontSize: 20,
      borderColor: "#C5882C",
      borderWidth: 1
  },
  sectionTitle: {
    marginTop: 15,
    fontSize: 17,
    textAlign: "center"
  },
  stepsContainer: {
    marginTop: 15,
  },
  step: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  removeIcon: {
    marginLeft: 10
  },
  addStepIcon: {
    textAlign: "center",
    marginBottom: 15
  },
  submitButton: {
    alignSelf: 'center',
    padding: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    width: 80,
  },
  submitText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: "center",
  }
})
