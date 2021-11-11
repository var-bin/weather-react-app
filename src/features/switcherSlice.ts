import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// Define a type for the slice state
interface SwitcherState {
  isListLayout: boolean;
  isUnitImperial: boolean;
}

// Define the initial state using that type
const initialState: SwitcherState = {
  isListLayout: false,
  isUnitImperial: false
}

export const switcherSlice = createSlice({
  name: 'switcher',
  initialState,
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
export const useIsUnitImperial = ():boolean => {
  return useSelector((state: { switcher: SwitcherState }) => state.switcher.isUnitImperial);
}

export const useIsListLayout = ():boolean => {
  return useSelector((state: { switcher: SwitcherState }) => state.switcher.isListLayout);
}

export default switcherSlice.reducer;
