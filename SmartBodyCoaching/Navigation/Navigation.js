import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import {Image} from 'react-native'
import Home from '../Components/Home'
//import Inscription from '../Components/Inscription'
//import ChoixMedecin from '../Components/ChoixMedecin'
//import RaisonConsultation from '../Components/RaisonConsultation'

const SearchStackNavigator = createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      //title: 'Accueil',
      headertitle: (
        <Image source={require('../assets/logo-smartbodyb.jpg')}/>
      ),
    }
  },
})

export default createAppContainer(SearchStackNavigator)
