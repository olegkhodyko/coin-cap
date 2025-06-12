import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

const FooterLoading = () => (
  <View style={styles.container}>
    <ActivityIndicator />
  </View>
);

export default FooterLoading;
