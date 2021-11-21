import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { createApi } from 'unsplash-js';

export const fetchCityItem = createAsyncThunk(
  "search/fetchCityFullInfo",
  (cityName: string) =>
    axios
      .get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=r0f1L4gMsX9SDBDfkv3b8tlkPCBILlvL&q=${cityName}`)
      .then(response => response.data)
      .then(data =>
        axios
          .get(`http://dataservice.accuweather.com/currentconditions/v1/${data[0].Key}?apikey=r0f1L4gMsX9SDBDfkv3b8tlkPCBILlvL`)
          .then(response => response.data)
      )
      .catch((error: Error) => error)
);

export const fetchCityImage = createAsyncThunk(
  "search/fetchCityImage",
  (cityName: string) => {
    const unsplash = createApi({ accessKey: 'UFb-0W1ebRAVU6jawg9txBoQf633c4t8tA7TRvpDb88' });
    try {
      return unsplash.photos.getRandom({
        query: cityName,
        count: 1,
        orientation: 'landscape',
      }).then(resp => resp);
    }
    catch {(error: Error) => {
      console.log('Unsplash Error: ',error);
    }}
  }
);

interface Data {
    Key: number;
    WeatherText: string;
    WeatherIcon: number;
    Country:  string;
    Temperature: {
        Metric: {
            Unit: string;
            Value: number;
        };
        Imperial: {
            Unit: string;
            Value: number;
        };
    };
}

// Define a type for the slice state
export interface SearchState {
    loading: string,
    data: Data[],
    searchCityName: string,
    searchCityImage: string,
}

// Define the initial state using that type
const initialState: SearchState = {
    data: [],
    searchCityName: '',
    searchCityImage: '',
    loading: "idle",
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    writeCityName: (state, action) => {
      state.searchCityName = action.payload;
    },
  },
  extraReducers: {
    [fetchCityItem.pending.type]: (state, action) => {
      state.loading =  "loading";
      state.data = action.payload;
    },
    [fetchCityItem.fulfilled.type]: (state, action) => {
      state.loading =  "idle";
      state.data = action.payload;
    },
    [fetchCityImage.fulfilled.type]: (state, action) => {
      state.loading =  "idle";
      state.searchCityImage = action.payload.response[0].urls.small;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  writeCityName,
} = searchSlice.actions;

// selectors
export const useIsLoading = ():string => {
    return useSelector(
      (state: { search: SearchState }) => state.search.loading
    );
  };
export const useData = ():Data[] => {
  return useSelector(
    (state: { search: SearchState }) => state.search.data
  );
};
export const useSearchCityName = ():string => {
  return useSelector(
    (state: { search: SearchState }) => state.search.searchCityName
  );
};
export const useSearchCityImage = ():string => {
  return useSelector(
    (state: { search:SearchState }) => state.search.searchCityImage
  );
}

export default searchSlice.reducer;