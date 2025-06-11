import React, { FC } from 'react';
import { Layout } from '@components';
import { HomeScreenProps } from '@interfaces/props/screens';
import { Text } from 'react-native';

const HomeScreen: FC<HomeScreenProps> = ({ route }) => {
  return (
    <Layout.ScreenContainer testID={route.name}>
      
    </Layout.ScreenContainer>
  );
};

export default HomeScreen;
