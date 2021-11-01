import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from "react-redux";
//import type { RootState } from '../app/store';

interface Weather {
  Key: number;
  LocalizedName: string;
  EnglishName: string;
  weatherText: string;
  WeatherIcon: number;
  Country: {
      LocalizedName: string;
  },
  Temperature: {
      Metric: {
          Unit: string;
          Value: number;
      },
      Imperial: {
          Unit: string;
          Value: number;
      },
  },
}

interface Data {
  Key: number;
  LocalizedName: string;
  EnglishName: string;
  weatherText: string;
  WeatherIcon: number;
  Country: {
      LocalizedName: string;
  },
  Temperature: {
      Metric: {
          Unit: string;
          Value: number;
      },
      Imperial: {
          Unit: string;
          Value: number;
      },
  },
  img: string;
}

// Define a type for the slice state
export interface WeatherState {
  isLoading: boolean,
  weather: Weather[],
  images: string[],
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
    weatherData: (state, action: PayloadAction<Weather[]>) => {
      state.weather = action.payload;
    },
    imagesData: (state, action: PayloadAction<string[]>) => {
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
  //return useSelector((state: RootState) => state.weather.isLoading);
  return useSelector((state: any) => state.weather.isLoading);
}

export const useWeather = () => {
  //return useSelector((state: RootState) => state.weather.weather);
  return useSelector((state: any) => state.weather.weather);
}

export const useData = () => {
  //return useSelector((state: RootState) => state.weather.data);
  return useSelector((state: any) => state.weather.data);
}

export default weatherSlice.reducer;