import styled from 'styled-components';
import { useAppSelector } from '../features/hooks';

import { FilterSection, CountryList } from '../components';

const HomePage = () => {
  const { isDarkMode } = useAppSelector((store) => store.ui);

  const themeHelper = isDarkMode === 'dark' ? 'dark-mode ' : 'light-mode';
  return (
    <Wrapper className={`section-below-nav ${themeHelper}   `}>
      <FilterSection />
      <CountryList />
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.section`
  transition: var(--transition);
  position: relative;
  z-index: 99;
  overflow: hidden;
`;
