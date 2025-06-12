import React, { FC, memo } from 'react';
import { Text, View } from 'react-native';
import { formatCurrency } from '@utils/helpers/formatCurrency';
import { CoinItemProps } from '@screens/Home/types';
import { CoinItemDetails } from '../CoinItemDetails';

import styles from './styles';

const CoinItem: FC<CoinItemProps> = ({ item }) => (
  <View style={styles.container} testID={`${item.id}`}>
    <CoinItemDetails title={item.symbol} />
    <Text style={styles.text}>{formatCurrency(item.priceUsd)}</Text>
  </View>
);

export default CoinItem;
