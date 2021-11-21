import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weatherSlice';
import favoritesReducer from '../features/favoritesSlice';
import searchReducer from '../features/searchSlice';
import switcherReducer from '../features/switcherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    favorites: favoritesReducer,
    search: searchReducer,
    switcher: switcherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
