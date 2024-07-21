import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Start = () => {

  const navigation = useNavigation();
  const HandleSubmit = () => {
    navigation.navigate('SecondPage');
  };

  return (
    <View style={{ display: "flex", flex: 1 }}>
      <View>
        <Image style={{ width: 384, height: 385, top: 0 }} source={require('../assets/cover.png')} />
      </View>

      <View style={{ backgroundColor: "white", height: 460, width: 385, top: -20, borderRadius: 30 }}>
        <Text style={{ color: "#756EF3", textAlign: "center", top: 60, fontSize: 46, fontWeight: "900" }}>Taskcy</Text>
        <Text style={{ color: "#2F394B", textAlign: "center", top: 65, fontSize: 37, fontWeight: "800" }}>Building Better</Text>
        <Text style={{ color: "#2F394B", textAlign: "center", top: 65, fontSize: 37, fontWeight: "800" }}>Workplaces</Text>
        <Text style={{ color: "grey", textAlign: "center", top: 80, fontSize: 20 }}>Create a unique emotional story that</Text>
        <Text style={{ color: "grey", textAlign: "center", top: 80, fontSize: 20 }}>describes better than words</Text>
      </View>


      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={HandleSubmit} >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    top: -180,
    height: 60,
    width: 250,
    backgroundColor: '#7064EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    shadowColor: '#756EF3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 9,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: "900",
    textAlign: 'center',
  },
});

export default Start;