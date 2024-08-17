import { createSlice } from "@reduxjs/toolkit";

export const darkestColorSlice = createSlice({
  name: 'darkestColor',
  initialState: {
    value: '',
  },
  reducers: {
    setDarkestColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDarkestColor } = darkestColorSlice.actions;

export default darkestColorSlice.reducer;
