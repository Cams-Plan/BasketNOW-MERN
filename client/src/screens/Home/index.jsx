import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../assets/styles/globalStyles'
import { HomeDashboardCard } from '../../components'

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headerText} >Home Dashboard</Text>
      <Text style={styles.subText} >Upcoming Workouts</Text>
      <View style={styles.scheduleSnippet} >
        <Text style={{ textAlign: "right", marginBottom: 14 }}>12:00 - 13:30</Text>
        <Text style={{...styles.mainCalendarText, textTransform: "uppercase", color: "#E60903"}} >no upcoming workouts</Text>
        <Text style={{...styles.mainCalendarText, fontSize: 17}}  >Schedule a Workout </Text>
      </View>
      
      <Text style={styles.subText} >Quick Access</Text>
      <View style={styles.cardArea} >
        <TouchableOpacity>
          <HomeDashboardCard>
            <Text style={styles.cardText} >Technical Training</Text>
          </HomeDashboardCard>
        </TouchableOpacity>

        <TouchableOpacity>
          <HomeDashboardCard>
            <Text style={styles.cardText} >Your Playbook</Text>
          </HomeDashboardCard>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.push('Create')} >
          <HomeDashboardCard>
            <Text style={styles.cardText} >Customise Your Training</Text>
          </HomeDashboardCard>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.push('Player Card')} >
          <HomeDashboardCard >
            <Text style={styles.cardText} >View Your Player Card</Text>
          </HomeDashboardCard>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subText: {
    textAlign: "center",
    fontSize: 16,
  },
  cardArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  scheduleSnippet: {
    height: 120,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 10,

  },
  mainCalendarText: {
    textAlign: "center",
    fontSize: 12,
  },
  cardText: {
    fontSize: 17,
    textAlign: "center",
  }
})
