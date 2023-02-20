import styled from 'styled-components';

import { CountryCard, Loading } from './index';
import { useAppSelector } from '../features/hooks';
import { useGetCountriesQuery } from '../services/apiService';

const CountryList = () => {
  const { selectValue, querySearchValue } = useAppSelector((store) => store.ui);
  const { data, isLoading } = useGetCountriesQuery(selectValue);

  if (isLoading) {
    return <Loading />;
  }
  const filteredCountries = data?.filter((country) =>
    country.name.common.toLocaleLowerCase().startsWith(querySearchValue.toLocaleLowerCase()),
  );

  return (
    <Wrapper className={`section padding animate__animated animate__fadeIn `}>
      {filteredCountries?.length === 0 && `Not Country found make sure you have typed the correctly `}
      {filteredCountries?.map((country, idx) => {
        return <CountryCard country={country} key={idx} />;
      })}
    </Wrapper>
  );
};

export default CountryList;

const Wrapper = styled.section`
  display: grid;
  grid-row-gap: 0.9375rem;
  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1.875rem;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
