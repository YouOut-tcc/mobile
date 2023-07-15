import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import AuthNavigatior from './src/navigations/AuthNavigator.js';
import Routes from './src/routes/index.js';

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#8200A8" barStyle="light-content" />
        {/* <AuthNavigatior /> */}
        <Routes/>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
