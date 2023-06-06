/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import { PaperProvider } from 'react-native-paper';

   


function App(): JSX.Element {
  return(
    <PaperProvider>
    <NavigationContainer>
    <StatusBar backgroundColor="#4C2C72" barStyle="light-content"/>
    <Routes/>
   </NavigationContainer>
   </PaperProvider>
  )  
}



export default App;
