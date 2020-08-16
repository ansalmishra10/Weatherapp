

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




  } from 'react-native';

import React, {Component} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';






class SplashScreen extends React.Component {






componentDidMount () {
          
          // alert(JSON.stringify(GLOBAL.userID))
     this.timeoutCheck = setTimeout(() => {
          // this.getData()
           this.props.navigation.navigate('MainScreen')

  },1000);
  


   }



   render() {


    
    


    return (
         
         
      <View style={{flex:1,backgroundColor:'white'}}>
         <StatusBar
             backgroundColor = "black"
         

           />


              
              <ImageBackground
                   style={{height:'100%',width:'100%',resizeMode:'contain',justifyContent:'center'}}
                   source={require('./splash2.jpg')}>


                   
                 
                 
                 
              </ImageBackground>
               
             
      
      </View>


        
        


    );
  }
}

export default SplashScreen;