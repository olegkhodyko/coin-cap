import { useState, useCallback, useEffect } from 'react';
import { getAssets } from '@api/assets';
import { CryptoAsset } from '@interfaces/states/api';
import { UseCoins } from '@screens/Home/types';

const PAGE_SIZE = 15;

function useCoins(): UseCoins {
  const [coins, setCoins] = useState<CryptoAsset[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchCoins = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAssets({ limit: PAGE_SIZE, offset: 0 });
      setCoins(res.data);
      setHasMore(res.data.length === PAGE_SIZE);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);
      const nextOffset = offset + PAGE_SIZE;
      const res = await getAssets({ limit: PAGE_SIZE, offset: nextOffset });
      setCoins(prev => [...prev, ...res.data]);
      setOffset(nextOffset);
      if (res.data.length < PAGE_SIZE) setHasMore(false);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoadingMore(false);
    }
  }, [offset, loadingMore, hasMore]);

  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

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
