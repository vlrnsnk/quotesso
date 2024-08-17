import { createSlice } from "@reduxjs/toolkit";

export const authorSlice = createSlice({
  name: 'author',
  initialState: {
    value: '',
  },
  reducers: {
    setAuthor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAuthor } = authorSlice.actions;

export default authorSlice.reducer;
