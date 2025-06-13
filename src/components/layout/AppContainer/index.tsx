import React, { FC } from 'react';
import { AppContainerProps } from '@interfaces/props/layout';
import { View } from 'react-native';
import styles from './styles';

const AppContainer: FC<AppContainerProps> = ({
  children,
  style,
  ...rest
}): React.JSX.Element => (
  <View style={[styles.container, style]} {...rest}>
    {children}
  </View>
);

export default AppContainer;
