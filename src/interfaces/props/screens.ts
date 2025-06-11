import { TypedNavigation, TypedRoute } from '@interfaces/navigation';

export interface HomeScreenProps {
  navigation: TypedNavigation<'Home'>;
  route: TypedRoute<'Home'>;
}
export interface SplashScreenProps {
  navigation: TypedNavigation<'Splash'>;
  route: TypedRoute<'Splash'>;
}
