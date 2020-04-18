import { Root } from '../types/data';

export const API_BASE_URL: string =
  'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100';

export const PAGE_SIZE = 20;

export const mockResponse: Root = {
  total_count: 0,
  incomplete_results: false,
  items: [],
};
