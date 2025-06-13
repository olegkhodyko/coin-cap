import { ModifiedCryptoCoin } from '@interfaces/states/api';

export interface CoinsListProps {
  testID: string;
}

export interface CoinItemProps {
  item: ModifiedCryptoCoin;
}

export interface UseCoins {
  coins: ModifiedCryptoCoin[];
  loading: boolean;
  loadingMore: boolean;
  error: Error | null;
  hasMore: boolean;
  loadMore: () => Promise<void>;
  refresh: () => Promise<void>;
}

export interface CoinItemDetailsProps {
  title: ModifiedCryptoCoin['symbol'];
  backgroundColor: ModifiedCryptoCoin['backgroundColor'];
}

export interface FetchErrorProps {
  message: string;
}
