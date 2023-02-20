import styled from 'styled-components';

import { FaTemperatureHigh, FaCloud, FaWind, FaMapMarkedAlt, FaMapMarked } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { BiWorld } from 'react-icons/bi';
import { MdFormatListNumbered } from 'react-icons/md';
import { WeatherCountry } from '../interfaces/WeatherInterface';

type Props = {
  weatherFeatures: WeatherCountry;
};

const DisplayWeatherInfo = ({ weatherFeatures }: Props) => {
  const {
    name,
    weather,
    main: { temp, humidity, pressure },
    clouds: { all },
    wind: { speed },
    cod,
    coord,
  } = weatherFeatures;

  const { description } = weather[0];

  const temperatureHelper = (temp && temp - 274.15).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Wrapper>
      <div className="header">
        <h3>Weather of {name} </h3>
        <h5>{description}</h5>
      </div>
      <div className="weather-country-features">
        <div>
          <div className="features-p">
            <p>Temperature :</p>
            <span>
              {temperatureHelper} C &nbsp;
              <FaTemperatureHigh />
            </span>
          </div>
          <div className="features-p">
            <p>Humidity :</p>
            <span>
              {humidity}&nbsp;
              <WiHumidity />
            </span>
          </div>
          <div className="features-p">
            <p>Cloudiness :</p>
            <span>
              {all}% &nbsp;
              <FaCloud />
            </span>
          </div>
          <div className="features-p">
            <p>Wind speed :</p>
            <span>
              {speed} &nbsp;
              <FaWind />
            </span>
          </div>
        </div>
        <div>
          <div className="features-p">
            <p>Pressure : </p>
            <span>
              {pressure} <BiWorld />
            </span>
          </div>
          <div className="features-p">
            <p>Cod :</p>
            <span>
              {cod} <MdFormatListNumbered />
            </span>
          </div>
          <div className="features-p">
            <p>Longitude :</p>
            <span>
              {coord.lon} <FaMapMarkedAlt />
            </span>
          </div>
          <div className="features-p">
            <p>Latitude :</p>
            <span>
              {coord.lat} <FaMapMarked />
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DisplayWeatherInfo;

const Wrapper = styled.div`
  .header {
    text-align: center;
    padding: 1.25rem 0rem;
    h3 {
      font-size: 1.6875rem;
    }
    h5 {
      font-size: 1.25rem;
    }
  }

  .features-p {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    font-weight: bold;
  }

  @media (min-width: 767px) {
    .header {
      text-align: justify;
    }
    .weather-country-features {
      display: flex;
      div {
        width: 50%;
      }
    }
  }
`;
