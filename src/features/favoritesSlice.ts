import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from "react-redux";

// Define the initial state using that type
export interface Favorites {
  Key: number;
  city: string;
  country: string;
  weatherTemperatureUnit: string;
  weatherTemperatureValue: number;
  weatherTemperatureUnitF: string;
  weatherTemperatureValueF: number;
  isFavorite: boolean;
  isShowDelete: boolean;
  weatherIcon: number;
  weatherText: string;
  img: string;
}

export interface FavoritesState {
  favorites: Favorites[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',

  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addFavoriteItem: (state, action: PayloadAction<Favorites>) => {
      state.favorites = state.favorites.concat(action.payload);
    },
    removeFavoriteItem: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((city: Favorites) => city.Key !== action.payload);
    },
  }
})

// Action creators are generated for each case reducer function
export const {
  addFavoriteItem,
  removeFavoriteItem
} = favoritesSlice.actions;

// selectors
export const useFavorites = () => {
  //return useSelector((state: RootState) => state.favorites.favorites);
  return useSelector((state: { favorites: FavoritesState }) => state.favorites.favorites);
}

export default favoritesSlice.reducer;
