export interface AssetQueryParams {
  search?: string;
  ids?: string;
  limit?: number;
  offset?: number;
}

export interface CryptoResponse {
  timestamp: number;
  data: CryptoAsset[];
}

export interface CryptoAsset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
  tokens: Record<string, string[]>;
}
