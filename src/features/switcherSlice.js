import { createSlice } from '@reduxjs/toolkit';

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

export default switcherSlice.reducer;