import React, { FC } from 'react';
import { View } from 'react-native';
import { Ui } from '@components';
import { CoinItemDetailsProps } from '@screens/Home/types';
import styles from './styles';

export const CoinItemDetails: FC<CoinItemDetailsProps> = ({
  title,
  backgroundColor,
}) => (
  <View style={styles.container}>
    <View style={[styles.icon, { backgroundColor }]} />
    <View style={styles.nameContainer}>
      <Ui.Text style={styles.name} numberOfLines={2}>
        {title.toUpperCase()}
      </Ui.Text>
    </View>
  </View>
);
