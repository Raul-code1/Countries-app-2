import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useGetSingleCountryQuery } from '../services/apiService';
import { Loading, SingleCountryInfo } from '../components';
import { useAppSelector } from '../features/hooks';

const CountryDetails = () => {
  const { code } = useParams();

  const { data, error, isLoading } = useGetSingleCountryQuery(code as string);

  const { isDarkMode } = useAppSelector((store) => store.ui);

  const themeHelper = isDarkMode === 'dark' ? 'dark-mode ' : 'light-mode';

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <h1>Something went Wrong</h1>;
  }

  return <Wrapper className={`${themeHelper} `}>{data && <SingleCountryInfo country={data} />}</Wrapper>;
};

export default CountryDetails;

const Wrapper = styled.section`
  min-height: 100vh;
  transition: var(--transition);
`;
