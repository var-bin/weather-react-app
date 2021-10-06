import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from "react-redux";

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavoriteItem: (state, action) => {
      state.favorites = state.favorites.concat(action.payload);
    },
    removeFavoriteItem: (state, action) => {
      state.favorites = state.favorites.filter((city) => city.Key !== action.payload);
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
  return useSelector(state => state.favorites.favorites);
}

export default favoritesSlice.reducer;