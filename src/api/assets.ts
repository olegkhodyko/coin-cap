import { AssetQueryParams, CryptoResponse } from '@interfaces/states/api';
import { apiClient } from './client';
import { ENDPOINTS } from './endpoints';

export const getAssets = async (
  params?: AssetQueryParams,
): Promise<CryptoResponse> => {
  const response = await apiClient.get<CryptoResponse>(ENDPOINTS.ASSETS, {
    params,
  });

  return response.data;
};
