import React, { FC, useCallback } from 'react';
import { FlatList } from 'react-native';
import { CoinItem, FetchError, FooterLoading } from '@screens/Home/components';
import { useCoins } from '@screens/Home/hooks';
import { CoinsListProps } from '@screens/Home/types';
import { ModifiedCryptoCoin } from '@interfaces/states/api';
import { LIST_ITEM_HEIGHT, maxToRenderPerBatch } from '@constants/layout';

const CoinsList: FC<CoinsListProps> = ({ testID }) => {
  const { coins, loading, loadingMore, error, loadMore, refresh } = useCoins();

  const renderItem = useCallback(
    ({ item }: { item: ModifiedCryptoCoin }) => <CoinItem item={item} />,
    [],
  );

  if (error) {
    return <FetchError message={error.message} />;
  }

  return (
    <FlatList
      testID={testID}
      data={coins}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      onEndReached={loadMore}
      onEndReachedThreshold={0.3}
      onRefresh={refresh}
      refreshing={loading}
      showsVerticalScrollIndicator={false}
      getItemLayout={(_, index) => ({
        length: LIST_ITEM_HEIGHT,
        offset: LIST_ITEM_HEIGHT * index,
        index,
      })}
      initialNumToRender={maxToRenderPerBatch}
      maxToRenderPerBatch={maxToRenderPerBatch}
      removeClippedSubviews={true}
      ListFooterComponent={loadingMore ? <FooterLoading /> : null}
    />
  );
};

export default CoinsList;
