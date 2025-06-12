import {
  DefaultSpacingProps,
  GapSpacingProps,
  LayoutSpacingProps,
} from '@interfaces/props/theme';

const defaultSpacing: DefaultSpacingProps = {
  xs: 4,
  sm: 12,
  md: 16,
  lg: 22,
} as const;

const gapSpacing: GapSpacingProps = {
  md: 16,
  lg: 18,
  xl: 20,
} as const;

const layoutSpacing: LayoutSpacingProps = {
  screenPadding: 20,
  sectionSpacing: 20,
  componentSpacing: 16,
  listItemSpacing: 8,
} as const;

export default {
  default: defaultSpacing,
  layout: layoutSpacing,
  gap: gapSpacing,
} as const;
