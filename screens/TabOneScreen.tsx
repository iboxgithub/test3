


import { StyleSheet, 
  // View, 
  TextInput, ScrollView, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { useEffect, useState } from 'react';
import { 
  magic, 
  web3 
} from '../magic';
import { abi } from  '../contract/abi.js';

// import TrackPlayer from 'react-native-track-player'
// import TrackListScreen from './TrackListScreen';
// import {musiclibrary} from '../assets/music/data.js';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  
  // const setup = async () => {
  //   await TrackPlayer.setupPlayer({});
  //   await TrackPlayer.add(musiclibrary);
  // };

  // useEffect(() => {
  //   setup();
  // }, []);

  // Trigger magic link for user to login / generate wallet
  const login = async () => {
    try {
      console.log('HELLO LOGIN1', email, new Date())
      await magic.auth.loginWithMagicLink({ email }) //.then(temp => console.log(temp));
      console.log('we dont reach this part...')
      magic.user.getMetadata().then(setUser);
    } catch(err) {
      alert(err);
    }
  };

  // Logout of Magic session
  const logout = async () => {
    await magic.user.logout();
    setUser('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
        <Text style={styles.header}>test player</Text>
        {/* <TrackListScreen /> */}
      <Text style={styles.title}>Test Magic.link</Text>
      {
      !user ? 
        <View>
          <Text style={styles.header}>Login or Signup</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder='Enter your email'
          />
          <View>
            <Pressable style={styles.button} onPress={() => login()}><Text style={styles.buttonText}>Login</Text></Pressable>
          </View>
        </View> :
        <View style={styles.view}>
          <Text style={styles.text}>{user.email}</Text>
          <Pressable style={styles.button} onPress={() => logout()}><Text style={styles.buttonText}>Logout</Text></Pressable>
        </View>
      }
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  view: {
    backgroundColor: "#eee",
    padding: 20,
    marginTop: 15,
    borderRadius: 8,
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  info: {
    fontFamily: 'Courier',
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    textAlign: "center"
  },
  input: {
    height: 38,
    margin: 5,
    borderWidth: 1,
    padding: 6,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: 'black',
    marginTop: 12,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text: {
    textAlign: "center",
    marginTop: 10
  }
});
