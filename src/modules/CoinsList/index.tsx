import React, { FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';

interface Props {
  testID: string;
}

const data = Array(20)
  .fill(0)
  .map((_, i) => i);

const CoinsList: FC<Props> = ({ testID }) => (
  <FlatList
    testID={testID}
    data={Array(20)
      .fill(0)
      .map((_, i) => i)}
    keyExtractor={i => i.toString()}
    renderItem={() => (
      <View style={styles.itemContainer}>
        <View style={styles.coinInfo}>
          <View style={styles.icon}></View>
          <Text>BTC</Text>
        </View>
        <Text>$29,850.15</Text>
      </View>
    )}
  />
);

export default CoinsList;
