import React, { FC } from 'react';
import { View } from 'react-native';
import { Ui } from '@components';
import { formatCurrency } from '@utils/helpers/formatCurrency';
import { CoinItemProps } from '@screens/Home/types';
import { CoinItemDetails } from '../CoinItemDetails';
import styles from './styles';

const CoinItem: FC<CoinItemProps> = ({ item }) => (
  <View style={styles.container} testID={`${item.id}`}>
    <CoinItemDetails title={item.symbol} backgroundColor={item.backgroundColor} />
    <Ui.Text>{formatCurrency(item.priceUsd)}</Ui.Text>
  </View>
);

export default CoinItem;
