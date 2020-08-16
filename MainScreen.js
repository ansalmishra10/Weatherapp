

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
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';







class MainScreen extends React.Component {
constructor(props) {
     super(props);
       this.state ={
         today:'',
         description:'',
         add:'',
         one:'',
         two:'',
         three:'',
         four:'',
         five:'',
         icon:'',
         lat:'',
         long:'',
         loading:'',
         
       }
   }





 showLoading() {
        this.setState({loading: true})
       }

        hideLoading() {
        this.setState({loading: false})
       }



componentDidMount () {
       // alert(JSON.stringify(GLOBAL.token))
       Geolocation.getCurrentPosition(info => {
        
        this.setState({ lat : info.coords.latitude })
        this.setState({ long : info.coords.longitude })
         // alert(JSON.stringify(this.state.lat));
        
                let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + this.state.lat + '&lon=' + this.state.long + '&units=metric&appid=3ceabc0deee43f37a09c093beb0a809a';
                fetch(url)
        .then(response => response.json())
        .then(data => {
           alert(JSON.stringify(data.list[0].weather[0].icon));
           this.setState({today:data.list[5].main.temp});
           this.setState({one:data.list[9].main.temp});
           this.setState({two:data.list[17].main.temp});
           this.setState({three:data.list[25].main.temp});
           this.setState({four:data.list[33].main.temp});
           this.setState({five:data.list[38].main.temp});
           this.setState({add:data.city.name});
            this.setState({icon:data.list[0].weather[0].icon});



        })
    
    
         });


     

      
   }

   


   render() {


    
    


    return (
         
         
      <ScrollView style={{flex:1,backgroundColor:'white'}}>
         <StatusBar
             backgroundColor = "black"
         

           />

           <View style = {{height:60,backgroundColor:'white',flexDirection:'row',width:'100%',alignItems:'center',elevation:2,borderColor:'#e3e3e3',borderWidth:1}}>
                        <View>
                        <TouchableOpacity onPress= {()=>this.props.navigation.goBack()}>
                            <Image
                                source={require('./left.png')}
                                style={{width: 25, height: 28,marginLeft:20,resizeMode:'contain'}}


                            />
                        </TouchableOpacity>
                        </View>


                        <Text style = {{color:'black',fontFamily:'Poppins-SemiBold',fontSize: 22,marginLeft:55}}>
                          Weather Forcast

              
          


                       </Text>


                    </View>


                    <View style={{marginTop:16,marginLeft:'4%',backgroundColor:'#D7F0F7',height:Dimensions.get('window').height/2-70,borderRadius:10,width:'92%',elevation:2}}>


                     <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center',marginTop:50}}>
                      <Image style={{height:120,width:120,resizeMode:'contain'}} source={{uri: 'http://openweathermap.org/img/w/'+this.state.icon+".png"}} />
                      <Text style={{fontSize:42,fontFamily:'Poppins-SemiBold',color:'black',marginLeft:10}}>{this.state.today}°C</Text>
                     </View>

                     <Text style={{fontSize:20,fontFamily:'Poppins-SemiBold',color:'black',marginTop:10,alignSelf:'center'}}>{this.state.add}</Text>





                    </View>

                    <View style={{flexDirection:'row',marginTop:16,height:62,borderRadius:6,backgroundColor:'white',width:'100%',elevation:2,width:'92%',marginLeft:'4%',alignItems:'center',justifyContent:'space-between'}}>
                       <Text style={{fontSize:20,fontFamily:'Poppins-SemiBold',color:'black',marginTop:10,alignSelf:'center',marginLeft:18}}>{moment().add(1, 'days').format('dddd')}</Text>
                       <Text style={{fontSize:20,fontFamily:'Poppins-SemiBold',color:'black',marginTop:10,alignSelf:'center',marginRight:18}}>{this.state.one}°C</Text>
                     </View>

                     <View style={{flexDirection:'row',marginTop:16,height:62,borderRadius:6,backgroundColor:'white',width:'100%',elevation:2,width:'92%',marginLeft:'4%',alignItems:'center',justifyContent:'space-between'}}>
                       <Text style={{fontSize:20,fontFamily:'Poppins-SemiBold',color:'black',marginTop:10,alignSelf:'center',marginLeft:18}}>{moment().add(2, 'days').format('dddd')}</Text>
                       <Text style={{fontSize:20,fontFamily:'Poppins-SemiBold',color:'black',marginTop:10,alignSelf:'center',marginRight:18}}>{this.state.two}°C</Text>
                     </View>

                     <View style={{flexDirection:'row',marginTop:16,height:62,borderRadius:6,backgroundColor:'white',width:'100%',elevation:2,width:'92%',marginLeft:'4%',alignItems:'center',justifyContent:'space-between'}}>
                       <Text style={{fontSize:20,fontFamily:'Poppins-SemiBold',color:'black',marginTop:10,alignSelf:'center',marginLeft:18}}>{moment().add(3, 'days').format('dddd')}</Text>
                       <Text style={{fontSize:20,fontFamily:'Poppins-SemiBold',color:'black',marginTop:10,alignSelf:'center',marginRight:18}}>{this.state.three}°C</Text>
                     </View>

                     <View style={{flexDirection:'row',marginTop:16,height:62,borderRadius:6,backgroundColor:'white',width:'100%',elevation:2,width:'92%',marginLeft:'4%',alignItems:'center',justifyContent:'space-between'}}>
                       <Text style={{fontSize:20,fontFamily:'Poppins-SemiBold',color:'black',marginTop:10,alignSelf:'center',marginLeft:18}}>{moment().add(4, 'days').format('dddd')}</Text>
                       <Text style={{fontSize:20,fontFamily:'Poppins-SemiBold',color:'black',marginTop:10,alignSelf:'center',marginRight:18}}>{this.state.four}°C</Text>
                     </View>

                     <View style={{flexDirection:'row',marginTop:16,height:62,borderRadius:6,backgroundColor:'white',width:'100%',elevation:2,width:'92%',marginLeft:'4%',marginBottom:10,alignItems:'center',justifyContent:'space-between'}}>
                       <Text style={{fontSize:20,fontFamily:'Poppins-SemiBold',color:'black',marginTop:10,alignSelf:'center',marginLeft:18}}>{moment().add(5, 'days').format('dddd')}</Text>
                       <Text style={{fontSize:20,fontFamily:'Poppins-SemiBold',color:'black',marginTop:10,alignSelf:'center',marginRight:18}}>{this.state.five}°C</Text>
                     </View>


              
              
               
             
      
      </ScrollView>


        
        


    );
  }
}

export default MainScreen;