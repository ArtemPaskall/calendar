import { request } from './api';

export const BASE_URL
  = 'https://api.tvmaze.com/schedule';

export const country = 'US';

export const getMoviesList = async (date: string) => {
  const moviesFromServer = await request(`${BASE_URL}?country=${country}&date=${date}`);

  return moviesFromServer;
};
