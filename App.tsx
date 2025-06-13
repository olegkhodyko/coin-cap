import React from 'react';
import RootStack from './src/navigation';
import { Layout } from './src/components';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Layout.AppContainer>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootStack />
      </NavigationContainer>
    </Layout.AppContainer>
  );
}

export default App;
