import { CryptoAsset } from '@interfaces/states/api';

export interface CoinsListProps {
  testID: string;
}

export interface CoinItemProps {
  item: CryptoAsset;
}

export interface UseCoins {
  coins: CryptoAsset[];
  loading: boolean;
  loadingMore: boolean;
  error: Error | null;
  hasMore: boolean;
  loadMore: () => Promise<void>;
  refresh: () => Promise<void>;
}

export interface CoinItemDetailsProps {
  title: CryptoAsset['symbol'];
}
