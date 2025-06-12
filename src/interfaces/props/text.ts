import theme from '@theme';
import { PropsWithChildren } from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';

export interface TextComponentProps
  extends Omit<PropsWithChildren<TextProps>, 'style'> {
  variant?: TextStyleVariant;
  color?: ColorType;
  style?: StyleProp<TextStyle>;
}

export type TextStyleVariant = keyof typeof theme.typography.TextStyles;
export type ColorType = keyof typeof theme.colors;
