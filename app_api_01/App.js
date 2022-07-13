import { NavigationContainer } from '@react-navigation/native';
import Index from './src/pages/Index';
import Cep from './src/pages/Cep';
import Temperatura from './src/pages/Temperatura';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Cep'>
        <Tab.Screen name='Index' component={Index} />
        <Tab.Screen name='Cep' component={Cep} />
        <Tab.Screen name='Temperatura' component={Temperatura} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}