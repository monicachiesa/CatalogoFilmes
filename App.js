import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import Routes from './src/routes';
import { StatusBar } from 'react-native'

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} /> 
      <Routes />
    </NavigationContainer>
  );
}

export default App;  //exporta para que outros componentes possam usar