import React from 'react'
import {StyleSheet, View, Text, TextInput, Button, ActivityIndicator, AsyncStorage} from 'react-native'


class Home extends React.Component{
	render(){
    return(
    	<View style={styles.container}>
      		<Button
      			style={styles.buttonConnexionGoogle} 
      			title="Se connecter avec Google"/>
      	</View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  buttonConnexionGoogle:{
  	flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home