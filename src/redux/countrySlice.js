// src/redux/countrySlice.js --->

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://restcountries.com/v2/all?fields=name,region,flag');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  allCountries: [],
  displayedCountries: [],
  loading: false,
  error: null,
  pageSize: 10,
  currentPage: 1,
  filterRegion: 'All', // Filter by region
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filterRegion = action.payload;
      state.currentPage = 1;
      state.displayedCountries = state.allCountries
        .filter(c => action.payload === 'All' || c.region === action.payload)
        .slice(0, state.pageSize);
    },
    loadMore: (state) => {
      const filtered = state.allCountries.filter(c => 
        state.filterRegion === 'All' || c.region === state.filterRegion
      );
      const nextPage = state.currentPage + 1;
      const start = (nextPage - 1) * state.pageSize;
      const newCountries = filtered.slice(start, start + state.pageSize);
      state.displayedCountries = [...state.displayedCountries, ...newCountries];
      state.currentPage = nextPage;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.allCountries = action.payload;
        const filtered = action.payload.filter(c => state.filterRegion === 'All' || c.region === state.filterRegion);
        state.displayedCountries = filtered.slice(0, state.pageSize);
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilter, loadMore } = countrySlice.actions;
export default countrySlice.reducer;