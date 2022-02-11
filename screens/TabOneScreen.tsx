


import { StyleSheet, 
  // View, 
  TextInput, ScrollView, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { useEffect, useState } from 'react';

import TrackPlayer from 'react-native-track-player'
import TrackListScreen from './TrackListScreen';
import {musiclibrary} from '../assets/music/data.js'

// import {AppRegistry} from 'react-native';
// import App from '../App';
// import {expo.name as appName} from '../app.json';

// AppRegistry.registerComponent('test3', () => App);
// TrackPlayer.registerPlaybackService(() => require('./service'));

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  
  const setup = async () => {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.add(musiclibrary);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
        <Text style={styles.header}>test player</Text>
        <TrackListScreen />
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
