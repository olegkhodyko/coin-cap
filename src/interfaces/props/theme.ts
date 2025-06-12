import { TextStyle } from 'react-native';

export type TextStyleKeys = 'body' | 'bodyBold' | 'caption';
export type FontSizeKeys = 'sm' | 'md' | 'lg';
export type FontFamilyKeys = 'regular' | 'semibold';

export type FontSizeProps = Record<FontSizeKeys, number>;
export type FontFamilyProps = Record<FontFamilyKeys, string>;
export type TextStyleProps = Record<TextStyleKeys, TextStyle>;

export type BorderRadiusKeys = 'none' | 'xl' | 'full';
export type BorderWidthKeys = 'none' | 'thin';

export type BorderRadiusProps = Record<BorderRadiusKeys, number>;
export type BorderWidthProps = Record<BorderWidthKeys, number>;

export type DefaultSpacingKeys = 'xs' | 'sm' | 'md' | 'lg';
export type LayoutSpacingKeys =
  | 'screenPadding'
  | 'componentSpacing'
  | 'listItemSpacing'
  | 'sectionSpacing';

export type DefaultSpacingProps = Record<DefaultSpacingKeys, number>;
export type LayoutSpacingProps = Record<LayoutSpacingKeys, number>;

export type GapSpacingKeys = 'md' | 'lg' | 'xl';
export type GapSpacingProps = Record<GapSpacingKeys, number>;
