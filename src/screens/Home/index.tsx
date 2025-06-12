import React, { FC } from 'react';
import { Layout } from '@components';
import { CoinsList } from '@modules';
import { HomeScreenProps } from '@interfaces/props/screens';
import styles from './styles';

const HomeScreen: FC<HomeScreenProps> = ({ route }) => (
  <Layout.ScreenContainer testID={route.name} style={styles.container}>
    <CoinsList testID={`${route.name}-list`} />
  </Layout.ScreenContainer>
);

export default HomeScreen;
