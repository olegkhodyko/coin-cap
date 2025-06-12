import React, { FC } from 'react';
import { AppContainerProps } from '@interfaces/props/layout';
import { View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const AppContainer: FC<AppContainerProps> = ({ isDarkMode, children }) => {
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return <View style={backgroundStyle}>{children}</View>;
};

export default AppContainer;
