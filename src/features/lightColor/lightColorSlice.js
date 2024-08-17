import { createSlice } from "@reduxjs/toolkit";

export const lightColorSlice = createSlice({
  name: 'lightColor',
  initialState: {
    value: '',
  },
  reducers: {
    setLightColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLightColor } = lightColorSlice.actions;

export default lightColorSlice.reducer;
