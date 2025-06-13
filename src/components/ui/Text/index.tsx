import React, { FC } from 'react';
import theme from '@theme';
import { TextComponentProps } from '@interfaces/props/text';
import { Text } from 'react-native';

export const AppText: FC<TextComponentProps> = ({
  children,
  variant = 'bodyBold',
  color = 'textPrimary',
  style,
  ...rest
}) => {
  const resolvedStyle = [
    theme.typography.TextStyles[variant],
    {
      color: theme.colors[color],
    },
    style,
  ];

  return (
    <Text style={resolvedStyle} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
