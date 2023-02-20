import { Link } from 'react-router-dom';
import styled from 'styled-components';
import numeral from 'numeral';
import { BiArrowBack } from 'react-icons/bi';

import { Country } from '../interfaces/CountryInterface';
import { useAppSelector } from '../features/hooks';
import { WeatherInfo } from './index';

type Props = {
  country: Country[];
};

const SingleCountryInfo = ({ country }: Props) => {
  const { isDarkMode } = useAppSelector((store) => store.ui);
  const themeHelper = isDarkMode === 'dark' ? 'dark-mode-lighter ' : 'light-mode';

  const { name, flags, population, region, subregion, capital, tld, currencies, languages, borders, latlng } =
    country[0];

  const nativeNameHelper = Object.values(name.nativeName);
  const formattedPopulation = numeral(population).format('0,0');
  const currenciesHelper = Object.keys(currencies);
  const languagesHelper = Object.values(languages);

  return (
    <Wrapper className={`section animate__animated animate__fadeIn `}>
      <div className="back-home-link">
        <Link className={`link-home ${themeHelper}`} to="/">
          <BiArrowBack />
          Back Home
        </Link>
      </div>
      <div className="single-country-info-container">
        <div className="img-single-country-container">
          <img src={flags.png} className="img" alt={name.common} />
        </div>
        <div className="single-country-features">
          <div className="first-child">
            <h1 className="animate_animated animate__bounceIn">{name.common}</h1>
            <p>
              Native name : <span>{nativeNameHelper[0].official}</span>
            </p>
            <p>
              Population : <span>{formattedPopulation}</span>
            </p>
            <p>
              Region : <span>{region}</span>
            </p>
            <p>
              Subregion : <span>{subregion}</span>
            </p>
            <p>
              Capital : <span>{capital}</span>
            </p>
          </div>
          <div className="second-child">
            <p>
              Top level domain : &nbsp;
              <span>
                {tld?.map((d, idx) => (
                  <span key={idx}>{d}&nbsp; &nbsp; </span>
                ))}
              </span>
            </p>
            <p>
              Currencies :&nbsp;
              {currenciesHelper?.map((c, idx) => (
                <span key={idx}>{c}</span>
              ))}
            </p>
            <p>
              Languages :&nbsp;
              {languagesHelper?.map((l, idx) => (
                <span key={idx}>{l}&nbsp;&nbsp;</span>
              ))}
            </p>
          </div>
          <div className="third-child">
            <p>Border Countries:</p>
            <div>
              {borders
                ? borders.map((b, idx) => (
                    <Link to={`/country/${b}`} className={`border-country ${themeHelper}`} key={idx}>
                      {b}
                    </Link>
                  ))
                : 'No border countries'}
            </div>
          </div>
        </div>
      </div>
      <WeatherInfo lat={latlng[0]} lng={latlng[1]} />
    </Wrapper>
  );
};

export default SingleCountryInfo;

const Wrapper = styled.div`
  .back-home-link {
    padding: 3.125rem 0rem;
    .link-home {
      padding: 10px;
      box-shadow: var(--box-shadow);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30%;
      cursor: pointer;
      transition: var(--transition);
    }
    .link-home:hover {
      transform: scale(0.9);
    }
  }

  .single-country-info-container {
    .img-single-country-container {
      overflow: hidden;
      border-radius: var(--radius);
    }
    .single-country-features,
    .second-child,
    .third-child {
      padding-top: 0.9375rem;
    }

    .third-child {
      div {
        display: flex;
        flex-wrap: wrap;
        gap: 0.625rem;
        padding-bottom: 1.25rem;
      }
    }
  }

  .border-country {
    box-shadow: var(--box-shadow);
    font-weight: 300;
    padding: 0.125rem 1.25rem;
    margin: 0rem 0.3125rem;
  }

  p {
    font-weight: bolder;
  }

  span {
    font-weight: 300;
  }

  @media (min-width: 767px) {
    .back-home-link {
      .link-home {
        width: 20%;
      }
    }
    .single-country-info-container {
      .single-country-features {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .third-child {
          grid-column: 1/3;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .back-home-link {
      .link-home {
        width: 10%;
      }
    }
    .single-country-info-container {
      display: flex;
      gap: 2.5rem;
      .img-single-country-container {
        width: 45%;
      }
      .single-country-features {
        grid-column-gap: 1.25rem;
        width: 55%;
        padding-top: 0rem;
        h1 {
          font-size: 2.5rem;
        }

        .second-child {
          margin-top: 1.5625rem;
        }
      }
    }
  }
`;
