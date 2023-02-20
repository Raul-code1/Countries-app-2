import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';

import { useAppSelector, useAppDispatch } from '../features/hooks';
import { setSelectValue, setQuerySearchValue } from '../features/uiSlice/uiSlice';

const FilterSection = () => {
  const { selectValue, selectOptions, querySearchValue } = useAppSelector((store) => store.ui);
  const dispatch = useAppDispatch();

  const { isDarkMode } = useAppSelector((store) => store.ui);
  const themeHelper = isDarkMode === 'dark' ? 'dark-mode-lighter ' : 'light-mode';

  return (
    <Wrapper className="section padding">
      <div className={`${themeHelper} input-container`}>
        <span>
          <FcSearch />
        </span>
        <input
          className={`${themeHelper}`}
          type="text"
          value={querySearchValue}
          placeholder="Search for a country.."
          onChange={(event) => dispatch(setQuerySearchValue(event.target.value))}
        />
      </div>
      <div className={`select-container `}>
        <select
          className={`${themeHelper}`}
          name="region"
          value={selectValue}
          onChange={(event) => dispatch(setSelectValue(event.target.value))}
        >
          {selectOptions.map((option, idx) => (
            <option value={option} key={idx}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </Wrapper>
  );
};

export default FilterSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.0625rem;
  padding: 1.25rem 0px;
  width: 80%;
  transition: var(--transition);
  .input-container {
    width: 100%;
    height: 40px;
    padding: 0.625rem 0.1875rem;
    display: flex;
    align-items: center;
    box-shadow: var(--box-shadow);
    border-radius: var(--radius);
    input {
      width: 90%;
      height: 100%;
      border: none;
      outline: none;
    }
    span {
      width: 10%;
      font-size: 1.25rem;
      padding-left: 0.5rem;
    }
  }
  .select-container {
    width: 50%;
    display: flex;
    align-items: center;
    select {
      box-shadow: var(--box-shadow);
      width: 100%;
      padding: 0.625rem;
      border: none;
      border-radius: var(--radius);
      cursor: pointer;
      height: 100%;
      text-transform: capitalize;
      option {
        text-transform: capitalize;
      }
    }
  }
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    .input-container {
      width: 40%;
      height: 38px;
    }

    .select-container {
      width: 30%;
      justify-content: flex-end;
      select {
        width: 60%;
      }
    }
  }
`;
