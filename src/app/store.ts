import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from '../features/weatherSlice';
import favoritesReducer from '../features/favoritesSlice';
import switcherReducer from '../features/switcherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    favorites: favoritesReducer,
    switcher: switcherReducer,
  },
});

//export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;