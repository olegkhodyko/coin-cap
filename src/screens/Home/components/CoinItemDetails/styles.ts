import theme from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.gap.lg,
    flex: 1,
  },
  icon: {
    width: 56,
    aspectRatio: 1,
    borderRadius: theme.border.radius.xl,
    opacity: 0.1,
    backgroundColor: '#F6543E',
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    flexShrink: 1,
    flexWrap: 'wrap',
  },
});
