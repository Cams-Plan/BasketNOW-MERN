import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

import { Formik } from 'formik'
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
  return (
    <View style={styles.formContainer} >
      <Formik 
      initialValues={{title: '', description: ''}}
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
            </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    formContainer: {

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
    }
})
