import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from "react-redux";
import type { RootState } from '../app/store';

interface Weather {
  id: string;
  Key: number;
}

interface Images {
  id: string;
  urls: string[];
}

interface Data {
  Key: number;
}

// Define a type for the slice state
export interface WeatherState {
  isLoading: boolean,
  weather: Weather[],
  images: Images[],
  data: Data[],
}

// Define the initial state using that type
const initialState: WeatherState = {
  isLoading: true,
  weather: [],
  images: [],
  data: [],
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
    weatherData: (state, action: PayloadAction<Weather>) => {
      state.weather = action.payload;
    },
    imagesData: (state, action: PayloadAction<Images>) => {
      state.images = action.payload;
    },
    concatData: (state) => {
      state.data = state.weather.map((item: any, index: number) => ({...item, img: state.images[index]}));
    },
    sortName: (state) => {
      state.data = state.data.slice().sort((a: any, b: any) => (
        a.LocalizedName > b.LocalizedName ? 1 : a.LocalizedName < b.LocalizedName ? -1 : 0
      ));
    },
    sortTemperature: (state) => {
      state.data = state.data.slice().sort((a: any, b: any) => (
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
  return useSelector((state: RootState) => state.weather.isLoading);
}

export const useWeather = () => {
  return useSelector((state: RootState) => state.weather.weather);
}

export const useData = () => {
  return useSelector((state: RootState) => state.weather.data);
}

export default weatherSlice.reducer;