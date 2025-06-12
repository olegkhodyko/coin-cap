import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  icon: {
    width: 56,
    aspectRatio: 1,
    borderRadius: 18,
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
