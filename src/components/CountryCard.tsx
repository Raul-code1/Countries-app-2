import styled from 'styled-components';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import { useAppSelector } from '../features/hooks';
import { Country } from '../interfaces/CountryInterface';

type Props = {
  country: Country;
};

const CountryCard = ({ country }: Props) => {
  const { isDarkMode } = useAppSelector((store) => store.ui);

  const themeHelper = isDarkMode === 'dark' ? 'dark-mode-lighter' : 'light-mode';

  const { flags, name, population, region, cca2, capital } = country;
  const formattedPopulation = numeral(population).format('0,0');

  return (
    <Wrapper className={`${themeHelper}`}>
      <div className="flag-image-container">
        <img className="img" src={flags.png} alt={name.common} />
      </div>
      <div className="info-country-card-container">
        <h4>{name.common.length > 28 ? `${name.common.substring(0, 20)}...` : name.common}</h4>
        <p className="bold">
          Population: <span className="font-light">{formattedPopulation}</span>
        </p>
        <p className="bold">
          Region: <span className="font-light">{region}</span>
        </p>
        <p className="bold">
          Capital: <span className="font-light">{capital}</span>
        </p>{' '}
        <Link
          className={`link  ${isDarkMode === 'dark' && 'link-dark-mode'}`}
          to={`/country/${cca2.toLocaleLowerCase()}`}
        >
          More info...
        </Link>
      </div>
    </Wrapper>
  );
};

export default CountryCard;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  .flag-image-container {
    height: 50%;
    width: 100%;
    background-color: rebeccapurple;
  }

  .info-country-card-container {
    height: 50%;
    padding: 0.9375rem 0.625rem;
  }

  .link {
    text-decoration: underline;
    margin-bottom: 0.625rem;
  }

  .link-dark-mode {
    color: #ff728a;
  }
`;
