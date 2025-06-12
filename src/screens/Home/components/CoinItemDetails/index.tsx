import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { CoinItemDetailsProps } from '@screens/Home/types';
import styles from './styles';

export const CoinItemDetails: FC<CoinItemDetailsProps> = ({ title }) => (
  <View style={styles.container}>
    <View style={styles.icon} />
    <View style={styles.nameContainer}>
      <Text style={styles.name} numberOfLines={2}>
        {title.toUpperCase()}
      </Text>
    </View>
  </View>
);
