import {RootStackParamList} from '@interfaces/navigation';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const options: Record<keyof RootStackParamList, NativeStackNavigationOptions> =
  {
    Splash: {
      title: 'Splash screen',
      headerShown: false,
    },
    Home: {
      title: 'Home screen',
      headerShown: false,
    },
  } as const;
export default {
  options,
};
