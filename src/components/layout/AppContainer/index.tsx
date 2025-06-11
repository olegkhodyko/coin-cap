import React, { PropsWithChildren } from 'react';
import { View, ViewProps } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface Props extends PropsWithChildren<ViewProps> {
  isDarkMode: boolean;
}

const AppContainer = ({ isDarkMode, children }: Props) => {
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return <View style={backgroundStyle}>{children}</View>;
};

export default AppContainer;
