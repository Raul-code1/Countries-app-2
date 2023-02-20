import styled from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useAppSelector, useAppDispatch } from '../features/hooks';
import { toggleTheme } from '../features/uiSlice/uiSlice';

const NavBar = () => {
  const { isDarkMode } = useAppSelector((store) => store.ui);
  const dispatch = useAppDispatch();

  const themeHelper = isDarkMode === 'dark' ? 'dark-mode-lighter' : 'light-mode';

  return (
    <Wrapper className={`padding ${themeHelper} `}>
      <div className="nav-bar-container section">
        <h1>Where in the world?</h1>
        <button onClick={() => dispatch(toggleTheme())} className={`${themeHelper}`}>
          <span>{isDarkMode === 'dark' ? <FiSun /> : <FiMoon />}</span>
          {isDarkMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.nav`
  height: 5vh;
  display: flex;
  justify-content: center;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  position: relative;
  z-index: 999;
  .nav-bar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 1.0625rem;
    }
    button {
      background-color: transparent;
      border: none;
      display: flex;
      justify-content: center;
      gap: 0.3125rem;
      cursor: pointer;
      font-weight: 300;
    }
  }

  @media (min-width: 767px) {
    .nav-bar-container {
      h1 {
        font-size: 1.25rem;
      }
      button {
        font-size: 1.0625rem;
      }
    }
  }
  @media (min-width: 1200px) {
    .nav-bar-container {
      h1 {
        font-size: 1.3125rem;
      }
      button {
        font-size: 1.125rem;
      }
    }
  }
`;
