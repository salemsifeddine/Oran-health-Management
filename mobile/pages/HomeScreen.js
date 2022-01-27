import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Pressable,
  TouchableOpacity, 
  Linking, 
  Platform, 
 } from 'react-native';

export default function HomeScreen({navigation}) {
  const dialCall = () => {
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    }
    else {
      phoneNumber = 'telprompt:${1234567890}';
    }
 
    Linking.openURL(phoneNumber);
  };
  return (
    <View style={styles.container}>
      <Image 
      source={require('../assets/images/home.png')}
      style={styles.homeImage}
      />
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.title}>Welcome to Help-me!</Text>
        <Text style={styles.description}>
          Help-me is an app that facilitates handeling
          emergencies
        </Text>
      </View>
        
      <View style={styles.buttons}>
      <TouchableOpacity 
        style={[styles.callsButton, styles.button]}
        activeOpacity={0.5}
        onPress={dialCall}
      >
        <Text style={[{color: '#ffe0e0',}, styles.buttonText]} >Call An Ambulance</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.appointmentButton, styles.button]}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('AppointmentForm')}
      >
        <Text style={[{color: '#d4dcff',}, styles.buttonText]}>Make an Appointment</Text>
      </TouchableOpacity>
      <Pressable style={[styles.otherButton, styles.button]}>
        <Text style={[{color: '#3e404a',}, styles.buttonText]}>Other Options</Text>
      </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeImage: {
    height: 230,
    resizeMode: 'contain',
  },
  welcomeTextContainer: {
    width: '70%',
  },
  title: {
    // marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 23,
    color: '#3E64FF',
  },
  description:{
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center',
    color: '#231F20',
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
  },
  button: {
    marginTop: 5,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  callsButton: {
    backgroundColor: "red",
  },
  appointmentButton: {
    backgroundColor: "#3E64FF",
  },
  otherButton: {
    backgroundColor: '#9fb1fc',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
});
