import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../assets/styles/globalStyles'



export default function StartUpScreen({ navigation }) {

  const [loggedIn, setLoggedIn] = useState()

  return (
    <View >
      <TouchableOpacity onPress={()=> navigation.replace('Tabs')} >
        <View style={styles.clickThrough} >
          <ImageBackground 
          style={styles.bgImage}
          source={require('../../assets/images/backgrounds/meshGradientLight.png')}
          // resizeMode='stretch'
          >
            <Text style={styles.appTitle} >BasketNow</Text>
            <Image 
            style={styles.welcomeLogo}
            resizeMode='contain'
            source={require('../../assets/images/logos/basketNowInkV4.png')} />
            <Text style={{...globalStyles.blueText, ...styles.sloganText}} >Training at your finger tips</Text>
            <Text style={styles.progressText} >click anywhere to enter</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  clickThrough: {
    // padding: 20,
    // marginTop: 32,
    backgroundColor: "#DDD",
    height: '100%',
  },
  bgImage: {
    flex: 1,
  },
  appTitle: {
    marginTop: '70%',
    marginBottom: 20,
    textAlign: "center",
    fontSize: 40,
    fontWeight: '600',
    color: '#0c738a'
  },
  welcomeLogo: {
    height: 100,
    aspectRatio: 1/1,
    alignSelf: "center",
    marginBottom: 15,
  },
  sloganText: {
    textAlign: "center",
    fontSize: 20,
  },
  progressText: {
    textAlign: "center",
    marginTop: 50,
    fontWeight: "500",
    color: '#A1A1A1'
  },
  progressTextDark: {
    textAlign: "center",
    marginTop: 50,
    fontWeight: "500",
    color: '#A1A1A1aa'
  }
})
