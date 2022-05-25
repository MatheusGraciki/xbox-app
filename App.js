
import 'react-native-gesture-handler' 
import  React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,Button,Image } from 'react-native';

import TelaInicial from './components/TelaInicial';
import TelaJogos from './components/TelaJogos';
import TelaConsole from './components/TelaConsoles';
import TelaNuvem from './components/TelaNuvem'

const Stack = createStackNavigator();

export default function App(){
  return(
  
    <NavigationContainer >
      
      
      
      <Stack.Navigator screenOptions={{headerStyle: {
          height: 65, 
          backgroundColor: 'white',  }, }}> 

          <Stack.Screen name="Tela inicial" component = {TelaInicial}/>
          <Stack.Screen name="Consoles" component = {TelaConsole}/>
          <Stack.Screen name="Jogos" component = {TelaJogos}/>
          <Stack.Screen name="Nuvem" component = {TelaNuvem}/>
      </Stack.Navigator>

    </NavigationContainer>
  )}