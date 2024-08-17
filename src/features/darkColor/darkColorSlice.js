import { createSlice } from "@reduxjs/toolkit";

export const darkColorSlice = createSlice({
  name: 'darkColor',
  initialState: {
    value: '',
  },
  reducers: {
    setDarkColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDarkColor } = darkColorSlice.actions;

export default darkColorSlice.reducer;
