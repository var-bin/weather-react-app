import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from "react-redux";

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    isLoading: true,
    weather: null,
    images: null,
    data: [],
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
    concatData: (state) => {
      state.data = state.weather.map((item, index) => ({...item, img: state.images[index]}));
    },
    sortName: (state) => {
      state.data = state.data.slice().sort((a, b) => (
        a.LocalizedName > b.LocalizedName ? 1 : a.LocalizedName < b.LocalizedName ? -1 : 0
      ));
    },
    sortTemperature: (state) => {
      state.data = state.data.slice().sort((a, b) => (
        a.Temperature.Metric.Value > b.Temperature.Metric.Value ? 1 : a.Temperature.Metric.Value < b.Temperature.Metric.Value ? -1 : 0
      ));
    },
  }
})

// Action creators are generated for each case reducer function
export const {
  loading,
  weatherData,
  imagesData,
  concatData,
  sortName,
  sortTemperature,
} = weatherSlice.actions;

// selectors
export const useIsLoading = () => {
  return useSelector(state => state.weather.isLoading);
}

export const useWeather = () => {
  return useSelector(state => state.weather.weather);
}

export const useData = () => {
  return useSelector(state => state.weather.data);
}

export default weatherSlice.reducer;