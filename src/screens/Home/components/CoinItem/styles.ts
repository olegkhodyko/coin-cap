import theme from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.layout.componentSpacing,
    gap: theme.spacing.gap.lg,
    height: 84,
  },
});
