import React, { FC } from 'react';
import theme from '@theme';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenContainerProps } from '@interfaces/props/layout';

const ScreenContainer: FC<ScreenContainerProps> = ({
  testID,
  children,
  style,
  ...rest
}): React.JSX.Element => {
  const insets = useSafeAreaInsets();

  const safeAreaStyle: ViewStyle = {
    flex: 1,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingHorizontal: Math.max(insets.left, insets.right),
    backgroundColor: theme.colors.backgroundPrimary,
    overflow: 'hidden',
  };

  return (
    <View
      testID={testID}
      style={[safeAreaStyle, StyleSheet.flatten(style)]}
      {...rest}>
      {children}
    </View>
  );
};

export default ScreenContainer;
