import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: 84,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  coinInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  icon: {
    width: 56,
    aspectRatio: 1 / 1,
    borderRadius: 18,
    opacity: 0.1,
    backgroundColor: '#F6543E',
  },
  text: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 24,
  },
});
