import React from 'react'
import {StyleSheet, View, Text, TextInput, Button, ActivityIndicator, AsyncStorage} from 'react-native'
import {Image} from 'react-native'

class Home extends React.Component{
	render(){
    return(
      <View>
        <Text>Text</Text>
        <Image source={require('../assets/logo-smartbodyb.png')}/>
      </View>
    )
  }
}

export default Home