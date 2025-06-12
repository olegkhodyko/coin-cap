import { RootNavigationScreenOptions } from '@interfaces/navigation';

const options: RootNavigationScreenOptions = {
  Home: {
    title: 'Home screen',
    headerShown: false,
  },
} as const;

export default {
  options,
};
