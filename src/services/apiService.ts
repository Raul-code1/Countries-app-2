import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Country } from '../interfaces/CountryInterface';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], string>({
      query: (filterName) => (filterName === 'all' ? `/${filterName}` : `/region/${filterName}`),
    }),
    getSingleCountry: builder.query<Country[], string>({
      query: (countryCode) => `/alpha/${countryCode}`,
    }),
  }),
});

export const { useGetCountriesQuery, useGetSingleCountryQuery } = countriesApi;
