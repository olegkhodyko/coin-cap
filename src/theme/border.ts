import { BorderRadiusProps, BorderWidthProps } from '@interfaces/props/theme';

const borderRadius: BorderRadiusProps = {
  none: 0,
  xl: 18,
  full: 9999,
} as const;

const borderWidth: BorderWidthProps = {
  none: 0,
  thin: 1,
} as const;

export default {
  radius: borderRadius,
  width: borderWidth,
} as const;
