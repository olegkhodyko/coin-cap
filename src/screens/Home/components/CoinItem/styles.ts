import theme from '@theme';
import { LIST_ITEM_HEIGHT } from '@constants/layout';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.layout.componentSpacing,
    gap: theme.spacing.gap.lg,
    height: LIST_ITEM_HEIGHT,
  },
});
