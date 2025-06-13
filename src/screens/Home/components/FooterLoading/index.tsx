import React, { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

const FooterLoading: FC = () => (
  <View style={styles.container}>
    <ActivityIndicator />
  </View>
);

export default FooterLoading;
