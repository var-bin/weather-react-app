import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from "react-redux";

export const switcherSlice = createSlice({
  name: 'switcher',
  initialState: {
    isListLayout: false,
    isUnitImperial: false
  },
  reducers: {
    toggleLayout: (state) => {
        state.isListLayout = !state.isListLayout;
    },
    toggleTemperature: (state) => {
        state.isUnitImperial = !state.isUnitImperial;
    },
  }
})

// Action creators are generated for each case reducer function
export const {
    toggleLayout,
    toggleTemperature
} = switcherSlice.actions;

// selectors
export const useIsUnitImperial = () => {
  return useSelector(state => state.switcher.isUnitImperial);
}

export const useIsListLayout = () => {
  return useSelector(state => state.switcher.isListLayout);
}

export default switcherSlice.reducer;