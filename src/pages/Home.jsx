import { View, Text, TouchableOpacity, Image, ScrollView, onPress, Alert,} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View>

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
        source={require('../assets/images/amirul.png')}
      />
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
          backgroundColor: 'yellow',}}>
      </View>
          
    </View>
          <View style={{flexDirection: 'row'}}>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
            marginTop:16
          }}>
          <View style={{
            height: 200, 
            backgroundColor: 'red',
            borderRadius: 14
          }}>
          </View>
          <Text>Susu Mem-cho</Text>
          <Text>Rp.100.000,00</Text>
          </View>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
            marginTop:16,
          }}>
          <View style={{
            height: 200, 
            backgroundColor: 'red',
            borderRadius: 14
          }}>
          </View>
          <Text>Darah Mem-cho</Text>
          <Text>Rp.1090909090</Text>
          

          </View>
          </View>
          <View style={{flexDirection: 'row'}}>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
          }}>
          <View style={{
            height: 200, 
            backgroundColor: 'red',
            borderRadius: 14
          }}>
          </View>
          <Text>Susu Mem-cho</Text>
          <Text>Rp.100.000,00</Text>
          </View>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
          }}>
          <View style={{
            height: 200, 
            backgroundColor: 'red',
            borderRadius: 14
          }}>
          </View>
          <Text>Darah Mem-cho</Text>
          <Text>Rp.1090909090</Text>
          

          </View>
          </View>
          <View>
    </View>
   </View>
    
  
      
  );
};

export default Home;