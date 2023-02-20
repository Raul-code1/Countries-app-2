import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { WeatherCountry } from '../interfaces/WeatherInterface';

const api_key = import.meta.env.VITE_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.openweathermap.org/data/2.5` }),
  endpoints: (builder) => ({
    getCountryWeather: builder.query<WeatherCountry, { lat: number; lng: number }>({
      query: ({ lat, lng }) => `/weather?lat=${lat}&lon=${lng}&appid=${api_key}`,
    }),
  }),
});

export const { useGetCountryWeatherQuery } = weatherApi;
