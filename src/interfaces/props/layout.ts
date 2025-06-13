import { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';

export interface AppContainerProps extends PropsWithChildren<ViewProps> {}

export interface ScreenContainerProps extends PropsWithChildren<ViewProps> {
  testID: string;
}
