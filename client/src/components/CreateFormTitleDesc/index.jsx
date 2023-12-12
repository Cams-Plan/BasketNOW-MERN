import { StyleSheet, Text, View,TextInput, FlatList, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import CreateDrillOption from '../CreateDrillOption';

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

  const handleStep = (currentSteps) => {

  }

  return (
    
    <View style={styles.formContainer} >
      <Formik 
      initialValues={{title: '', description: '', primaryKPI: null, secondaryKPI: null, players: null, type: null, stepByStep: [''],}}
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
                  {/* <FlatList
                    data={options}
                    style={styles.list}
                    keyExtractor={(item) => item.key}
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
                              <TouchableOpacity 
                              onPress={()=> props.setFieldValue(item.field, option)}>
                              <CreateDrillOption 
                              key={option.key} 
                              option={option}
                              selected={props.values[item.field]}
                              />
                              </TouchableOpacity>
                          ))}
                          </View>
                      </View>
                    )}
                    /> */}
                </View>
                <View >
                  <Text>Step-By-Step</Text>
                  <TextInput 
                    style={styles.stepByStepInput}
                    multiline={true}
                    placeholder='Step 1'
                    onChangeText={props.handleChange('stepByStep')}
                    value={props.values.stepByStep}
                    maxLength={150}
                    />
                </View>
                <FieldArray
                name="stepByStep"
                render={arrayHelpers => (
                  <>
                    {props.values.stepByStep.map((step, index) => (
                      <View key={index}>
                        {/** both these conventions do the same */}
                        <TextInput 
                          style={styles.stepByStepInput}
                          multiline={true}
                          placeholder={`step${index+1}`}
                          onChangeText={props.handleChange(`stepByStep[${index}]`)}
                          value={props.values.stepByStep[index]}
                          maxLength={150}
                        />
                        <Button title='-' onPress={() => arrayHelpers.remove(index)}/>
                        <Button
                          title='+'
                          onPress={() =>
                          arrayHelpers.push(index, props.values.stepByStep)} />
                      </View>
                    ))}
                  </>
                )}

                />
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
})
