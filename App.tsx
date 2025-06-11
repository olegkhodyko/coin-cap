import React from 'react';
import RootStack from '@navigation/index';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme, View } from 'react-native';
import { Layout } from '@components';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Layout.AppContainer isDarkMode={isDarkMode}>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootStack />
      </NavigationContainer>
    </Layout.AppContainer>
  );
}

export default App;
