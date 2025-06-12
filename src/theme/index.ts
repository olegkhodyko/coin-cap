import colors from './colors';
import typography from './typography';
import spacing from './spacing';
import border from './border';

const theme = {
  colors,
  typography,
  spacing,
  border,
} as const;

export type Theme = typeof theme;
export default theme;
