/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Linking,
  FlatList,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import NavigationContainer from './Navigator.js';








const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
 });

 type Props = {};
 export default class App extends Component<Props> {
  constructor(props) {
      super(props);
      this.state = {
      //   senderId: appConfig.senderID,
      //   gotNotif:0
       };

      // this.notif = new NotifService(this.onRegister.bind(this), this.onNotif.bind(this));
    //  this.notif.localNotif()
    }

  render() {
   //StatusBar.setBarStyle('light-content', true);
    return (
<>
      <StatusBar backgroundColor="black" barStyle="light-content" />
        <NavigationContainer/>
        </>
    );
    }
 }