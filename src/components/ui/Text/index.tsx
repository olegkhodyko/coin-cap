import React, { FC } from 'react';
import theme from '@theme';
import { TextComponentProps } from '@interfaces/props/text';
import { Text as RNText } from 'react-native';

export const Text: FC<TextComponentProps> = ({
  children,
  variant = 'bodyBold',
  color = 'textPrimary',
  style,
  ...props
}) => {
  const resolvedStyle = [
    theme.typography.TextStyles[variant],
    {
      color: theme.colors[color],
    },
    style,
  ];

  return (
    <RNText style={resolvedStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
