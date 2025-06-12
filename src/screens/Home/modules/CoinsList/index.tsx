import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { CoinItem, FetchError, FooterLoading } from '@screens/Home/components';
import { useCoins } from '@screens/Home/hooks';
import { CoinsListProps } from '@screens/Home/types';

const CoinsList: FC<CoinsListProps> = ({ testID }) => {
  const { coins, loading, loadingMore, error, loadMore, refresh } = useCoins();

  if (error) {
    return <FetchError message={error.message} />;
  }

  return (
    <FlatList
      testID={testID}
      data={coins}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <CoinItem item={item} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.3}
      onRefresh={refresh}
      refreshing={loading}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={loadingMore ? <FooterLoading /> : null}
    />
  );
};

export default CoinsList;
