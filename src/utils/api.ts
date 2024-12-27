import { API_KEY, BASE_URL } from '../config/api';

export async function fetchFromApi<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const queryParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    ...params
  });

  const response = await fetch(`${BASE_URL}${endpoint}?${queryParams}`);
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}