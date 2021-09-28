import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    isLoading: true,
    weather: null,
    images: null,
  },
  reducers: {
    loading: (state, action) => {
        state.isLoading = action.payload;
    },
    weatherData: (state, action) => {
        state.weather = action.payload;
    },
    imagesData: (state, action) => {
        state.images = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const {
    loading,
    weatherData,
    imagesData,
} = weatherSlice.actions;

export default weatherSlice.reducer;