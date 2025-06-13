import { useState, useCallback, useEffect } from 'react';
import { getAssets } from '@api/assets';
import { ModifiedCryptoCoin } from '@interfaces/states/api';
import { UseCoins } from '@screens/Home/types';
import { decorateWithColor } from '@utils/helpers/decorateAssets';
import { Offset, PageSize } from '@constants/pagination';

function useCoins(): UseCoins {
  const [coins, setCoins] = useState<ModifiedCryptoCoin[]>([]);
  const [offset, setOffset] = useState(Offset);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchCoins = async () => {
    try {
      setLoading(true);
      const res = await getAssets({ limit: PageSize, offset: Offset });

      setCoins(decorateWithColor(res.data));
      setHasMore(res.data.length === PageSize);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) {
      return;
    }

    try {
      setLoadingMore(true);
      const nextOffset = offset + PageSize;
      const res = await getAssets({ limit: PageSize, offset: nextOffset });
      setCoins(prev => [...prev, ...decorateWithColor(res.data)]);
      setOffset(nextOffset);
      if (res.data.length < PageSize) {
        setHasMore(false);
      }
    } catch (err: any) {
      setError(err);
    } finally {
      setLoadingMore(false);
    }
  }, [offset, loadingMore, hasMore]);

  useEffect(() => {
    fetchCoins();
  }, []);

  return {
    coins,
    loading,
    loadingMore,
    error,
    hasMore,
    loadMore,
    refresh: fetchCoins,
  };
}

export default useCoins;
