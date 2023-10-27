import { View, Text, Image } from 'react-native'
import React from 'react'


const detail = () => {
  return (
    <View>
         <View>
            <Image
        resizeMode="contain" style={{width: 400,  }} source={require('../assets/images/kebab.jpg')}/>
    </View>
    </View>
  )
}

export default detail