import axios from 'axios';
import { BASE_URL, API_KEY } from '@env';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(API_KEY && { Authorization: `Bearer ${API_KEY}` }),
  },
});
