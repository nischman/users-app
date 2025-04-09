import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { FiltersState } from './types';

const initialState: FiltersState = {
  city: undefined,
  companyName: undefined,
  query: undefined,
  cities: [],
  companies: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      return { ...state, ...action.payload };
    },
    clearFilters: (state) => {
      state.city = undefined;
      state.companyName = undefined;
    },
    setFilterOptions: (
      state,
      action: PayloadAction<{ cities: string[]; companies: string[] }>
    ) => {
      state.cities = action.payload.cities;
      state.companies = action.payload.companies;
    },
  },
});

export const { setFilters, clearFilters, setFilterOptions } = filtersSlice.actions;
export default filtersSlice.reducer;