import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Button } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Animated, {useSharedValue,useAnimatedStyle,} from 'react-native-reanimated';

const atciveTab = ['#0067FF', '#00C2FF']
const inactiveTab = ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']

const App = () => {

  const [selectedTab, setSelectedTab] = useState({
    tickets: true,
    collectibles: false
  })

  const selectTicketTab = () => {
    setSelectedTab({
      tickets: true,
      collectibles: false
    })
  }

  const selectCollectiblesTab = () => {
    setSelectedTab({
      tickets: false,
      collectibles: true
    })
  }

    const offset = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: offset.value * 255 }],
      };
    });

return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={selectTicketTab}
        style={styles.mainview}>
        <LinearGradient
          style={styles.ticketTab}
          colors={selectedTab.tickets ? atciveTab : inactiveTab}
          start={{ x: 1, y: 2 }}
          end={{ x: 0, y: 0 }}
        >
          <Text style={styles.text}>Tickets</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={selectCollectiblesTab}
        style={styles.mainview2}>
        <LinearGradient
          style={styles.collectiblesTab}
          colors={selectedTab.collectibles ? atciveTab : inactiveTab}
          start={{ x: 1, y: 2 }}
          end={{ x: 0, y: 0 }}
        >
          <Text style={styles.text}>Collectibles</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#050035',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 14,
    letterSpacing: 0.1,
  },
  mainview: {
    width: 163,
    gap: 10,
    backgroundColor: 'rgba(209, 214, 219, 0.1)',
    height: 40,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  mainview2: {
    width: 163,
    gap: 10,
    backgroundColor: 'rgba(209, 214, 219, 0.1)',
    marginLeft: 3,
    height: 40,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  ticketTab: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  collectiblesTab: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red'
  }
})