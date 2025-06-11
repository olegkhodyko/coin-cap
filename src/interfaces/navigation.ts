import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type TypedRoute<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
export type TypedNavigation<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type AppNavigationProps = NativeStackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
};
