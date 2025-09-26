// src/redux/store.js ---->
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import countryReducer from './countrySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    countries: countryReducer,
  },
});