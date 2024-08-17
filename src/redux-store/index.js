import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from 'features/quote/quoteSlice';
import authorReducer from 'features/author/authorSlice';
import lightColorReducer from 'features/lightColor/lightColorSlice';
import darkColorReducer from 'features/darkColor/darkColorSlice';
import darkestColorReducer from 'features/darkestColor/darkestColorSlice';

export default configureStore({
  reducer: {
    quote: quoteReducer,
    author: authorReducer,
    lightColor: lightColorReducer,
    darkColor: darkColorReducer,
    darkestColor: darkestColorReducer,
  },
});
