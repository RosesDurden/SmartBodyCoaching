import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import {Image, StyleSheet} from 'react-native'
import Home from '../Components/Home'
import React from 'react';
//import Inscription from '../Components/Inscription'
//import ChoixMedecin from '../Components/ChoixMedecin'
//import RaisonConsultation from '../Components/RaisonConsultation'

const SearchStackNavigator = createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      title: 'Smart Body B. - Accueil',
    }
  },
})

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default createAppContainer(SearchStackNavigator)
