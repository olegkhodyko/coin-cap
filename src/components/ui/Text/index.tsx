import React, { FC } from 'react';
import { TextComponentProps } from '@interfaces/props/text';
import { Colors, Typography } from '@theme';
import { Text as RNText } from 'react-native';

export const Text: FC<TextComponentProps> = ({
  children,
  variant = 'medium',
  color = 'textPrimary',
  style,
  ...props
}) => {
  const resolvedStyle = [
    Typography.TEXT_STYLES[variant],
    { color: Colors[color] },
    style,
  ];

  return (
    <RNText style={resolvedStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
