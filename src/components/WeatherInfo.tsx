import styled from 'styled-components';

import { useGetCountryWeatherQuery } from '../services/weatherApi';
import { DisplayWeatherInfo } from './';

type Props = {
  lat: number;
  lng: number;
};

const WeatherInfo = ({ lat, lng }: Props) => {
  const { data, isLoading } = useGetCountryWeatherQuery({ lat, lng });

  if (isLoading) {
    return <h1>Loading weather data...</h1>;
  }

  return <Wrapper>{data && <DisplayWeatherInfo weatherFeatures={data} />}</Wrapper>;
};

export default WeatherInfo;

const Wrapper = styled.div`
  padding: 1.25rem 0rem;
`;
