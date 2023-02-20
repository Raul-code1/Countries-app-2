import { createSlice } from '@reduxjs/toolkit';
import { addItemToLocalStorage } from '../../helper/localStorage';

type UiState = {
  isDarkMode: 'light' | 'dark' | null;
  selectValue: string;
  selectOptions: string[];
  querySearchValue: string;
};

const initialState: UiState = {
  isDarkMode: 'light',
  selectValue: 'all',
  selectOptions: ['all', 'africa', 'americas', 'europe', 'oceania', 'asia'],
  querySearchValue: '',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.isDarkMode === 'light') {
        state.isDarkMode = 'dark';
      } else {
        state.isDarkMode = 'light';
      }
      addItemToLocalStorage('theme', state.isDarkMode);
    },
    setSelectValue: (state, action) => {
      state.selectValue = action.payload;
    },
    setQuerySearchValue: (state, action) => {
      state.querySearchValue = action.payload;
    },
  },
});

export const { toggleTheme, setSelectValue, setQuerySearchValue } = uiSlice.actions;
