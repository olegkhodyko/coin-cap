import React from 'react';
import Screens from '@screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@interfaces/navigation';
import { NavigationConfig } from '@utils';

export default function RootStack() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { options } = NavigationConfig;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Screens.Home}
        options={options.Home}
      />
    </Stack.Navigator>
  );
}
