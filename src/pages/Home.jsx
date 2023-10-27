import { View, Text, TouchableOpacity, Image, ScrollView, onPress, Alert,} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <ScrollView>  
     {/* style navbar */}
     <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        backgroundColor: 'red',
        marginHorizontal: 16,
        marginTop: 16,
        padding: 16,
        borderRadius: 40,
      }}>
        
      <Image
        resizeMode="contain"
        style={{height: 40, width: 150}}
        source={require('../assets/images/aku-suka-mhs.png')}
      />
      <View>
      <Image
        resizeMode="contain"
        style={{height: 100,width:170, marginLeft: 115 }}
        source={require('../assets/images/mnu.png')}/>
        {/* text */}
    </View>
     </View>
     
      <View>
        <Text style={{marginTop: 20, marginLeft: 30, color: 'gray'}}> Selamat Datang di</Text>
        <Text style={{fontSize: 30, marginTop: 10, marginLeft: 30, fontWeight: 'bold', color: 'black'}}>Kantin Multistudi</Text>
      </View>
        
          <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=> navigation.navigate('Detail')} >
          <View style={{
            padding: 12,
            flex:1,
            marginTop:20
          }}>
          <View style={{
            width: 180,
            height: 200, 
            borderRadius: 14
          }}>
            <View>
            <Image
          resizeMode="contain"
          style={{height: 180,width:180, borderRadius:18, alignItems :'center', marginBottom: 10, marginLeft: 5,  marginTop: 50 }}
          source={require('../assets/images/burgers.jpg')}/>
            </View>
            {/* text */}
          </View>
          <Text style={{marginTop: 50, marginLeft: 15, }}>Burger</Text>
          <Text style={{marginTop: 5, marginLeft: 15, color : 'rgb(255,0,0)'}}>Rp.30.000</Text>
          </View>
          </TouchableOpacity>
          <View style={{
    
            padding: 18,
            flex:1,
            marginTop:14

          }}>
            <View>
            <Image
        resizeMode="contain"
        style={{height: 180,width:170, borderRadius:18, alignItems :'center',marginLeft:10, marginTop: 50 }}
        source={require('../assets/images/jeruk.jpg')}
      />
          <View style={{
            backgroundColor: 'red',
            borderRadius: 14
          }}>
          </View>
          <Text style={{marginTop:10, marginLeft: 15}}>Jus Jeruk</Text>
          <Text style={{marginLeft:15, marginTop: 5, color: 'rgb(255,0,0)'}}>Rp.5.000</Text>
          </View>
          </View>
          </View>
          <View style={{flexDirection: 'row'}}>
          <View style={{
            padding: 12,
            flex:1,
          }}>
          <View style={{
            height: 200, 
         
            borderRadius: 14
          }}>
            <View> 
           <Image
            resizeMode="contain"
            style={{height: 180,  width:190, borderRadius:18, alignItems :'center',  marginTop: 10 }}
            source={require('../assets/images/susu-buatan.jpg')}/>
            </View>
          </View>
          <Text style={{marginLeft: 15}}>Susu Mem-cho</Text>
          <Text style={{marginLeft: 15, marginTop: 5  , color: 'rgb(255,0,0)'}}>Rp.100.000,00</Text>
          </View>
          <View style={{

            padding: 12,
            flex:1,
          }}>
          <View style={{
         
          }}>
            <View>
            <Image
        resizeMode="contain"
        style={{height: 180,width:170, borderRadius:18, alignItems :'center',marginLeft:10, marginTop: 10 }}
        source={require('../assets/images/pizza.jpg')}
      />
            </View>
          </View>
          <Text style={{marginLeft: 15}}>Pizza</Text>
          <Text style={{marginLeft: 15, marginTop: 5  , color: 'rgb(255,0,0)'}}>Rp.100.000,00</Text>
        

          </View>
          </View>
          <View>
    </View>
   </ScrollView>
    
  
      
  );
};

export default Home;