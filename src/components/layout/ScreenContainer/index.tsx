import React, { FC, PropsWithChildren } from 'react';
import { Colors } from '@theme';
import { View, ViewProps, ViewStyle, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenContainerProps extends PropsWithChildren<ViewProps> {
  testID: string;
}

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
    backgroundColor: Colors.backgroundPrimary,
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
