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
    sortName: (state) => {
      state.weather = state.weather.slice().sort((a, b) => (
        a.LocalizedName < b.LocalizedName ? 1 : a.LocalizedName > b.LocalizedName ? -1 : 0
      ));
    },
    sortTemperature: (state) => {
      state.weather = state.weather.slice().sort((a, b) => (
        a.Temperature.Metric.Value < b.Temperature.Metric.Value ? 1 : a.Temperature.Metric.Value > b.Temperature.Metric.Value ? -1 : 0
      ));
    },
  }
})

// Action creators are generated for each case reducer function
export const {
  loading,
  weatherData,
  imagesData,
  sortName,
  sortTemperature,
} = weatherSlice.actions;

export default weatherSlice.reducer;