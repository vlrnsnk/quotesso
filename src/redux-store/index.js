import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from 'features/quote/quoteSlice';

export default configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
