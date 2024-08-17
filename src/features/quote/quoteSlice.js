import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    value: '',
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = quoteSlice.actions;

export default quoteSlice.reducer;
