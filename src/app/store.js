import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weatherSlice';
import favoritesReducer from '../features/favoritesSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    favorites: favoritesReducer,
  },
})